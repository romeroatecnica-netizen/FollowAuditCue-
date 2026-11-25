import JSZip from 'jszip';

export interface AuditAccount {
  key: string;
  username: string;
  profileUrl: string;
  timestamp: number | null;
}

export interface AuditResult {
  sourceName: string;
  isSample: boolean;
  detectedFormats: Array<'JSON' | 'HTML'>;
  parsedFilesCount: number;
  parsedAtIso: string;
  followers: AuditAccount[];
  following: AuditAccount[];
  notFollowingBack: AuditAccount[];
  mutuals: AuditAccount[];
}

export class ZipAuditError extends Error {
  code: 'INVALID_ZIP' | 'MISSING_LISTS' | 'ENCRYPTED_ZIP' | 'GENERIC';

  constructor(code: 'INVALID_ZIP' | 'MISSING_LISTS' | 'ENCRYPTED_ZIP' | 'GENERIC', message: string) {
    super(message);
    this.code = code;
  }
}

const RESERVED_IG_SEGMENTS = new Set([
  '',
  'explore',
  'accounts',
  'reels',
  'stories',
  'direct',
  'p',
  'reel',
  'tv',
  'about',
  'legal',
  'privacy',
  'terms',
  'developer',
]);

export function normalizeUsername(raw: string): string | null {
  const cleaned = raw.trim().replace(/^@+/, '').replace(/\/+$/, '');
  if (!cleaned) return null;
  // Reject URLs or spaces
  if (/\s/.test(cleaned) || cleaned.includes('/')) return null;
  if (RESERVED_IG_SEGMENTS.has(cleaned.toLowerCase())) return null;
  if (!/^[a-zA-Z0-9._]{1,30}$/.test(cleaned)) return null;
  return cleaned;
}

export function extractUsernameFromHref(href: string): string | null {
  if (!href) return null;
  try {
    const parsed = new URL(href.startsWith('http') ? href : `https://www.instagram.com/${href.replace(/^\/+/, '')}`);
    if (!parsed.hostname.includes('instagram.com')) return null;
    const segments = parsed.pathname.split('/').filter(Boolean);
    if (segments.length === 0) return null;
    // Meta exports often use https://www.instagram.com/_u/username
    if (segments[0] === '_u' && segments[1]) {
      return normalizeUsername(segments[1]);
    }
    return normalizeUsername(segments[0]);
  } catch {
    return null;
  }
}

function normalizeTimestamp(ts: unknown): number | null {
  if (typeof ts !== 'number' || !Number.isFinite(ts) || ts <= 0) return null;
  // Convert seconds to ms if needed
  return ts < 1e12 ? ts * 1000 : ts;
}

function extractEntriesFromUnknownJson(data: unknown, out: Map<string, AuditAccount>): void {
  if (!data) return;

  if (Array.isArray(data)) {
    for (const item of data) {
      extractEntriesFromUnknownJson(item, out);
    }
    return;
  }

  if (typeof data === 'string') {
    const username = normalizeUsername(data);
    if (username) {
      upsertAccount(out, username, `https://www.instagram.com/${username}/`, null);
    }
    return;
  }

  if (typeof data === 'object') {
    const record = data as Record<string, unknown>;

    // Standard Meta export entry: { title, string_list_data: [{ href, value, timestamp }] }
    if (Array.isArray(record.string_list_data)) {
      const titleUsername = typeof record.title === 'string' ? normalizeUsername(record.title) : null;
      for (const sld of record.string_list_data) {
        if (!sld || typeof sld !== 'object') continue;
        const entry = sld as Record<string, unknown>;
        const href = typeof entry.href === 'string' ? entry.href : '';
        const valueUsername = typeof entry.value === 'string' ? normalizeUsername(entry.value) : null;
        const hrefUsername = extractUsernameFromHref(href);
        const finalUsername = valueUsername || titleUsername || hrefUsername;
        if (finalUsername) {
          upsertAccount(
            out,
            finalUsername,
            `https://www.instagram.com/${finalUsername}/`,
            normalizeTimestamp(entry.timestamp),
          );
        }
      }
      return;
    }

    // Alternate older formats: { username: "..." } or { relationships_following: [...] }
    if (typeof record.username === 'string') {
      const username = normalizeUsername(record.username);
      if (username) {
        upsertAccount(
          out,
          username,
          `https://www.instagram.com/${username}/`,
          normalizeTimestamp(record.timestamp),
        );
      }
      return;
    }

    // Recurse into known wrapper keys or all array/object properties
    for (const key of Object.keys(record)) {
      if (key === 'media_list_data') continue;
      extractEntriesFromUnknownJson(record[key], out);
    }
  }
}

