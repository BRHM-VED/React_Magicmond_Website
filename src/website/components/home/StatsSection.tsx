import * as Icons from 'lucide-react';
import { stats } from '../../../data/home.data';
import { FONTS } from '../../../utils/constants/fonts';

export function StatsSection() {
  return (
    <section className="py-[30px] pb-[90px]">
      <div className="container mx-auto px-5 md:px-10 max-w-[1200px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 row-gap-11">
          {stats.map((s, i) => {
            // Apply divider lines selectively based on desktop vs tablet columns
            // Stat 1: No separator.
            // Stat 2: Separator.
            // Stat 3: Separator only on large screens (lg).
            // Stat 4: Separator.
            const beforeClass =
              i === 0 ? '' :
                i === 2 ? "before:content-[''] before:absolute before:left-0 before:top-[12%] before:h-[76%] before:w-px before:bg-white/10 before:hidden lg:before:block" :
                  "before:content-[''] before:absolute before:left-0 before:top-[12%] before:h-[76%] before:w-px before:bg-white/10";

            return (
              <div key={s.label} className={`relative text-center px-3 reveal ${beforeClass}`} style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
                {s.avatars ? (
                  <div className="flex justify-center items-center mb-3.5 h-11">
                    {s.avatars.map((a) => <img key={a} src={a} alt="" className="w-8 h-8 rounded-full border-2 border-[#0e081d] -ml-2.5 first:ml-0" />)}
                  </div>
                ) : (
                  <div className="flex justify-center items-center mb-3.5 h-11">
                    {(() => {
                      const LucideIcon = s.icon ? (Icons as any)[s.icon] : null;
                      return LucideIcon ? (
                        <div
                          style={{
                            background: 'linear-gradient(180deg, #C156E6 0%, #6B3080 100%)',
                            borderRadius: '50%',
                            border: '1px solid rgba(255, 255, 255, 0.07)',
                            boxShadow: 'inset 0 4px 4px rgba(255, 255, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '44px',
                            height: '44px',
                          }}
                        >
                          <LucideIcon
                            size={22}
                            strokeWidth={1.8}
                            color="white"
                            style={{
                              filter: 'drop-shadow(0px 3px 1.5px rgba(0, 0, 0, 0.25))',
                            }}
                          />
                        </div>
                      ) : null;
                    })()}
                  </div>
                )}
                <div className={`${FONTS.head} font-semibold text-[30px] leading-[44px] text-white`}>{s.value}</div>
                <div className="font-medium text-[15px] leading-[24px] text-[#d9d9d9]">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default StatsSection;
