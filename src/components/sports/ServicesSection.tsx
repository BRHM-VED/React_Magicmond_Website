import { spServices } from '../../data/sports.data';
import { CALENDLY } from '../../utils/constants';

export function ServicesSection() {
  return (
    <section className="sp-services">
      <div className="container">
        <h2 className="sp-heading words">
          <span className="w-src">From <span className="serif">boundaries</span> to <span className="serif">brand</span></span><br />
          <span className="w-src"><span className="serif">stories</span> – we do it all.</span>
        </h2>
        <p className="sp-services__sub reveal">Whether you want to be seen on the field, on the screen, or on the fan’s feed — we make it happen.</p>
        <div className="sp-services__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          <a className="btn btn--sm" href={CALENDLY}>Let’s collaborte</a>
        </div>

        <div className="sp-services__grid">
          {spServices.map((s, i) => (
            <article key={s.title} className={`sp-svc${s.tall ? ' sp-svc--tall' : ''} reveal`} style={{ '--d': `${(i % 3) * 0.1}s` } as React.CSSProperties}>
              <h3 className="sp-svc__title">{s.title}</h3>
              <p className="sp-svc__desc">{s.desc}</p>
              <img className="sp-svc__img" src={s.image} alt="" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
