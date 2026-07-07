import { CheckCircle } from 'lucide-react';
import { spCases } from '../../../data/sports/sports.data';
import { CALENDLY } from '../../../utils/constants/constants';
import { SportsButton } from '../../../common/button/SportsButton';

export function CasesSection() {
  return (
    <section className="py-[100px] bg-[#010502]">
      <div className="container px-5 md:px-10 mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="font-body font-medium text-[35px] md:text-[54px] leading-[1.15] tracking-[-1.9px] text-white words">
            <span className="w-src">How MagicMond shaped</span><br />
            <span className="w-src"><span className="font-serif italic text-[#1ff9b8]">iconic identities in sports</span></span>
          </h2>
          <p className="max-w-[560px] mx-auto mt-6 text-[16px] leading-[26px] text-[#aaaaaa] reveal">Explore stories of brands that shaped culture, elevated their presence, and unlocked commercial opportunities through our work.</p>
          <div className="mt-7 flex justify-center reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
            <SportsButton variant="small" href={CALENDLY}>
              Let’s collaborate
            </SportsButton>
          </div>
        </div>

        {spCases.map((c, i) => (
          <div
            className={`flex flex-col lg:flex-row items-center gap-[34px] lg:gap-[60px] mt-[90px] text-left ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            key={c.title}
          >
            <img className="rounded-[14px] w-full lg:w-[480px] shrink-0 select-none pointer-events-none reveal" src={c.image} alt={`${c.title} campaign`} />
            <div className="flex-1">
              <span className="inline-block px-4 py-2 rounded-full border border-[#2aebb1]/50 font-medium text-[13px] tracking-[0.04em] uppercase text-[#dedede] reveal">{c.tag}</span>
              <h2 className="mt-[22px] font-body font-semibold text-[31px] md:text-[41px] leading-[1.1] tracking-[-0.03em] text-white reveal" style={{ '--d': '.1s' } as React.CSSProperties}>{c.title}</h2>
              <p className="mt-2.5 font-medium text-[13px] md:text-[17px] leading-[1.6] text-[#2aebb1] reveal" style={{ '--d': '.15s' } as React.CSSProperties}>{c.type}</p>
              <p className="mt-3.5 max-w-[540px] text-[17px] leading-[1.6] text-[#aaaaaa] reveal" style={{ '--d': '.2s' } as React.CSSProperties}>{c.desc}</p>
              {c.chips.length > 0 && (
                <div className="flex gap-3.5 mt-6 flex-wrap reveal" style={{ '--d': '.25s' } as React.CSSProperties}>
                  {c.chips.map((chip) => (
                    <span className="flex items-center gap-2 px-[18px] py-[11px] rounded-[10px] bg-[#12181f] border border-white/[0.08] font-semibold text-[15px] text-white" key={chip}>
                      <CheckCircle size={18} strokeWidth={1.4} className="text-[#2aebb1]" />
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CasesSection;
