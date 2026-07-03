import { ArrowUpRight } from 'lucide-react';
import { ieServices } from '../../data/infraedgeData';
import { CALENDLY } from '../../utils/constants';

export function IeServicesSection() {
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
                <img className="ie-svc__icon" src={s.icon} alt="" />
                <ArrowUpRight size={18} strokeWidth={1.6} className="ie-svc__arrow text-white" />
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
export default IeServicesSection;
