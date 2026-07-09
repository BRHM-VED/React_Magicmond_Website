import React, { useEffect, useRef } from 'react';
import { spStats } from '../../../data/sports/sportsData';

export function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftReelRef = useRef<HTMLDivElement>(null);
  const rightReelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;

      if (totalScrollable <= 0) return;

      // Calculate how far the top of the container has scrolled past the top of the viewport
      const scrolled = -rect.top;
      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      // Translate reels from 0% (first image) to -50% (second image sliding up from bottom)
      const translateVal = progress * -50;

      if (leftReelRef.current) {
        leftReelRef.current.style.transform = `translate3d(0, ${translateVal}%, 0)`;
      }
      if (rightReelRef.current) {
        rightReelRef.current.style.transform = `translate3d(0, ${translateVal}%, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[280vh] bg-[#010502]">
      <section id="about" className="sticky top-0 h-screen flex flex-col justify-center items-center text-center overflow-hidden w-full">
        {/* Background Graphic Effect */}
        <img
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-80"
          src="/assets/images/sports/sportsBgEffect.webp"
          alt=""
        />

        {/* Floating Left Reel (parelexPhoto2 -> parelexPhoto5) */}
        <div
          className="absolute left-[3%] sm:left-[5%] top-[10%] sm:top-[12%] w-[90px] sm:w-[140px] md:w-[280px] aspect-[565/425] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-50 md:opacity-100"
        >
          <div ref={leftReelRef} className="flex flex-col w-full h-[200%] transition-transform duration-75 ease-out">
            <div className="w-full h-1/2">
              <img src="/assets/images/common/parelexPhoto2.webp" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-full h-1/2">
              <img src="/assets/images/common/parelexPhoto5.webp" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>

        {/* Floating Right Reel (parelexPhoto1 -> parelexPhoto4) */}
        <div
          className="absolute right-[3%] sm:right-[5%] bottom-[5%] sm:bottom-[10%] w-[90px] sm:w-[140px] md:w-[280px] aspect-square rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/5 shadow-2xl z-0 md:z-20 pointer-events-none opacity-50 md:opacity-100"
        >
          <div ref={rightReelRef} className="flex flex-col w-full h-[200%] transition-transform duration-75 ease-out">
            <div className="w-full h-1/2">
              <img src="/assets/images/common/parelexPhoto1.webp" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-full h-1/2">
              <img src="/assets/images/common/parelexPhoto4.webp" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-5 md:px-10 relative z-10">
          <span className="inline-flex items-center justify-center w-[95.3px] h-[34px] rounded-[20px] bg-white/[0.05] border border-white/10 text-[13.2px] text-white font-body font-medium tracking-[-0.28px] reveal">
            Our Vision
          </span>

          <p
            className="relative max-w-[760px] mx-auto mt-[54px] px-6 sm:px-0 font-head font-medium text-[16px] sm:text-[22px] md:text-[32px] leading-[1.35] tracking-[-0.02em] text-white reveal"
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

          <div className="flex flex-row items-stretch justify-center gap-4 md:gap-[90px] mt-[70px] max-w-[800px] mx-auto px-4 md:px-0">
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
