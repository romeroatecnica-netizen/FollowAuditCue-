import type {Translations} from '@/src/i18n/types';

interface AdSlotProps {
  slotId: string;
  placement: 'mid-workspace' | 'bottom-editorial';
  t: Translations['ads'];
}

export function AdSlot({slotId, placement, t}: AdSlotProps) {
  const heightClass = placement === 'mid-workspace' ? 'min-h-[100px]' : 'min-h-[250px]';

  return (
    <aside
      aria-label={t.slotLabel}
      className={`no-print w-full rounded-xl border border-slate-200 bg-white px-4 py-3 flex flex-col items-center justify-center ${heightClass}`}
    >
      {/* Media.net Ad Slot ({slotId}): Replace this inner block with your Media.net contextual ad script/div */}
      <div
        id={slotId}
        data-ad-provider="media.net"
        data-ad-placement={placement}
        className="w-full max-w-[728px] flex flex-col items-center justify-center text-center gap-1"
      >
        <span className="text-[11px] font-medium text-slate-400 tracking-wide">
          {t.slotLabel} · {slotId}
        </span>
        <p className="text-xs text-slate-400">{t.sponsoredNote}</p>
      </div>
    </aside>
  );
}
