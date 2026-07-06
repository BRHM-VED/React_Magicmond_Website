import React from 'react';
import { LightRays } from '../../../common/LightRays';
import { CALENDLY } from '../../../utils/constants/constants';
import { FONTS } from '../../../utils/constants/fonts';
import { Button } from '../../../common/button/homeButton';

export function CtaSection() {
  return (
    <section className="py-20 px-5 md:px-10 overflow-hidden" id="cta">
      <div className="container mx-auto max-w-[1200px]">
        {/* Glowing visual container */}
        <div className="relative rounded-[24px] overflow-hidden bg-[#08050f] border border-white/[0.06] py-[60px] px-5 sm:px-10 lg:py-[90px] lg:px-[40px] text-center shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          {/* Dots Pattern */}
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0 select-none"
            src="/assets/images/common/cta-dots-pattern.webp"
            alt=""
          />
          {/* Animated Light Rays */}
          <LightRays
            theme="cta"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          />

          {/* Interactive content layer */}
          <div className="relative z-10">
            {/* Title with Serif heights */}
            <h2 className={`${FONTS.head} font-medium text-[35px] md:text-[54px] leading-tight md:leading-[1.2] tracking-[-1.9px] text-white reveal`}>
              Take your business to{' '}
              <span className={`${FONTS.serif} italic text-[#e0b6ff] block mt-1`}>
                new heights!
              </span>
            </h2>

            {/* Description */}
            <p
              className={`${FONTS.body} max-w-[430px] mx-auto mt-6 text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.2px] text-white/60 reveal`}
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              At magicmond, we’re transforming traditional businesses into digitally strong brands that drive growth.
            </p>

            {/* Glowing CTA Button */}
            <div className="mt-9 reveal" style={{ '--d': '.2s' } as React.CSSProperties}>
              <Button
                variant="large"
                href={CALENDLY}
                className="border border-white/20 shadow-[0_0_20px_rgba(105,32,131,0.5)] hover:shadow-[0_0_30px_rgba(192,85,229,0.8)] transition-all duration-300"
              >
                Transform my business
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
