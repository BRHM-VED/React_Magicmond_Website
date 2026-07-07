import React from 'react';
import { spStats } from '../../../data/sports/sports.data';

export function VisionSection() {
  return (
    <section className="relative py-24 md:py-[150px] md:pb-[110px] text-center overflow-hidden w-full">
      {/* Background Graphic Effect */}
      <img
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-80"
        src="/assets/images/sports/sportsBgEffect.webp"
        alt=""
      />

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <span className="inline-flex items-center justify-center w-[95.3px] h-[34px] rounded-[20px] bg-white/[0.05] border border-white/10 text-[13.2px] text-white font-body font-medium tracking-[-0.28px] reveal">
          Our Vision
        </span>

        <p
          className="relative max-w-[760px] mx-auto mt-[54px] px-6 sm:px-0 font-head font-medium text-[12px] md:text-[32px] leading-[1.35] tracking-[-0.02em] text-white reveal"
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
  );
}

export default VisionSection;
