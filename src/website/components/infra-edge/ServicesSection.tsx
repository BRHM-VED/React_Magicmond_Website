import * as Icons from 'lucide-react';
import { ieServices } from '../../../data/infra-edge.data';
import { CALENDLY } from '../../../utils/constants/constants';

const ieIconStyles: Record<string, { bg: string; color: string }> = {
  Target: { bg: 'linear-gradient(180deg, #FE8550 0%, #E14601 100%)', color: '#ffffff' },
  TrendingUp: { bg: 'linear-gradient(180deg, #FBFBFB 0%, #D0D0D0 100%)', color: '#000000' },
  Monitor: { bg: '#70218B', color: '#ffffff' },
  MessageSquare: { bg: '#413BAC', color: '#ffffff' },
  Palette: { bg: 'linear-gradient(180deg, #FEE863 0%, #9F8D22 100%)', color: '#000000' },
  MessageCircle: { bg: 'linear-gradient(180deg, #00AC3C 0%, #138D3E 100%)', color: '#ffffff' },
};

export function ServicesSection() {
  return (
    <section className="ie-services">
      <div className="container">
        <h2 className="ie-services__title words">
          <span className="w-src">Drive real results with</span><br />
          <span className="w-src"><span className="serif">creativity</span>, <span className="serif">strategy</span> &amp; <span className="serif">innovation</span></span>
        </h2>
        <p className="ie-services__sub reveal">Backed by proven expertise, we transform businesses into future-ready brands that thrive in a competitive market.</p>
        <div className="ie-services__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          <a className="btn btn--sm" href={CALENDLY}>Transform my business</a>
        </div>

        <div className="ie-services__grid">
          {ieServices.map((s, i) => (
            <article key={s.title} className="ie-svc reveal" style={{ '--d': `${(i % 3) * 0.1}s` } as React.CSSProperties}>
              <div className="ie-svc__head">
                <div className="ie-svc__icon" style={{ width: '44px', height: '44px' }}>
                  {(() => {
                    const cfg = ieIconStyles[s.icon] || { bg: '#70218B', color: '#ffffff' };
                    const LucideIcon = (Icons as any)[s.icon];
                    return LucideIcon ? (
                      <div
                        style={{
                          background: cfg.bg,
                          borderRadius: '10px',
                          border: '1px solid rgba(255, 255, 255, 0.07)',
                          boxShadow: 'inset 0 4px 4px rgba(255, 255, 255, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <LucideIcon
                          size={22}
                          strokeWidth={1.8}
                          color={cfg.color}
                          style={{
                            filter: 'drop-shadow(0px 3px 1.5px rgba(0, 0, 0, 0.25))',
                          }}
                        />
                      </div>
                    ) : null;
                  })()}
                </div>
                <Icons.ArrowUpRight size={18} strokeWidth={1.6} className="ie-svc__arrow text-white" />
              </div>
              <h3 className="ie-svc__title">{s.title}</h3>
              <p className="ie-svc__tag">{s.tag}</p>
              <div className="ie-svc__sep"></div>
              <p className="ie-svc__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
