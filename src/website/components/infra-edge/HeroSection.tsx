import { useState, useEffect } from 'react';
import { LightRays } from '../../../common/LightRays';
import { CALENDLY } from '../../../utils/constants/constants';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';

const WORDS = ["real estate", "architecture", "interior design", "construction"];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
        setFade(true);
      }, 500); // Wait for fade-out before switching text
    }, 3000); // Rotate word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-[120px] md:pt-[150px] px-0 pb-0 text-center overflow-hidden">
      {/* Background elements */}
      <img
        className="absolute top-0 left-0 w-full h-[619px] object-cover object-top opacity-55 pointer-events-none z-0"
        src="/assets/images/common/hero-bg-stars.webp"
        alt=""
      />
      <LightRays theme="blue" className="absolute top-0 left-0 w-full h-[640px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1025px] mx-auto px-5 md:px-0 flex flex-col items-center">
        <h1 className="font-head font-medium text-[28px] sm:text-[40px] md:text-[64px] lg:text-[96px] leading-[1.2] md:leading-[1.1] lg:leading-[1.05] tracking-[-1px] lg:tracking-[-1.66px] text-white words">
          <span className="w-src">
            The future of{' '}
            <span
              className={`font-serif italic text-[#7ebaff] inline-block transition-all duration-500 transform ${fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
                }`}
            >
              {WORDS[index]}
            </span>
          </span><br />
          <span className="w-src">growth starts here.</span>
        </h1>

        <p className="text-[#aaaaaa] font-head font-normal text-[14px] md:text-[16.6px] leading-[1.7] max-w-[560px] mx-auto mt-6 reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          We transform your traditional business into a digitally strong brand, enabling a 360° growth ecosystem to thrive in the new era.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 reveal" style={{ '--d': '.3s' } as React.CSSProperties}>
          <InfraEdgeButton variant="small" href={CALENDLY}>
            Transform my business
          </InfraEdgeButton>
        </div>
      </div>

      <img
        className="relative block w-full max-w-[1440px] mx-auto mt-11 md:mt-12 px-0 md:px-10 reveal z-10"
        style={{ '--d': '.4s' } as React.CSSProperties}
        src="/assets/images/infraedge/hero-city-skyline.webp"
        alt="City skyline"
      />
    </section>
  );
}

export default HeroSection;

