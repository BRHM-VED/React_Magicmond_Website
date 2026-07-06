import { LightRays } from '../../../common/LightRays';
import { CALENDLY } from '../../../utils/constants/constants';
import { WatchVideoButton } from '../../../common/youtube/WatchVideoButton';
import { Button } from '../../../common/button/homeButton';

export function HeroSection() {
  return (
    <section className="sp-hero">
      <img className="sp-hero__bg" src="/assets/images/common/hero-bg-stars.webp" alt="" />
      <LightRays theme="green" className="sp-hero__rays" />
      <div className="sp-hero__content">
        <h1 className="sp-hero__title words">
          <span className="w-src">Taking Indian sports</span><br />
          <span className="w-src">to the <span className="serif">world of cricket</span></span>
        </h1>
        <p className="sp-hero__sub reveal" style={{ '--d': '.15s' } as React.CSSProperties}>From global tournaments to digital cricket platforms — we help brands unlock visibility, engagement, and trust without breaking the bank.</p>
        <div className="sp-hero__cta reveal flex flex-row items-center justify-center gap-4 sm:gap-6" style={{ '--d': '.3s' } as React.CSSProperties}>
          <Button variant="small" href={CALENDLY}>Let’s collaborate</Button>
          <WatchVideoButton />
        </div>
        <img className="sp-hero__stadium reveal" style={{ '--d': '.4s' } as React.CSSProperties} src="/assets/images/sports/hero-stadium.webp" alt="Cricket stadium" />
      </div>
    </section>
  );
}
export default HeroSection;
