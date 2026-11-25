import {useState} from 'react';
import {ChevronDown, ShieldCheck} from 'lucide-react';
import type {Translations} from '@/src/i18n/types';

interface FaqSectionProps {
  t: Translations['editorial'];
}

export function FaqSection({t}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="editorial-seo-heading"
      className="no-print rounded-xl border border-slate-200 bg-white p-6 md:p-10 space-y-10"
    >
      {/* Editorial SEO Guide */}
      <div className="max-w-3xl">
        <h2 id="editorial-seo-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight text-balance">
          {t.title}
        </h2>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.intro}</p>

        <div className="mt-8 space-y-7">
          {t.sections.map((section) => (
            <article key={section.title} className="space-y-2.5">
              <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-[15px] text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>

      {/* Interactive FAQ Accordion */}
      <div className="pt-8 border-t border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{t.faqTitle}</h3>
        <div className="mt-5 divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
          {t.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-start text-sm sm:text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Transparent Client-Side Privacy Notice */}
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 px-5 py-4 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-sm font-medium text-emerald-950 leading-relaxed">
          {t.transparencyNotice}
        </p>
      </div>
    </section>
  );
}
