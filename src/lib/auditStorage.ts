export interface SavedAuditSummary {
  id: string;
  savedAtIso: string;
  sourceName: string;
  isSample: boolean;
  notFollowingBackCount: number;
  mutualsCount: number;
  followersCount: number;
  followingCount: number;
  note: string;
}

const STORAGE_KEY = 'followauditcue_history_v1';
const MAX_SAVED_AUDITS = 50;

export function loadSavedAudits(): SavedAuditSummary[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidAuditSummary).slice(0, MAX_SAVED_AUDITS);
  } catch {
    return [];
  }
}

export function persistSavedAudits(items: SavedAuditSummary[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_SAVED_AUDITS)));
  } catch {
    // Ignore storage quota errors
  }
}

export function isValidAuditSummary(val: unknown): val is SavedAuditSummary {
  if (!val || typeof val !== 'object') return false;
  const obj = val as Record<string, unknown>;
  return (
    typeof obj.id === 'string' &&
    typeof obj.savedAtIso === 'string' &&
    typeof obj.sourceName === 'string' &&
    typeof obj.isSample === 'boolean' &&
    typeof obj.notFollowingBackCount === 'number' &&
    typeof obj.mutualsCount === 'number' &&
    typeof obj.followersCount === 'number' &&
    typeof obj.followingCount === 'number' &&
    typeof obj.note === 'string'
  );
}

export function parseImportedHistoryJson(rawText: string): SavedAuditSummary[] | null {
  try {
    const parsed = JSON.parse(rawText);
    const list = Array.isArray(parsed)
      ? parsed
      : parsed && typeof parsed === 'object' && Array.isArray((parsed as Record<string, unknown>).audits)
        ? ((parsed as Record<string, unknown>).audits as unknown[])
        : null;
    if (!list) return null;
    const valid = list.filter(isValidAuditSummary);
    if (valid.length === 0 && list.length > 0) return null;
    return valid.slice(0, MAX_SAVED_AUDITS);
  } catch {
    return null;
  }
}
