import { LightRays } from '../common/LightRays';
import { CALENDLY } from '../../utils/constants';

export function CtaSection() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta__card">
          <img className="cta__dots" src="/assets/images/common/cta-dots-pattern.webp" alt="" />
          <LightRays theme="cta" className="cta__rays" />
          <div className="cta__content">
            <h2 className="cta__title words">
              <span className="w-src">Take your business to</span>
              <span className="w-src serif">new heights!</span>
            </h2>
            <p className="cta__text reveal">At magicmond, we’re transforming traditional businesses into digitally strong brands that drive growth.</p>
            <div className="cta__btn reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
              <a className="btn btn--sm" href={CALENDLY}>Transform my business</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CtaSection;
