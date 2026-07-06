import { CheckCircle } from 'lucide-react';
import { spCases } from '../../../data/sports.data';
import { CALENDLY } from '../../../utils/constants/constants';

export function CasesSection() {
  return (
    <section className="sp-cases">
      <div className="container">
        <div className="sp-cases__head">
          <h2 className="sp-heading words">
            <span className="w-src">How MagicMond shaped</span><br />
            <span className="w-src"><span className="serif">iconic identities in sports</span></span>
          </h2>
          <p className="sp-cases__sub reveal">Explore stories of brands that shaped culture, elevated their presence, and unlocked commercial opportunities through our work.</p>
          <div className="sp-cases__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
            <a className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer" href={CALENDLY}>Let’s collaborte</a>
          </div>
        </div>

        {spCases.map((c) => (
          <div className="sp-case" key={c.title}>
            <img className="sp-case__img reveal" src={c.image} alt={`${c.title} campaign`} />
            <div>
              <span className="sp-case__tag reveal">{c.tag}</span>
              <h2 className="sp-case__title reveal" style={{ '--d': '.1s' } as React.CSSProperties}>{c.title}</h2>
              <p className="sp-case__type reveal" style={{ '--d': '.15s' } as React.CSSProperties}>{c.type}</p>
              <p className="sp-case__desc reveal" style={{ '--d': '.2s' } as React.CSSProperties}>{c.desc}</p>
              {c.chips.length > 0 && (
                <div className="sp-case__chips reveal" style={{ '--d': '.25s' } as React.CSSProperties}>
                  {c.chips.map((chip) => (
                    <span className="sp-case__chip" key={chip}>
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
