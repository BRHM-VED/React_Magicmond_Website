import { Check } from 'lucide-react';
import { CALENDLY } from '../../utils/constants';

const PROBLEMS = [
  'Poor online presence',
  'No premium brand positioning',
  'No online lead generation',
  'No whatsapp marketing',
];

export function IeProblemSection() {
  return (
    <section className="ie-problem">
      <div className="container ie-problem__inner">
        <h2 className="ie-problem__title words">
          <span className="w-src">No Digital Team = Limited <span className="serif">Business Growth</span></span>
        </h2>
        <p className="ie-problem__sub reveal">Grow smarter with strategy, design, and tech.<br />Scale your brand without limits.</p>
        <div className="ie-problem__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          <a className="btn btn--sm" href={CALENDLY}>Transform my business</a>
        </div>
        <div className="ie-problem__card reveal" style={{ '--d': '.2s' } as React.CSSProperties}>
          <ul className="ie-problem__list">
            {PROBLEMS.map((t) => (
              <li key={t}>
                <span className="ie-problem__check">
                  <Check size={14} strokeWidth={2.2} className="text-current" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="ie-problem__visual">
            <img src="/assets/images/infraedge/mPKE2z1LAxL7DDxDEnFUIBToQqE.png" alt="360° digital growth" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default IeProblemSection;
