import { ieSteps } from '../../data/infraedgeData';
import { CALENDLY } from '../../utils/constants';

export function IeHowSection() {
  return (
    <section className="ie-how">
      <div className="container">
        <h2 className="ie-how__title words"><span className="w-src">Here's how it <span className="serif">works</span></span></h2>
        <p className="ie-how__sub reveal">From insights to execution, we craft solutions that drive real results.</p>
        <div className="ie-how__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          <a className="btn btn--sm" href={CALENDLY}>Transform my business</a>
        </div>

        <div className="ie-how__grid">
          {ieSteps.map((s, i) => (
            <article key={s.badge} className="ie-step reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
              <div className="ie-step__head">
                <div className="ie-step__icon"><img src="/assets/images/3fTl0jOeNCf5k69Fvi5Sj616o.svg" alt="" /></div>
                <span className="ie-step__badge">{s.badge}</span>
              </div>
              <h4 className="ie-step__title">{s.title}</h4>
              <div className="ie-step__sep"></div>
              <p className="ie-step__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default IeHowSection;
