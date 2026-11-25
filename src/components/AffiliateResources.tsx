import {ExternalLink} from 'lucide-react';
import type {Translations} from '@/src/i18n/types';

interface AffiliateResourcesProps {
  t: Translations['affiliate'];
}

export function AffiliateResources({t}: AffiliateResourcesProps) {
  return (
    <section
      aria-labelledby="affiliate-resources-heading"
      className="no-print rounded-xl border border-slate-200 bg-white p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 id="affiliate-resources-heading" className="text-xl font-bold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-1.5 text-sm text-slate-600 max-w-2xl">{t.subtitle}</p>
        </div>
        <p className="text-xs text-slate-500 max-w-sm">{t.disclosure}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between gap-4 rounded-lg border border-slate-200 bg-[#F8FAFC] p-5"
          >
            <div>
              <p className="text-xs font-medium text-[#1E40AF]">{item.category}</p>
              <h3 className="mt-1.5 text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
            <div>
              <a
                href={item.url}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#047857] hover:text-[#065F46] transition-colors whitespace-nowrap"
              >
                <span>{item.ctaLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