function extractEntriesFromHtml(htmlText: string, out: Map<string, AuditAccount>): void {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');
  const anchors = Array.from(doc.querySelectorAll('a[href]'));

  for (const anchor of anchors) {
    const href = anchor.getAttribute('href') || '';
    const hrefUser = extractUsernameFromHref(href);
    const textUser = normalizeUsername(anchor.textContent || '');
    const username = hrefUser || textUser;
    if (!username) continue;

    let parsedTs: number | null = null;
    const container = anchor.closest('div, li, tr, td') || anchor.parentElement;
    if (container && container.textContent) {
      const siblingTexts = container.textContent
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.includes(username));
      for (const candidate of siblingTexts) {
        const ms = Date.parse(candidate);
        if (!Number.isNaN(ms) && ms > 946684800000) {
          parsedTs = ms;
          break;
        }
      }
    }

    upsertAccount(out, username, `https://www.instagram.com/${username}/`, parsedTs);
  }
}

function upsertAccount(
  map: Map<string, AuditAccount>,
  username: string,
  profileUrl: string,
  timestamp: number | null,
): void {
  const key = username.toLowerCase();
  const existing = map.get(key);
  if (!existing) {
    map.set(key, {key, username, profileUrl, timestamp});
    return;
  }
  if (timestamp && (!existing.timestamp || timestamp > existing.timestamp)) {
    map.set(key, {...existing, timestamp});
  }
}

type FileCategory = 'followers' | 'following' | null;

function classifyExportPath(filePath: string): {category: FileCategory; format: 'JSON' | 'HTML' | null} {
  const normalized = filePath.replace(/\\/g, '/').toLowerCase();
  const baseName = normalized.split('/').pop() || '';

  const isJson = baseName.endsWith('.json');
  const isHtml = baseName.endsWith('.html') || baseName.endsWith('.htm');
  if (!isJson && !isHtml) {
    return {category: null, format: null};
  }

  const format: 'JSON' | 'HTML' = isJson ? 'JSON' : 'HTML';

  // Exclude unrelated Meta lists that share similar tokens
  const excludedTokens = [
    'hashtag',
    'pending_follow',
    'recent_follow',
    'follow_request',
    'close_friend',
    'blocked',
    'restricted',
    'hide_story',
    'removed_suggestion',
    'recently_unfollowed',
    'who_you_ve_favorited',
  ];
  if (excludedTokens.some((tok) => baseName.includes(tok))) {
    return {category: null, format};
  }

  if (/^followers(_\d+)?\.(json|html?)$/.test(baseName)) {
    return {category: 'followers', format};
  }
  if (/^following(_\d+)?\.(json|html?)$/.test(baseName)) {
    return {category: 'following', format};
  }

  // Fallback for renamed files inside followers_and_following folder
  if (normalized.includes('followers_and_following')) {
    if (baseName.startsWith('followers')) return {category: 'followers', format};
    if (baseName.startsWith('following')) return {category: 'following', format};
  }

  return {category: null, format};
}

export function computeAuditSets(
  followersMap: Map<string, AuditAccount>,
  followingMap: Map<string, AuditAccount>,
  meta: {
    sourceName: string;
    isSample: boolean;
    detectedFormats: Array<'JSON' | 'HTML'>;
    parsedFilesCount: number;
  },
): AuditResult {
  const followers = Array.from(followersMap.values()).sort((a, b) => a.key.localeCompare(b.key));
  const following = Array.from(followingMap.values()).sort((a, b) => a.key.localeCompare(b.key));

  const notFollowingBack: AuditAccount[] = [];
  const mutuals: AuditAccount[] = [];

  for (const account of following) {
    if (followersMap.has(account.key)) {
      mutuals.push(account);
    } else {
      notFollowingBack.push(account);
    }
  }

  return {
    sourceName: meta.sourceName,
    isSample: meta.isSample,
    detectedFormats: meta.detectedFormats,
    parsedFilesCount: meta.parsedFilesCount,
    parsedAtIso: new Date().toISOString(),
    followers,
    following,
    notFollowingBack,
    mutuals,
  };
}

