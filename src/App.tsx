import {useEffect, useRef, useState, type DragEvent} from 'react';
import {
  AlertTriangle,
  FileArchive,
  FileSpreadsheet,
  Globe,
  Loader2,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import {
  LANG_META,
  SUPPORTED_LANGS,
  detectInitialLang,
  getCanonicalUrlForLang,
  type LangCode,
} from '@/src/constants/seo';
import {TRANSLATIONS} from '@/src/i18n';
import {
  ZipAuditError,
  buildSampleAuditResult,
  parseInstagramExportFiles,
  type AuditResult,
} from '@/src/lib/instagramParser';
import {
  loadSavedAudits,
  persistSavedAudits,
  type SavedAuditSummary,
} from '@/src/lib/auditStorage';
import {syncHeadSeo} from '@/src/lib/seoSync';
import {AuditResults} from '@/src/components/AuditResults';
import {SavedAuditsPanel} from '@/src/components/SavedAuditsPanel';
import {AdSlot} from '@/src/components/AdSlot';
import {AffiliateResources} from '@/src/components/AffiliateResources';
import {FaqSection} from '@/src/components/FaqSection';

export default function App() {
  const [lang, setLang] = useState<LangCode>(() => detectInitialLang());
  const [audit, setAudit] = useState<AuditResult | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [history, setHistory] = useState<SavedAuditSummary[]>(() => loadSavedAudits());

  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = TRANSLATIONS[lang];
  const canonicalUrl = getCanonicalUrlForLang(lang);

  useEffect(() => {
    syncHeadSeo(lang, t);
    try {
      window.localStorage.setItem('followauditcue_lang', lang);
    } catch {
      // Ignore storage failures
    }
  }, [lang, t]);

  const handleLanguageChange = (nextLang: LangCode) => {
    setLang(nextLang);
    try {
      const nextUrl = new URL(window.location.href);
      if (nextLang === 'en') {
        nextUrl.searchParams.delete('lang');
      } else {
        nextUrl.searchParams.set('lang', nextLang);
      }
      window.history.replaceState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
    } catch {
      // Ignore history errors
    }
  };

  const processFiles = async (fileList: FileList | File[]) => {
    const files = Array.from(fileList);
    if (files.length === 0) return;

    setErrorMsg(null);
    setIsParsing(true);

    try {
      const result = await parseInstagramExportFiles(files);
      setAudit(result);
    } catch (err) {
      if (err instanceof ZipAuditError) {
        if (err.code === 'INVALID_ZIP') setErrorMsg(t.dropzone.errorInvalidZip);
        else if (err.code === 'MISSING_LISTS') setErrorMsg(t.dropzone.errorMissingLists);
        else if (err.code === 'ENCRYPTED_ZIP') setErrorMsg(t.dropzone.errorEncryptedZip);
        else setErrorMsg(t.dropzone.errorGeneric);
      } else {
        setErrorMsg(t.dropzone.errorGeneric);
      }
    } finally {
      setIsParsing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      void processFiles(e.dataTransfer.files);
    }
  };

  const handleLoadSample = () => {
    setErrorMsg(null);
    setAudit(buildSampleAuditResult());
  };

  const handleClearSession = () => {
    setAudit(null);
    setErrorMsg(null);
  };

  const handleSaveAuditSummary = (note: string) => {
    if (!audit) return;
    const entry: SavedAuditSummary = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      savedAtIso: new Date().toISOString(),
      sourceName: audit.sourceName,
      isSample: audit.isSample,
      notFollowingBackCount: audit.notFollowingBack.length,
      mutualsCount: audit.mutuals.length,
      followersCount: audit.followers.length,
      followingCount: audit.following.length,
      note,
    };
    const next = [entry, ...history].slice(0, 50);
    setHistory(next);
    persistSavedAudits(next);
  };

  const handleDeleteHistoryItem = (id: string) => {
    const next = history.filter((item) => item.id !== id);
    setHistory(next);
    persistSavedAudits(next);
  };

  const handleImportHistory = (imported: SavedAuditSummary[]) => {
    const seen = new Set(history.map((h) => h.id));
    const merged = [...history];
    for (const item of imported) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        merged.push(item);
      }
    }
    merged.sort((a, b) => b.savedAtIso.localeCompare(a.savedAtIso));
    const trimmed = merged.slice(0, 50);
    setHistory(trimmed);
    persistSavedAudits(trimmed);
  };

  const handleClearHistory = () => {
    setHistory([]);
    persistSavedAudits([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      {/* Top Bar Contract: 3 zones — Wordmark | 4 single-line links | 1 primary action (language switcher) */}
      <header className="no-print border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href={canonicalUrl}
            className="text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            FollowAuditCue
          </a>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            <a
              href="#auditor"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.auditor}
            </a>
            <a
              href="#how-it-works"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#saved-audits"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.savedAudits}
            </a>
            <a
              href="#faq"
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.faq}
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
              <Globe className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
              <span className="sr-only">{t.nav.languageLabel}</span>
              <select
                aria-label={t.nav.languageLabel}
                value={lang}
                onChange={(e) => handleLanguageChange(e.target.value as LangCode)}
                className="h-9 px-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#047857]/30 whitespace-nowrap"
              >
                {SUPPORTED_LANGS.map((code) => (
                  <option key={code} value={code}>
                    {LANG_META[code].nativeName} ({code.toUpperCase()})
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </header>

      {/* Print-only Header */}
      <div className="hidden print-only border-b border-slate-300 pb-4 mb-6 max-w-6xl mx-auto w-full px-4">
        <h1 className="text-xl font-bold text-slate-900">{t.print.reportTitle}</h1>
        <p className="mt-1 text-xs text-slate-600 tabular-nums">
          {t.print.generatedOn}: {new Date().toLocaleString(lang)}
          {audit ? ` · ${t.print.sourceLabel}: ${audit.sourceName}` : ''}
        </p>
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
        {/* Hero Section */}
        <section className="no-print space-y-5">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#047857]">
            <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.hero.privacyLead}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl text-balance">
            {t.hero.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <p className="text-xs sm:text-sm font-medium text-slate-500">
            {t.hero.zeroUploadGuarantee}
          </p>

          {/* Account Safety Warning (clean 1px border, explicit text + icon, no border-l-4) */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 px-5 py-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-sm text-amber-950 leading-relaxed">
              <span className="font-semibold">{t.hero.safetyWarningTitle}: </span>
              <span>{t.hero.safetyWarningBody}</span>
            </div>
          </div>
        </section>

        {/* 3-Step Visual Guide */}
        <section id="how-it-works" aria-labelledby="steps-heading" className="no-print space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 id="steps-heading" className="text-xl font-bold text-slate-900 tracking-tight">
              {t.steps.sectionTitle}
            </h2>
            <p className="text-sm text-slate-500">{t.steps.sectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.steps.items.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#1E40AF] tabular-nums">
                    {step.num}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                </div>
                <p className="pt-3 border-t border-slate-100 text-xs font-medium text-slate-500">
                  {step.pathHint}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Local .ZIP Dropzone & Auditor Workspace */}
        <section id="auditor" aria-label={t.nav.auditor} className="space-y-6">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`no-print rounded-xl border-2 border-dashed bg-white p-8 md:p-10 text-center transition-colors ${
              isDragging
                ? 'border-[#047857] bg-emerald-50/40'
                : 'border-slate-300 hover:border-slate-400'
            }`}
          >
            <div className="max-w-xl mx-auto flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl border border-slate-200 bg-[#F8FAFC] flex items-center justify-center text-[#047857]">
                {isParsing ? (
                  <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
                ) : (
                  <FileArchive className="w-6 h-6" aria-hidden="true" />
                )}
              </div>

              <h2 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
                {isParsing ? t.dropzone.processingLabel : t.dropzone.title}
              </h2>
              <p className="mt-1.5 text-sm text-slate-600">{t.dropzone.subtitle}</p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  disabled={isParsing}
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#047857] text-white hover:bg-[#065F46] disabled:opacity-50 transition-colors whitespace-nowrap shrink-0"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  <span>{t.dropzone.browseBtn}</span>
                </button>

                <button
                  type="button"
                  disabled={isParsing}
                  onClick={handleLoadSample}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors whitespace-nowrap shrink-0"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#1E40AF]" aria-hidden="true" />
                  <span>{t.dropzone.sampleBtn}</span>
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept=".zip,.json,.html,.htm"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    void processFiles(e.target.files);
                  }
                }}
              />

              <p className="mt-4 text-xs text-slate-500">{t.dropzone.acceptedFormats}</p>

              {errorMsg && (
                <div
                  role="alert"
                  className="mt-5 w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 text-start"
                >
                  {errorMsg}
                </div>
              )}
            </div>
          </div>

          {/* Active File Summary Metadata Strip (unboxed clean text with middot separators) */}
          {audit && (
            <div className="no-print flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-600 px-1">
              <span>
                <strong className="font-semibold text-slate-900">
                  {t.dropzone.loadedSummaryLabel}:
                </strong>{' '}
                <span className="font-mono">{audit.sourceName}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {t.dropzone.formatDetectedLabel}: {audit.detectedFormats.join(' + ')}
              </span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">
                {t.dropzone.filesParsedLabel}: {audit.parsedFilesCount}
              </span>
              {audit.isSample && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-[#1E40AF]">{t.dropzone.sampleBadge}</span>
                </>
              )}
            </div>
          )}

          {/* Results Dashboard */}
          <AuditResults
            audit={audit}
            t={t.results}
            locale={lang}
            onClearSession={handleClearSession}
          />
        </section>

        {/* Local Saved Audits (localStorage + JSON Import/Export + Print) */}
        <SavedAuditsPanel
          audit={audit}
          history={history}
          canonicalUrl={canonicalUrl}
          locale={lang}
          t={t.saved}
          onSaveCurrent={handleSaveAuditSummary}
          onDeleteItem={handleDeleteHistoryItem}
          onImportHistory={handleImportHistory}
          onClearHistory={handleClearHistory}
        />

        {/* Media.net Ad Slot 1: Between Auditor/Saved Audits and Editorial SEO */}
        <AdSlot slotId="medianet-mid-workspace" placement="mid-workspace" t={t.ads} />

        {/* Contextual Security & Backup Affiliate Recommendations */}
        <AffiliateResources t={t.affiliate} />

        {/* SEO Editorial Guide + Interactive FAQ + Transparency Notice */}
        <FaqSection t={t.editorial} />

        {/* Media.net Ad Slot 2: Bottom of Editorial Section */}
        <AdSlot slotId="medianet-bottom-editorial" placement="bottom-editorial" t={t.ads} />
      </main>

      {/* Print-only Footer */}
      <div className="hidden print-only mt-8 pt-4 border-t border-slate-300 text-xs text-slate-500 max-w-6xl mx-auto w-full px-4">
        {t.print.privacyFooter}
      </div>

      {/* Screen Footer */}
      <footer className="no-print border-t border-slate-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <p>{t.footer.tagline}</p>
          <p className="font-mono">{t.footer.canonicalNotice}</p>
        </div>
      </footer>
    </div>
  );
}
