import {useMemo, useState} from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Printer,
  Search,
  Trash2,
} from 'lucide-react';
import type {Translations} from '@/src/i18n/types';
import {
  serializeAccountsToCsv,
  type AuditAccount,
  type AuditResult,
} from '@/src/lib/instagramParser';

export type AuditTab = 'notFollowingBack' | 'mutuals' | 'followers' | 'following';
type SortMode = 'az' | 'za' | 'newest' | 'oldest';

interface AuditResultsProps {
  audit: AuditResult | null;
  t: Translations['results'];
  locale: string;
  onClearSession: () => void;
}

const PAGE_SIZE = 50;

function downloadBlob(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], {type: mimeType});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function AuditResults({audit, t, locale, onClearSession}: AuditResultsProps) {
  const [activeTab, setActiveTab] = useState<AuditTab>('notFollowingBack');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('az');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const followersSet = useMemo(() => {
    if (!audit) return new Set<string>();
    return new Set(audit.followers.map((f) => f.key));
  }, [audit]);

  const followingSet = useMemo(() => {
    if (!audit) return new Set<string>();
    return new Set(audit.following.map((f) => f.key));
  }, [audit]);

  const rawList: AuditAccount[] = useMemo(() => {
    if (!audit) return [];
    return audit[activeTab];
  }, [audit, activeTab]);

  const filteredList = useMemo(() => {
    const q = searchQuery.trim().toLowerCase().replace(/^@+/, '');
    const base = q
      ? rawList.filter((item) => item.key.includes(q))
      : rawList.slice();

    base.sort((a, b) => {
      if (sortMode === 'az') return a.key.localeCompare(b.key);
      if (sortMode === 'za') return b.key.localeCompare(a.key);
      if (sortMode === 'newest') return (b.timestamp ?? 0) - (a.timestamp ?? 0);
      return (a.timestamp ?? Number.MAX_SAFE_INTEGER) - (b.timestamp ?? Number.MAX_SAFE_INTEGER);
    });

    return base;
  }, [rawList, searchQuery, sortMode]);

  const visibleList = useMemo(
    () => filteredList.slice(0, visibleCount),
    [filteredList, visibleCount],
  );

  const handleTabChange = (tab: AuditTab) => {
    setActiveTab(tab);
    setVisibleCount(PAGE_SIZE);
  };

  const handleCopyAll = async () => {
    if (filteredList.length === 0) return;
    const text = filteredList.map((a) => `@${a.username}`).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAll(true);
      window.setTimeout(() => setCopiedAll(false), 1800);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  const handleCopySingle = async (account: AuditAccount) => {
    try {
      await navigator.clipboard.writeText(`@${account.username}`);
      setCopiedKey(account.key);
      window.setTimeout(() => setCopiedKey((prev) => (prev === account.key ? null : prev)), 1500);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const handleExportCsv = () => {
    if (!audit) return;
    const csv = serializeAccountsToCsv(filteredList, activeTab);
    downloadBlob(csv, `followauditcue-${activeTab}.csv`, 'text/csv;charset=utf-8');
  };

  const handleExportJson = () => {
    if (!audit) return;
    const payload = {
      exportedAt: new Date().toISOString(),
      source: audit.sourceName,
      category: activeTab,
      count: filteredList.length,
      accounts: filteredList.map((a) => ({
        username: a.username,
        profileUrl: a.profileUrl,
        exportedAtIso: a.timestamp ? new Date(a.timestamp).toISOString() : null,
      })),
    };
    downloadBlob(
      JSON.stringify(payload, null, 2),
      `followauditcue-${activeTab}.json`,
      'application/json;charset=utf-8',
    );
  };

  const formatDate = (ts: number | null) => {
    if (!ts) return t.unknownDate;
    try {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(ts));
    } catch {
      return new Date(ts).toISOString().slice(0, 10);
    }
  };

  const getStatusText = (account: AuditAccount): string => {
    const isFollower = followersSet.has(account.key);
    const isFollowing = followingSet.has(account.key);
    if (isFollowing && isFollower) return t.relationships.mutual;
    if (isFollowing && !isFollower) return t.relationships.notFollowingBack;
    if (isFollower && !isFollowing) return t.relationships.followerOnly;
    return t.relationships.following;
  };

  if (!audit) {
    return (
      <section className="no-print rounded-xl border border-slate-200 bg-white px-6 py-12 text-center">
        <h3 className="text-lg font-semibold text-slate-900">{t.emptyTitle}</h3>
        <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">{t.emptyBody}</p>
      </section>
    );
  }

  const totalFollowing = audit.following.length;
  const notBackPct =
    totalFollowing > 0 ? ((audit.notFollowingBack.length / totalFollowing) * 100).toFixed(1) : '0.0';
  const mutualPct =
    totalFollowing > 0 ? ((audit.mutuals.length / totalFollowing) * 100).toFixed(1) : '0.0';

  const tabs: Array<{id: AuditTab; label: string; count: number}> = [
    {id: 'notFollowingBack', label: t.tabs.notFollowingBack, count: audit.notFollowingBack.length},
    {id: 'mutuals', label: t.tabs.mutuals, count: audit.mutuals.length},
    {id: 'followers', label: t.tabs.followers, count: audit.followers.length},
    {id: 'following', label: t.tabs.following, count: audit.following.length},
  ];

  return (
    <section
      aria-label="Audit Results"
      className="rounded-xl border border-slate-200 bg-white overflow-hidden"
    >
      {/* 4-Column Summary Metric Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-slate-200 border-b border-slate-200">
        <div className="p-5">
          <p className="text-xs font-medium text-slate-500">{t.tabs.notFollowingBack}</p>
          <p className="mt-1.5 text-3xl font-bold text-[#D97706] tabular-nums tracking-tight">
            {audit.notFollowingBack.length.toLocaleString(locale)}
          </p>
          <p className="mt-1 text-xs text-slate-500 tabular-nums">
            {notBackPct}% {t.metrics.notFollowingBackSub}
          </p>
        </div>
        <div className="p-5">
          <p className="text-xs font-medium text-slate-500">{t.tabs.mutuals}</p>
          <p className="mt-1.5 text-3xl font-bold text-[#047857] tabular-nums tracking-tight">
            {audit.mutuals.length.toLocaleString(locale)}
          </p>
          <p className="mt-1 text-xs text-slate-500 tabular-nums">
            {mutualPct}% {t.metrics.mutualsSub}
          </p>
        </div>
        <div className="p-5">
          <p className="text-xs font-medium text-slate-500">{t.tabs.followers}</p>
          <p className="mt-1.5 text-3xl font-bold text-slate-900 tabular-nums tracking-tight">
            {audit.followers.length.toLocaleString(locale)}
          </p>
          <p className="mt-1 text-xs text-slate-500">{t.metrics.followersSub}</p>
        </div>
        <div className="p-5">
          <p className="text-xs font-medium text-slate-500">{t.tabs.following}</p>
          <p className="mt-1.5 text-3xl font-bold text-[#1E40AF] tabular-nums tracking-tight">
            {audit.following.length.toLocaleString(locale)}
          </p>
          <p className="mt-1 text-xs text-slate-500">{t.metrics.followingSub}</p>
        </div>
      </div>

      {/* Tabs + Controls Toolbar */}
      <div className="no-print p-5 border-b border-slate-200 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Segmented Tab Controls */}
          <div
            role="tablist"
            aria-label="Account lists"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-slate-100"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="font-mono text-xs tabular-nums text-slate-500">
                    {tab.count.toLocaleString(locale)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Clear Session */}
          <button
            type="button"
            onClick={onClearSession}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-red-700 hover:bg-red-50 rounded-lg border border-slate-200 transition-colors whitespace-nowrap shrink-0"
          >
            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.clearSessionBtn}</span>
          </button>
        </div>

        {/* Filter & Export Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search
                className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                placeholder={t.searchPlaceholder}
                className="w-full h-10 ps-9 pe-3 text-sm rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#047857]/30 focus:border-[#047857]"
              />
            </div>

            <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 shrink-0">
              <span>{t.sortLabel}</span>
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                className="h-10 px-3 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#047857]/30"
              >
                <option value="az">{t.sortOptions.az}</option>
                <option value="za">{t.sortOptions.za}</option>
                <option value="newest">{t.sortOptions.newest}</option>
                <option value="oldest">{t.sortOptions.oldest}</option>
              </select>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyAll}
              disabled={filteredList.length === 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#047857] text-white hover:bg-[#065F46] disabled:opacity-40 transition-colors whitespace-nowrap shrink-0"
            >
              {copiedAll ? (
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
              )}
              <span>{copiedAll ? t.copiedListBtn : t.copyListBtn}</span>
            </button>

            <button
              type="button"
              onClick={handleExportCsv}
              disabled={filteredList.length === 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.exportCsvBtn}</span>
            </button>

            <button
              type="button"
              onClick={handleExportJson}
              disabled={filteredList.length === 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.exportJsonBtn}</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.printBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* High-Density Data Table */}
      <div className="no-print overflow-x-auto">
        {filteredList.length === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-slate-600">
            {activeTab === 'notFollowingBack' && !searchQuery
              ? t.noUnfollowersCongrats
              : t.noSearchMatches}
          </div>
        ) : (
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-[#F8FAFC] text-xs font-semibold text-slate-500">
                <th className="py-2.5 px-4 text-start w-14">{t.tableHeaders.index}</th>
                <th className="py-2.5 px-4 text-start">{t.tableHeaders.username}</th>
                <th className="py-2.5 px-4 text-start hidden sm:table-cell">
                  {t.tableHeaders.exportedDate}
                </th>
                <th className="py-2.5 px-4 text-start hidden md:table-cell">
                  {t.tableHeaders.relationship}
                </th>
                <th className="py-2.5 px-4 text-end">{t.tableHeaders.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {visibleList.map((account, idx) => {
                const isMutual = followersSet.has(account.key) && followingSet.has(account.key);
                const isNotBack =
                  followingSet.has(account.key) && !followersSet.has(account.key);

                return (
                  <tr
                    key={account.key}
                    className="hover:bg-slate-50/80 transition-colors h-11"
                  >
                    <td className="px-4 py-2 font-mono text-xs text-slate-400 tabular-nums">
                      {idx + 1}
                    </td>
                    <td className="px-4 py-2 font-mono text-sm font-medium text-slate-900">
                      @{account.username}
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-500 tabular-nums hidden sm:table-cell">
                      {formatDate(account.timestamp)}
                    </td>
                    <td className="px-4 py-2 text-xs hidden md:table-cell">
                      <span
                        className={
                          isNotBack
                            ? 'font-medium text-[#D97706]'
                            : isMutual
                              ? 'font-medium text-[#047857]'
                              : 'text-slate-600'
                        }
                      >
                        {getStatusText(account)}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-end">
                      <div className="inline-flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopySingle(account)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 rounded border border-slate-200 bg-white transition-colors whitespace-nowrap"
                        >
                          {copiedKey === account.key ? (
                            <Check className="w-3 h-3 text-[#047857]" aria-hidden="true" />
                          ) : (
                            <Copy className="w-3 h-3" aria-hidden="true" />
                          )}
                          <span>
                            {copiedKey === account.key ? t.copiedSingle : t.copySingle}
                          </span>
                        </button>
                        <a
                          href={account.profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#1E40AF] hover:underline whitespace-nowrap"
                        >
                          <span>{t.openProfile}</span>
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Footer */}
      {filteredList.length > 0 && (
        <div className="no-print px-5 py-3.5 border-t border-slate-200 bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500 tabular-nums">
            {t.showingRange
              .replace('{shown}', visibleList.length.toLocaleString(locale))
              .replace('{total}', filteredList.length.toLocaleString(locale))}
          </p>
          {visibleList.length < filteredList.length && (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              {t.showMoreBtn}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
