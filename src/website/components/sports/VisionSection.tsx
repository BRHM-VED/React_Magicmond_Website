import React, { useEffect, useRef } from 'react';
import { spStats } from '../../../data/sports/sportsData';

export function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const imgLeft1Ref = useRef<HTMLDivElement>(null);
  const imgLeft2Ref = useRef<HTMLDivElement>(null);
  const imgRight1Ref = useRef<HTMLDivElement>(null);
  const imgRight2Ref = useRef<HTMLDivElement>(null);
  const imgRight3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sectionRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = containerRect.height - viewportHeight;

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
      } else if (containerRect.bottom < viewportHeight) {
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

      // 2. Translate floating images dynamically
      const left1Y = progress * -(viewportHeight * 0.95);
      const left2Y = progress * -(viewportHeight * 0.90);
      const right1Y = progress * -(viewportHeight * 0.95);
      const right2Y = progress * -(viewportHeight * 0.90);
      const right3Y = progress * -(viewportHeight * 0.85);

      if (imgLeft1Ref.current) imgLeft1Ref.current.style.transform = `translate3d(0, ${left1Y}px, 0)`;
      if (imgLeft2Ref.current) imgLeft2Ref.current.style.transform = `translate3d(0, ${left2Y}px, 0)`;
      if (imgRight1Ref.current) imgRight1Ref.current.style.transform = `translate3d(0, ${right1Y}px, 0)`;
      if (imgRight2Ref.current) imgRight2Ref.current.style.transform = `translate3d(0, ${right2Y}px, 0)`;
      if (imgRight3Ref.current) imgRight3Ref.current.style.transform = `translate3d(0, ${right3Y}px, 0)`;

      // 3. Update opacities dynamically (hidden at first scroll, fades in surprises)
      const isMobile = window.innerWidth < 768;
      const maxOpacity = isMobile ? 0.5 : 1.0;

      // Left 1 & Right 1: Visible from progress 0 to 0.4
      let opacity1 = 0;
      if (progress > 0 && progress < 0.4) {
        if (progress < 0.1) {
          opacity1 = (progress / 0.1) * maxOpacity;
        } else if (progress > 0.3) {
          opacity1 = ((0.4 - progress) / 0.1) * maxOpacity;
        } else {
          opacity1 = maxOpacity;
        }
      }

      // Left 2 (IPL): Visible from progress 0.3 to 1.0
      let opacityLeft2 = 0;
      if (progress > 0.3) {
        if (progress < 0.45) {
          opacityLeft2 = ((progress - 0.3) / 0.15) * maxOpacity;
        } else {
          opacityLeft2 = maxOpacity;
        }
      }

      // Right 2 (Woman/Frame): Visible from progress 0.3 to 0.7
      let opacityRight2 = 0;
      if (progress > 0.3 && progress < 0.7) {
        if (progress < 0.4) {
          opacityRight2 = ((progress - 0.3) / 0.1) * maxOpacity;
        } else if (progress > 0.6) {
          opacityRight2 = ((0.7 - progress) / 0.1) * maxOpacity;
        } else {
          opacityRight2 = maxOpacity;
        }
      }

      // Right 3 (Group Photo): Visible from progress 0.6 to 1.0
      let opacityRight3 = 0;
      if (progress > 0.6) {
        if (progress < 0.75) {
          opacityRight3 = ((progress - 0.6) / 0.15) * maxOpacity;
        } else {
          opacityRight3 = maxOpacity;
        }
      }

      if (imgLeft1Ref.current) imgLeft1Ref.current.style.opacity = String(opacity1);
      if (imgRight1Ref.current) imgRight1Ref.current.style.opacity = String(opacity1);
      if (imgLeft2Ref.current) imgLeft2Ref.current.style.opacity = String(opacityLeft2);
      if (imgRight2Ref.current) imgRight2Ref.current.style.opacity = String(opacityRight2);
      if (imgRight3Ref.current) imgRight3Ref.current.style.opacity = String(opacityRight3);
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
    <div ref={containerRef} className="relative w-full h-[360vh] bg-[#010502]">
      <section
        ref={sectionRef}
        id="about"
        className="left-0 w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden z-20 pt-[80px] md:pt-[149px] pb-[100px] md:pb-[182px]"
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

        {/* Floating Left Image 2 (IPL photo, vertical) */}
        <div
          ref={imgLeft2Ref}
          className="absolute left-[3%] sm:left-[5%] top-[110vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto4.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        {/* Floating Right Image 1 (Three partners, landscape) */}
        <div
          ref={imgRight1Ref}
          className="absolute right-[3%] sm:right-[5%] top-[45vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto2.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        {/* Floating Right Image 2 (Woman/Frame, landscape) */}
        <div
          ref={imgRight2Ref}
          className="absolute right-[3%] sm:right-[5%] top-[120vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto3.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        {/* Floating Right Image 3 (Group Photo, landscape) */}
        <div
          ref={imgRight3Ref}
          className="absolute right-[3%] sm:right-[5%] top-[190vh] w-[90px] sm:w-[140px] md:w-[280px] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-0"
        >
          <img src="/assets/images/common/parelexPhoto5.webp" className="w-full h-auto object-cover" alt="" />
        </div>

        <div className="container mx-auto px-5 md:px-10 relative z-10 h-full flex flex-col justify-center items-center">
          <span className="inline-flex items-center justify-center w-[95.3px] h-[34px] rounded-[20px] bg-white/[0.05] border border-white/10 text-[13.2px] text-white font-body font-medium tracking-[-0.28px] reveal">
            Our Vision
          </span>

          <p
            className="relative max-w-[760px] mx-auto mt-[24px] md:mt-[54px] px-6 sm:px-0 font-head font-medium text-[13px] sm:text-[22px] md:text-[32px] leading-[1.35] tracking-[-0.02em] text-white reveal"
            style={{ '--d': '.1s' } as React.CSSProperties}
          >
            {/* Left Floral Accent */}
            <img
              className="absolute top-[0px] md:top-[-24px] w-[35px] md:w-[60px] lg:w-[86px] left-[-15px] sm:left-[-40px] md:left-[-70px] lg:left-[-140px] pointer-events-none select-none"
              src="/assets/images/sports/leftFlower.webp"
              alt=""
            />

            Great design tells a powerful story. We blend artistry, innovation, and precision to create impactful visuals that captivate and elevate your brand.

            {/* Right Floral Accent */}
            <img
              className="absolute top-[0px] md:top-[-24px] w-[35px] md:w-[60px] lg:w-[86px] right-[-15px] sm:right-[-40px] md:right-[-70px] lg:right-[-140px] pointer-events-none select-none"
              src="/assets/images/sports/rightFlower.webp"
              alt=""
            />
          </p>

          <div className="flex flex-row items-stretch justify-center gap-4 md:gap-[90px] mt-[40px] md:mt-[70px] max-w-[800px] mx-auto px-4 md:px-0">
            {spStats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-[1px] bg-white/10 self-stretch my-2" />}
                <div
                  className="flex-1 text-left reveal"
                  style={{ '--d': `${0.15 + i * 0.1}s` } as React.CSSProperties}
                >
                  <div className="font-inter font-medium text-[36px] md:text-[72px] leading-none tracking-[-0.03em] text-white flex items-baseline justify-start">
                    <span>{s.value}</span>
                    <span className="text-[24px] md:text-[30px] text-[#1ff9b8] ml-0.5 font-medium tracking-[-0.64px] select-none self-start mt-0.5 md:mt-1">
                      {s.symbol || '+'}
                    </span>
                  </div>
                  <div className="mt-2 md:mt-3 font-inter font-medium text-[10px] md:text-[15px] leading-[1.3] tracking-[-0.02em] text-white/60 max-w-[115px] md:max-w-[130px] mx-0 text-left">
                    {s.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionSection;
