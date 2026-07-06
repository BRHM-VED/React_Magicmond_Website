import { LightRays } from '../../../common/LightRays';
import { CALENDLY } from '../../../utils/constants/constants';
import { WatchVideoButton } from '../../../common/youtube/WatchVideoButton';
import { Button } from '../../../common/button/homeButton';

export function HeroSection() {
  return (
    <section className="hero">
      <img className="hero__bg" src="/assets/images/common/hero-bg-stars.webp" alt="" />
      <LightRays theme="purple" className="hero__rays" />
      <div className="hero__content">
        <div className="hero__press reveal">
          <span className="press--lbl">FEATURED IN</span>
          <img className="press--ht" src="/assets/images/common/logo-hindustantimes.webp" alt="Hindustan Times" />
        </div>
        <h1 className="hero__title words">
          <span className="w-src">Your digital</span><br />
          <span className="w-src">growth <span className="serif">partner</span></span>
        </h1>
        <p className="hero__sub reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          We transform your traditional business into a digitally strong brand, enabling a 360° growth ecosystem to thrive in the new era.
        </p>
        <div className="hero__cta reveal flex flex-row items-center justify-center gap-4 sm:gap-6" style={{ '--d': '.3s' } as React.CSSProperties}>
          <Button
            variant="large"
            href={CALENDLY}
            className="!px-5 sm:!px-6"
          >
            Get Started Now
          </Button>
          <WatchVideoButton />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
