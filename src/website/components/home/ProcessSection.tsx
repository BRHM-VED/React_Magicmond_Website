import { Workflow, MousePointerClick, Rocket } from 'lucide-react';
import { processSteps } from '../../../data/home.data';
import { CALENDLY } from '../../../utils/constants/constants';

const STEP_ICONS = [
  <Workflow key="1" strokeWidth={1.4} size={20} color="#fff" />,
  <MousePointerClick key="2" strokeWidth={1.4} size={20} color="#fff" />,
  <Rocket key="3" strokeWidth={1.4} size={20} color="#fff" />,
];

export function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__grid">
          <div>
            <h2 className="process__title words">
              <span className="w-src">How magicmond</span><br />
              <span className="w-src">makes brand <span className="serif">magic</span></span>
            </h2>
            <p className="process__text reveal">From in‑depth strategy to growth‑driven scaling,  we transform your vision into a dynamic digital brand.</p>

            <div className="process__steps">
              {processSteps.map((step, i) => (
                <article key={step.badge} className="step-card reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
                  <div className="step-card__head">
                    <div className="step-card__icon">{STEP_ICONS[i]}</div>
                    <span className="step-card__badge">{step.badge.split('-')[0]}<b>-{step.badge.split('-')[1]}</b></span>
                  </div>
                  <h4 className="step-card__title">{step.title}</h4>
                  <div className="step-card__sep"></div>
                  <p className="step-card__desc">{step.description}</p>
                  {i === processSteps.length - 1 && (
                    <div className="process__cta">
                      <a className="btn btn--sm" href={CALENDLY}>Start your growth journey</a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <aside className="process__visual reveal-scale">
            <img src="/assets/icons/wand-big.svg" alt="MagicMond wand" />
            <div className="process__visual-label">Magicmond</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
export default ProcessSection;
