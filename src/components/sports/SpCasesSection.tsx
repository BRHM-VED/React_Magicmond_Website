import { CheckCircle } from 'lucide-react';
import { spCases } from '../../data/sportsData';
import { CALENDLY } from '../../utils/constants';

export function SpCasesSection() {
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
            <a className="btn btn--sm" href={CALENDLY}>Let’s collaborte</a>
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
export default SpCasesSection;
