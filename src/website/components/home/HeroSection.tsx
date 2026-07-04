import { LightRays } from '../../../common/LightRays';
import { CALENDLY } from '../../../utils/constants/constants';

export function HeroSection() {
  return (
    <section className="hero">
      <img className="hero__bg" src="/assets/images/common/hero-bg-stars.webp" alt="" />
      <LightRays theme="purple" className="hero__rays" />
      <div className="hero__content">
        <div className="hero__press reveal">
          <span className="hero__press-label">As seen on</span>
          <img src="/assets/images/common/logo-yourstory.webp" alt="YourStory" />
          <img src="/assets/images/common/logo-timesofindia.webp" alt="The Times of India" />
          <img className="press--ht" src="/assets/images/common/logo-hindustantimes.webp" alt="Hindustan Times" />
        </div>
        <h1 className="hero__title words">
          <span className="w-src">Your digital</span><br />
          <span className="w-src">growth <span className="serif">partner</span></span>
        </h1>
        <p className="hero__sub reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          We transform your traditional business into a digitally strong brand, enabling a 360° growth ecosystem to thrive in the new era.
        </p>
        <div className="hero__cta reveal" style={{ '--d': '.3s' } as React.CSSProperties}>
          <a className="btn" href={CALENDLY}>Get Started Now</a>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
