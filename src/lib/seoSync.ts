import {
  CANONICAL_ORIGIN,
  LANG_META,
  SUPPORTED_LANGS,
  getCanonicalUrlForLang,
  type LangCode,
} from '@/src/constants/seo';
import type {Translations} from '@/src/i18n/types';

export function syncHeadSeo(lang: LangCode, t: Translations): void {
  if (typeof document === 'undefined') return;

  const meta = LANG_META[lang];
  const canonicalUrl = getCanonicalUrlForLang(lang);

  document.documentElement.lang = meta.code;
  document.documentElement.dir = meta.dir;
  document.title = t.seo.title;

  setMetaTag('name', 'description', t.seo.description);
  setMetaTag('property', 'og:title', t.seo.title);
  setMetaTag('property', 'og:description', t.seo.description);
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('name', 'twitter:title', t.seo.title);
  setMetaTag('name', 'twitter:description', t.seo.description);

  // Sync canonical link
  let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonicalUrl;

  // Sync hreflang alternates using strictly CANONICAL_ORIGIN
  for (const code of SUPPORTED_LANGS) {
    const href = getCanonicalUrlForLang(code);
    let link = document.querySelector<HTMLLinkElement>(
      `link[rel="alternate"][hreflang="${code}"]`,
    );
    if (!link) {
      link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = code;
      document.head.appendChild(link);
    }
    link.href = href;
  }

  let xDefault = document.querySelector<HTMLLinkElement>(
    'link[rel="alternate"][hreflang="x-default"]',
  );
  if (!xDefault) {
    xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    document.head.appendChild(xDefault);
  }
  xDefault.href = `${CANONICAL_ORIGIN}/`;

  // Sync JSON-LD (WebApplication + HowTo + FAQPage)
  const jsonLdPayload = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'FollowAuditCue',
        url: canonicalUrl,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        inLanguage: lang,
        description: t.seo.appDescription,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'HowTo',
        name: t.seo.howToName,
        description: t.seo.howToDescription,
        inLanguage: lang,
        step: t.steps.items.map((step, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: step.title,
          text: step.detail,
        })),
      },
      {
        '@type': 'FAQPage',
        inLanguage: lang,
        mainEntity: t.editorial.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  let scriptEl = document.getElementById('structured-data-jsonld') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'structured-data-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(jsonLdPayload);
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
