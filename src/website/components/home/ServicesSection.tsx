import * as Icons from 'lucide-react';
import { services } from '../../../data/home.data';
import { CALENDLY } from '../../../utils/constants/constants';

const iconStyles: Record<string, { bg: string; color: string }> = {
  Target: { bg: 'linear-gradient(180deg, #FE8550 0%, #E14601 100%)', color: '#ffffff' },
  Monitor: { bg: '#70218B', color: '#ffffff' },
  MessageSquare: { bg: '#413BAC', color: '#ffffff' },
  Palette: { bg: 'linear-gradient(180deg, #FBFBFB 0%, #D0D0D0 100%)', color: '#000000' },
  TrendingUp: { bg: 'linear-gradient(180deg, #FEE863 0%, #9F8D22 100%)', color: '#000000' },
  Cpu: { bg: 'linear-gradient(180deg, #09406E 0%, #061F54 100%)', color: '#ffffff' },
};

export function ServicesSection() {
  return (
    <section className="services" id="service">
      <h2 className="services__title words">
        <span className="w-src">Fueling growth through <span className="serif">creativity</span>,</span><br />
        <span className="w-src"><span className="serif">strategy</span> &amp; <span className="serif">innovation</span></span>
      </h2>
      <p className="services__sub reveal">Grow smarter with strategy, design, and tech.<br />Scale your brand without limits.</p>
      <div className="services__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
        <a className="btn btn--sm" href={CALENDLY}>Transform my business</a>
      </div>

      <div className="services__stack">
        {services.map((svc) => (
          <article className="svc-card" key={svc.title}>
            <div className="svc-card__info">
              <div className="services__icon-wrapper" style={{ width: '44px', height: '44px', marginBottom: '26px' }}>
                {(() => {
                  const cfg = iconStyles[svc.icon] || { bg: '#70218B', color: '#ffffff' };
                  const LucideIcon = (Icons as any)[svc.icon];
                  return LucideIcon ? (
                    <div
                      style={{
                        background: cfg.bg,
                        borderRadius: '50%',
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
              <h3 className="svc-card__title">{svc.title}</h3>
              <p className="svc-card__desc">{svc.description}</p>
            </div>
            <img className="svc-card__img" src={svc.image} alt={svc.imageAlt} />
          </article>
        ))}
      </div>
    </section>
  );
}
export default ServicesSection;
