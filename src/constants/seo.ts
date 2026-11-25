export const CANONICAL_ORIGIN = 'https://followauditcue.bastelar.com';

export const SUPPORTED_LANGS = [
  'en',
  'es',
  'fr',
  'de',
  'pt',
  'ar',
  'hi',
  'ru',
  'zh',
  'ja',
] as const;

export type LangCode = (typeof SUPPORTED_LANGS)[number];

export interface LangMeta {
  code: LangCode;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  hreflang: string;
}

export const LANG_META: Record<LangCode, LangMeta> = {
  en: {code: 'en', nativeName: 'English', dir: 'ltr', hreflang: 'en'},
  es: {code: 'es', nativeName: 'Español', dir: 'ltr', hreflang: 'es'},
  fr: {code: 'fr', nativeName: 'Français', dir: 'ltr', hreflang: 'fr'},
  de: {code: 'de', nativeName: 'Deutsch', dir: 'ltr', hreflang: 'de'},
  pt: {code: 'pt', nativeName: 'Português', dir: 'ltr', hreflang: 'pt'},
  ar: {code: 'ar', nativeName: 'العربية', dir: 'rtl', hreflang: 'ar'},
  hi: {code: 'hi', nativeName: 'हिन्दी', dir: 'ltr', hreflang: 'hi'},
  ru: {code: 'ru', nativeName: 'Русский', dir: 'ltr', hreflang: 'ru'},
  zh: {code: 'zh', nativeName: '中文', dir: 'ltr', hreflang: 'zh'},
  ja: {code: 'ja', nativeName: '日本語', dir: 'ltr', hreflang: 'ja'},
};

export function getCanonicalUrlForLang(lang: LangCode): string {
  return lang === 'en'
    ? `${CANONICAL_ORIGIN}/`
    : `${CANONICAL_ORIGIN}/?lang=${lang}`;
}

export function isSupportedLang(value: string | null | undefined): value is LangCode {
  if (!value) return false;
  return (SUPPORTED_LANGS as readonly string[]).includes(value);
}

export function detectInitialLang(): LangCode {
  if (typeof window === 'undefined') return 'en';

  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang')?.toLowerCase();
  if (isSupportedLang(queryLang)) {
    return queryLang;
  }

  try {
    const stored = window.localStorage.getItem('followauditcue_lang')?.toLowerCase();
    if (isSupportedLang(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage access errors in private contexts
  }

  const navLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of navLangs) {
    if (!raw) continue;
    const base = raw.toLowerCase().split('-')[0];
    if (isSupportedLang(base)) {
      return base;
    }
  }

  return 'en';
}
