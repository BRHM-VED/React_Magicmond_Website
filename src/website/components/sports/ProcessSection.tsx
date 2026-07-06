import { spSteps } from '../../../data/sports.data';
import { CALENDLY } from '../../../utils/constants/constants';

export function ProcessSection() {
  return (
    <section className="ie-how">
      <div className="container">
        <h2 className="ie-how__title words">
          <span className="w-src">Here's how it <span className="serif">works</span></span>
        </h2>
        <p className="ie-how__sub reveal">
          From insights to execution, we craft solutions that drive real results.
        </p>
        <div className="ie-how__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          <a className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer" href={CALENDLY}>Transform my business</a>
        </div>

        <div className="ie-how__grid">
          {spSteps.map((s, i) => (
            <article key={s.badge} className="ie-step reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
              <div className="ie-step__head">
                <div className="ie-step__icon">
                  <img src="/assets/images/infraedge/step-icon-bg.svg" alt="" />
                </div>
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
export default ProcessSection;