export async function parseInstagramExportFiles(files: File[]): Promise<AuditResult> {
  if (!files || files.length === 0) {
    throw new ZipAuditError('GENERIC', 'No files provided.');
  }

  const followersMap = new Map<string, AuditAccount>();
  const followingMap = new Map<string, AuditAccount>();
  const formatsFound = new Set<'JSON' | 'HTML'>();
  let parsedFilesCount = 0;

  // If a .zip file is included, process the first .zip locally with JSZip
  const zipFile = files.find((f) => f.name.toLowerCase().endsWith('.zip'));

  if (zipFile) {
    let zip: JSZip;
    try {
      const buffer = await zipFile.arrayBuffer();
      zip = await JSZip.loadAsync(buffer);
    } catch (err) {
      const msg = err instanceof Error ? err.message.toLowerCase() : '';
      if (msg.includes('encrypted') || msg.includes('password')) {
        throw new ZipAuditError('ENCRYPTED_ZIP', 'Encrypted ZIP archives are not supported.');
      }
      throw new ZipAuditError('INVALID_ZIP', 'Could not read ZIP file.');
    }

    const entries = Object.values(zip.files).filter((entry) => !entry.dir);

    for (const entry of entries) {
      const {category, format} = classifyExportPath(entry.name);
      if (!category || !format) continue;

      const text = await entry.async('string');
      const targetMap = category === 'followers' ? followersMap : followingMap;

      if (format === 'JSON') {
        try {
          const parsed = JSON.parse(text);
          extractEntriesFromUnknownJson(parsed, targetMap);
          formatsFound.add('JSON');
          parsedFilesCount += 1;
        } catch {
          // Ignore malformed secondary files
        }
      } else {
        extractEntriesFromHtml(text, targetMap);
        formatsFound.add('HTML');
        parsedFilesCount += 1;
      }
    }

    if (parsedFilesCount === 0 || (followersMap.size === 0 && followingMap.size === 0)) {
      throw new ZipAuditError('MISSING_LISTS', 'Followers and following files not found inside ZIP.');
    }

    return computeAuditSets(followersMap, followingMap, {
      sourceName: zipFile.name,
      isSample: false,
      detectedFormats: Array.from(formatsFound),
      parsedFilesCount,
    });
  }

  // Direct multi-file .json / .html support (if user already extracted the ZIP)
  for (const file of files) {
    const {category, format} = classifyExportPath(file.name);
    if (!category || !format) continue;

    const text = await file.text();
    const targetMap = category === 'followers' ? followersMap : followingMap;

    if (format === 'JSON') {
      try {
        const parsed = JSON.parse(text);
        extractEntriesFromUnknownJson(parsed, targetMap);
        formatsFound.add('JSON');
        parsedFilesCount += 1;
      } catch {
        // Ignore invalid json
      }
    } else {
      extractEntriesFromHtml(text, targetMap);
      formatsFound.add('HTML');
      parsedFilesCount += 1;
    }
  }

  if (parsedFilesCount === 0 || (followersMap.size === 0 && followingMap.size === 0)) {
    throw new ZipAuditError('MISSING_LISTS', 'No followers or following export files found.');
  }

  const label = files.length === 1 ? files[0].name : `${files[0].name} (+${files.length - 1})`;
  return computeAuditSets(followersMap, followingMap, {
    sourceName: label,
    isSample: false,
    detectedFormats: Array.from(formatsFound),
    parsedFilesCount,
  });
}

export function buildSampleAuditResult(): AuditResult {
  const baseTime = Date.UTC(2026, 9, 15, 10, 0, 0);
  const dayMs = 86_400_000;

  const sampleMutuals = [
    'studio_nordic',
    'atelier_lumina',
    'coffee_roast_lab',
    'urban_sketchbook',
    'minimal_archive',
    'analog_film_notes',
    'botanical_press',
    'ceramic_kiln_daily',
    'coastal_fieldbook',
    'mono_type_foundry',
    'sourdough_journal',
    'velvet_vinyl_club',
    'alpine_trail_log',
    'paper_fold_studio',
    'quiet_lens_collective',
    'harbor_woodworks',
    'solstice_roastery',
    'brutalist_concrete',
    'midnight_darkroom',
    'linen_and_clay',
    'rainy_day_bookshop',
    'copper_kettle_tea',
    'metro_bike_dispatch',
    'sunlit_greenhouse',
    'modular_synth_bench',
    'letterpress_guild',
  ];

  const sampleNotFollowingBack = [
    'arch_digest_daily',
    'nordic_design_award',
    'vogue_runway_archive',
    'museum_modern_art_demo',
    'national_trail_org',
    'espresso_machine_co',
    'leica_camera_journal',
    'typography_annual',
    'indie_magazine_hub',
    'city_marathon_official',
    'acoustic_guitar_guild',
    'clean_web_standards',
  ];

  const sampleFansOnly = [
    'lucas_travels_note',
    'marta_illustrations',
    'kenji_street_35mm',
    'claire_pastry_lab',
    'omar_architecture',
    'sofia_ceramics',
  ];

  const followersMap = new Map<string, AuditAccount>();
  const followingMap = new Map<string, AuditAccount>();

  sampleMutuals.forEach((u, idx) => {
    const ts = baseTime - idx * 3 * dayMs;
    upsertAccount(followersMap, u, `https://www.instagram.com/${u}/`, ts);
    upsertAccount(followingMap, u, `https://www.instagram.com/${u}/`, ts - dayMs);
  });

  sampleNotFollowingBack.forEach((u, idx) => {
    const ts = baseTime - idx * 5 * dayMs;
    upsertAccount(followingMap, u, `https://www.instagram.com/${u}/`, ts);
  });

  sampleFansOnly.forEach((u, idx) => {
    const ts = baseTime - idx * 4 * dayMs;
    upsertAccount(followersMap, u, `https://www.instagram.com/${u}/`, ts);
  });

  return computeAuditSets(followersMap, followingMap, {
    sourceName: 'sample_instagram_export_demo.zip',
    isSample: true,
    detectedFormats: ['JSON'],
    parsedFilesCount: 2,
  });
}

export function serializeAccountsToCsv(accounts: AuditAccount[], tabName: string): string {
  const header = ['username', 'profile_url', 'exported_at_iso', 'category'];
  const rows = accounts.map((acc) => {
    const iso = acc.timestamp ? new Date(acc.timestamp).toISOString() : '';
    return [acc.username, acc.profileUrl, iso, tabName]
      .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
      .join(',');
  });
  return [header.join(','), ...rows].join('\n');
}
