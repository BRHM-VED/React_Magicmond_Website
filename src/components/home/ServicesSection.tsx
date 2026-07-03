import { services } from '../../data/homeData';
import { CALENDLY } from '../../utils/constants';

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
              <div className="svc-card__icon"><img src={svc.icon} alt="" /></div>
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
