import type {LangCode} from '@/src/constants/seo';
import type {Translations} from './types';
import {en, es, fr, de, pt} from './langsWest';
import {ar, hi, ru, zh, ja} from './langsEast';

export const TRANSLATIONS: Record<LangCode, Translations> = {
  en,
  es,
  fr,
  de,
  pt,
  ar,
  hi,
  ru,
  zh,
  ja,
};
