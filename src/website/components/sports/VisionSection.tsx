import React, { useEffect, useRef } from 'react';
import { spStats } from '../../../data/sports/sportsData';

export function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const imgLeft1Ref = useRef<HTMLDivElement>(null);
  const imgLeft2Ref = useRef<HTMLDivElement>(null);
  const imgLeft3Ref = useRef<HTMLDivElement>(null);
  const imgRight1Ref = useRef<HTMLDivElement>(null);
  const imgRight2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sectionRef.current) return;

      const isMobile = window.innerWidth < 768;
      if (isMobile) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.getBoundingClientRect().height;
      const totalScrollable = containerRect.height - sectionHeight;

      if (totalScrollable <= 0) return;

      // Calculate progress (from 0 to 1) along the scroll track
      const scrolled = -containerRect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // 1. Update position of the fixed wrapper
      if (containerRect.top > 0) {
        // Before section: scroll inline at top
        sectionRef.current.style.position = 'absolute';
        sectionRef.current.style.top = '0';
        sectionRef.current.style.bottom = 'auto';
      } else if (containerRect.bottom < sectionHeight) {
        // After section: scroll inline at bottom
        sectionRef.current.style.position = 'absolute';
        sectionRef.current.style.top = 'auto';
        sectionRef.current.style.bottom = '0';
      } else {
        // Within section: pin to viewport
        sectionRef.current.style.position = 'fixed';
        sectionRef.current.style.top = '0';
        sectionRef.current.style.bottom = 'auto';
      }

      // Helper function to interpolate values smoothly
      const interpolate = (
        p: number,
        startProgress: number,
        endProgress: number,
        startVal: number,
        endVal: number
      ) => {
        if (p <= startProgress) return startVal;
        if (p >= endProgress) return endVal;
        const ratio = (p - startProgress) / (endProgress - startProgress);
        return startVal + ratio * (endVal - startVal);
      };

      const maxOpacity = isMobile ? 0.5 : 1.0;
      const travelDistance = viewportHeight * 0.35;

      // --- Choreographed Early-to-Late Parallax Timeline (Centered around progress 0.50) ---

      // 2. Translate and Fade Left 1 (Sidhu) & Right 1 (Three partners)
      // Fades in and slides up between 0.05 and 0.25. Fades out and slides up between 0.65 and 0.85.
      let opacity1 = 0;
      let y1 = travelDistance;
      if (progress < 0.50) {
        opacity1 = interpolate(progress, 0.05, 0.25, 0, maxOpacity);
        y1 = interpolate(progress, 0.05, 0.25, travelDistance, 0);
      } else {
        opacity1 = interpolate(progress, 0.65, 0.85, maxOpacity, 0);
        y1 = interpolate(progress, 0.65, 0.85, 0, -travelDistance);
      }

      // 3. Translate and Fade Left 2 (Two Guys Standing)
      // Fades in and slides up between 0.15 and 0.35. Fades out and slides up between 0.75 and 0.95.
      let opacityLeft2 = 0;
      let yLeft2 = travelDistance;
      if (progress < 0.60) {
        opacityLeft2 = interpolate(progress, 0.15, 0.35, 0, maxOpacity);
        yLeft2 = interpolate(progress, 0.15, 0.35, travelDistance, 0);
      } else {
        opacityLeft2 = interpolate(progress, 0.75, 0.95, maxOpacity, 0);
        yLeft2 = interpolate(progress, 0.75, 0.95, 0, -travelDistance);
      }

      // 4. Translate and Fade Left 3 (IPL Photo)
      // Fades in and slides up between 0.25 and 0.45. Fades out and slides up between 0.85 and 1.00.
      let opacityLeft3 = 0;
      let yLeft3 = travelDistance;
      if (progress < 0.70) {
        opacityLeft3 = interpolate(progress, 0.25, 0.45, 0, maxOpacity);
        yLeft3 = interpolate(progress, 0.25, 0.45, travelDistance, 0);
      } else {
        opacityLeft3 = interpolate(progress, 0.85, 1.00, maxOpacity, 0);
        yLeft3 = interpolate(progress, 0.85, 1.00, 0, -travelDistance);
      }

      // 5. Translate and Fade Right 2 (Woman/Frame)
      // Fades in and slides up between 0.15 and 0.35. Fades out and slides up between 0.85 and 1.00.
      let opacityRight2 = 0;
      let yRight2 = travelDistance;
      if (progress < 0.60) {
        opacityRight2 = interpolate(progress, 0.15, 0.35, 0, maxOpacity);
        yRight2 = interpolate(progress, 0.15, 0.35, travelDistance, 0);
      } else {
        opacityRight2 = interpolate(progress, 0.85, 1.00, maxOpacity, 0);
        yRight2 = interpolate(progress, 0.85, 1.00, 0, -travelDistance);
      }

      // Apply transforms
      if (imgLeft1Ref.current) {
        imgLeft1Ref.current.style.transform = `translate3d(0, ${y1}px, 0)`;
        imgLeft1Ref.current.style.opacity = String(opacity1);
      }
      if (imgRight1Ref.current) {
        imgRight1Ref.current.style.transform = `translate3d(0, ${y1}px, 0)`;
        imgRight1Ref.current.style.opacity = String(opacity1);
      }
      if (imgLeft2Ref.current) {
        imgLeft2Ref.current.style.transform = `translate3d(0, ${yLeft2}px, 0)`;
        imgLeft2Ref.current.style.opacity = String(opacityLeft2);
      }
      if (imgLeft3Ref.current) {
        imgLeft3Ref.current.style.transform = `translate3d(0, ${yLeft3}px, 0)`;
        imgLeft3Ref.current.style.opacity = String(opacityLeft3);
      }
      if (imgRight2Ref.current) {
        imgRight2Ref.current.style.transform = `translate3d(0, ${yRight2}px, 0)`;
        imgRight2Ref.current.style.opacity = String(opacityRight2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);


  return (
    <div ref={containerRef} className="relative w-full h-auto md:h-[220vh] bg-[#010502] mb-[0px]">
      <section
        ref={sectionRef}
        id="about"
        className="left-0 w-full h-auto md:h-screen flex flex-col justify-center items-center text-center overflow-hidden z-20"
      >
        {/* Background Graphic Effect */}
        <img
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-80"
          src="/assets/images/sports/sportsBgEffect.webp"
          alt=""
        />

        {/* Floating Left Image 1 (Navjot Sidhu, square) */}
        <div
          ref={imgLeft1Ref}
          className="absolute left-[3%] sm:left-[5%] top-[12vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto1.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        {/* Floating Left Image 2 (Two Guys Standing, vertical) */}
        <div
          ref={imgLeft2Ref}
          className="absolute left-[3%] sm:left-[5%] top-[25vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto5.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        {/* Floating Left Image 3 (IPL photo, landscape) */}
        <div
          ref={imgLeft3Ref}
          className="absolute left-[3%] sm:left-[5%] top-[48vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto4.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        {/* Floating Right Image 1 (Three partners, landscape) */}
        <div
          ref={imgRight1Ref}
          className="absolute right-[3%] sm:right-[5%] top-[40vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto2.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        {/* Floating Right Image 2 (Woman/Frame, portrait) */}
        <div
          ref={imgRight2Ref}
          className="absolute right-[3%] sm:right-[5%] top-[55vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto3.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        <div className="relative z-[25] md:z-10 w-full max-w-[1200px] h-auto md:h-[688px] flex flex-col justify-start items-center pt-[40px] md:pt-[149px] pb-[40px] md:pb-[182.4px] px-5 md:px-0 mx-auto">
          <span className="inline-flex items-center justify-center w-[95.3px] h-[34px] rounded-[20px] bg-white/[0.05] border border-white/10 text-[13.2px] text-white font-body font-medium tracking-[-0.28px] reveal">
            Our Vision
          </span>

          <p
            className="relative max-w-[900px] mx-auto mt-[40px] md:mt-[27px] font-head font-medium text-[12px] sm:text-[22px] md:text-[32px] leading-[1.35] tracking-[-0.02em] text-white reveal"
            style={{ '--d': '.1s' } as React.CSSProperties}
          >
            {/* Left Floral Accent */}
            <img
              className="absolute top-[-10px] md:top-[-24px] w-[35px] md:w-[60px] lg:w-[86px] left-[-15px] sm:left-[-40px] md:left-[-70px] lg:left-[-140px] pointer-events-none select-none"
              src="/assets/images/sports/leftFlower.webp"
              alt=""
            />

            Great design tells a powerful story. We blend artistry, innovation, and precision to create impactful visuals that captivate and elevate your brand.

            {/* Right Floral Accent */}
            <img
              className="absolute top-[-10px] md:top-[-24px] w-[35px] md:w-[60px] lg:w-[86px] right-[-15px] sm:right-[-40px] md:right-[-70px] lg:right-[-140px] pointer-events-none select-none"
              src="/assets/images/sports/rightFlower.webp"
              alt=""
            />
          </p>

          <div className="flex flex-row items-stretch justify-center gap-4 md:gap-[90px] mt-[50px] md:mt-[59px] max-w-[800px] mx-auto px-4 md:px-0">
            {spStats.map((s, i) => {
              const isLongValue = s.value.length > 5;
              return (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="w-[1px] bg-white/10 self-stretch my-2" />}
                  <div
                    className="flex-1 text-left reveal"
                    style={{ '--d': `${0.15 + i * 0.1}s` } as React.CSSProperties}
                  >
                    <div className={`font-inter font-medium leading-none tracking-[-0.03em] text-white flex items-baseline justify-start ${isLongValue
                      ? 'text-[15px] sm:text-[22px] md:text-[46px]'
                      : 'text-[36px] md:text-[72px]'
                      }`}>
                      <span>{s.value}</span>
                      <span className="text-[20px] md:text-[30px] text-[#1ff9b8] ml-0.5 font-medium tracking-[-0.64px] select-none self-start mt-0.5 md:mt-1">
                        {s.symbol || '+'}
                      </span>
                    </div>
                    <div className="mt-2 md:mt-3 font-inter font-medium text-[10px] md:text-[15px] leading-[1.3] tracking-[-0.02em] text-white/60 max-w-[115px] md:max-w-[130px] mx-0 text-left">
                      {s.label}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionSection;
