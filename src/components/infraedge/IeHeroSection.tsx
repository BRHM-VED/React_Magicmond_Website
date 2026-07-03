import { LightRays } from '../common/LightRays';
import { CALENDLY } from '../../utils/constants';

export function IeHeroSection() {
  return (
    <section className="ie-hero">
      <img className="ie-hero__bg" src="/assets/images/common/o8Jqke0y2Ge0u7Bolq0usRyapLE.png" alt="" />
      <LightRays theme="blue" className="ie-hero__rays" />
      <div className="ie-hero__content">
        <h1 className="ie-hero__title words">
          <span className="w-src">The future of <span className="serif">real estate</span></span><br />
          <span className="w-src">growth starts here</span>
        </h1>
        <p className="ie-hero__sub reveal" style={{ '--d': '.15s' } as React.CSSProperties}>Transforming traditional businesses into digitally strong brands that thrive in today’s digital world.</p>
        <div className="ie-hero__cta reveal" style={{ '--d': '.3s' } as React.CSSProperties}>
          <a className="btn btn--sm" href={CALENDLY}>Transform my business</a>
        </div>
        <img className="ie-hero__city reveal" style={{ '--d': '.4s' } as React.CSSProperties} src="/assets/images/infraedge/pjCKRJdiwZRIEebRKCMgh8JWuMk.png" alt="City skyline" />
      </div>
    </section>
  );
}
export default IeHeroSection;
