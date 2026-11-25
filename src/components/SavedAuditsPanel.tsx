import {useRef, useState} from 'react';
import {
  Check,
  Download,
  Link2,
  Printer,
  Save,
  Trash2,
  Upload,
} from 'lucide-react';
import type {Translations} from '@/src/i18n/types';
import type {AuditResult} from '@/src/lib/instagramParser';
import {
  parseImportedHistoryJson,
  type SavedAuditSummary,
} from '@/src/lib/auditStorage';

interface SavedAuditsPanelProps {
  audit: AuditResult | null;
  history: SavedAuditSummary[];
  canonicalUrl: string;
  locale: string;
  t: Translations['saved'];
  onSaveCurrent: (note: string) => void;
  onDeleteItem: (id: string) => void;
  onImportHistory: (items: SavedAuditSummary[]) => void;
  onClearHistory: () => void;
}

export function SavedAuditsPanel({
  audit,
  history,
  canonicalUrl,
  locale,
  t,
  onSaveCurrent,
  onDeleteItem,
  onImportHistory,
  onClearHistory,
}: SavedAuditsPanelProps) {
  const [note, setNote] = useState('');
  const [justSaved, setJustSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [importMessage, setImportMessage] = useState<{type: 'error' | 'success'; text: string} | null>(
    null,
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    if (!audit) return;
    onSaveCurrent(note.trim());
    setNote('');
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 1800);
  };

  const handleExportHistory = () => {
    const payload = {
      app: 'FollowAuditCue',
      exportedAt: new Date().toISOString(),
      audits: history,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `followauditcue-history-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportFile = async (file: File | undefined) => {
    if (!file) return;
    setImportMessage(null);
    try {
      const text = await file.text();
      const parsed = parseImportedHistoryJson(text);
      if (!parsed) {
        setImportMessage({type: 'error', text: t.importError});
        return;
      }
      onImportHistory(parsed);
      setImportMessage({type: 'success', text: t.importSuccess});
    } catch {
      setImportMessage({type: 'error', text: t.importError});
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleCopyCanonical = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 1800);
    } catch {
      // Ignore clipboard failure
    }
  };

  const formatDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(iso));
    } catch {
      return iso.slice(0, 16);
    }
  };

  return (
    <section
      id="saved-audits"
      aria-labelledby="saved-audits-heading"
      className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 print-break-inside-avoid"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <h2 id="saved-audits-heading" className="text-xl font-bold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{t.subtitle}</p>
          <p className="mt-1.5 text-xs text-slate-500 max-w-2xl">{t.privacyNote}</p>
        </div>

        <div className="no-print flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyCanonical}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            {copiedLink ? (
              <Check className="w-3.5 h-3.5 text-[#047857]" aria-hidden="true" />
            ) : (
              <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
            )}
            <span>{copiedLink ? t.copiedLinkBtn : t.copyLinkBtn}</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.printSummaryBtn}</span>
          </button>

          <button
            type="button"
            onClick={handleExportHistory}
            disabled={history.length === 0}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.exportHistoryBtn}</span>
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            <Upload className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.importHistoryBtn}</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={(e) => handleImportFile(e.target.files?.[0])}
          />
        </div>
      </div>

      {/* Save Current Audit Form */}
      <div className="no-print mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={t.notePlaceholder}
          maxLength={120}
          disabled={!audit}
          className="flex-1 h-10 px-3.5 text-sm rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 placeholder:text-slate-400 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#047857]/30 focus:border-[#047857]"
        />
        <button
          type="button"
          onClick={handleSave}
          disabled={!audit}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#1E40AF] text-white hover:bg-blue-900 disabled:opacity-40 transition-colors whitespace-nowrap shrink-0"
        >
          {justSaved ? (
            <Check className="w-3.5 h-3.5" aria-hidden="true" />
          ) : (
            <Save className="w-3.5 h-3.5" aria-hidden="true" />
          )}
          <span>{justSaved ? t.savedFeedback : t.saveBtn}</span>
        </button>
      </div>

      {importMessage && (
        <p
          role="status"
          className={`no-print mt-3 text-xs font-medium ${
            importMessage.type === 'error' ? 'text-red-700' : 'text-[#047857]'
          }`}
        >
          {importMessage.text}
        </p>
      )}

      {/* History Table */}
      <div className="mt-6">
        {history.length === 0 ? (
          <p className="text-sm text-slate-500 py-4">{t.emptyHistory}</p>
        ) : (
          <>
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-start border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-slate-200 text-xs font-semibold text-slate-500">
                    <th className="py-2.5 px-3 text-start">{t.columns.date}</th>
                    <th className="py-2.5 px-3 text-start">{t.columns.source}</th>
                    <th className="py-2.5 px-3 text-end">{t.columns.notBack}</th>
                    <th className="py-2.5 px-3 text-end">{t.columns.mutuals}</th>
                    <th className="py-2.5 px-3 text-end">{t.columns.followers}</th>
                    <th className="py-2.5 px-3 text-end">{t.columns.following}</th>
                    <th className="py-2.5 px-3 text-start">{t.columns.note}</th>
                    <th className="no-print py-2.5 px-3 text-end">{t.columns.remove}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {history.map((item) => (
                    <tr key={item.id} className="h-10 hover:bg-slate-50/70">
                      <td className="px-3 py-2 text-slate-600 tabular-nums whitespace-nowrap">
                        {formatDate(item.savedAtIso)}
                      </td>
                      <td className="px-3 py-2 font-mono text-xs text-slate-700 max-w-[180px] truncate">
                        {item.sourceName}
                      </td>
                      <td className="px-3 py-2 text-end font-mono font-semibold text-[#D97706] tabular-nums">
                        {item.notFollowingBackCount.toLocaleString(locale)}
                      </td>
                      <td className="px-3 py-2 text-end font-mono font-semibold text-[#047857] tabular-nums">
                        {item.mutualsCount.toLocaleString(locale)}
                      </td>
                      <td className="px-3 py-2 text-end font-mono text-slate-700 tabular-nums">
                        {item.followersCount.toLocaleString(locale)}
                      </td>
                      <td className="px-3 py-2 text-end font-mono text-slate-700 tabular-nums">
                        {item.followingCount.toLocaleString(locale)}
                      </td>
                      <td className="px-3 py-2 text-slate-600 max-w-[200px] truncate">
                        {item.note || '—'}
                      </td>
                      <td className="no-print px-3 py-2 text-end">
                        <button
                          type="button"
                          onClick={() => onDeleteItem(item.id)}
                          aria-label={t.columns.remove}
                          className="p-1.5 text-slate-400 hover:text-red-700 rounded transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="no-print mt-3 flex justify-end">
              <button
                type="button"
                onClick={onClearHistory}
                className="text-xs font-medium text-slate-500 hover:text-red-700 transition-colors"
              >
                {t.clearHistoryBtn}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
