import React from 'react';
import { BrandMarquee } from '../../../common/BrandMarquee';
import { brandRows } from '../../../data/home.data';
import { FONTS } from '../../../utils/constants/fonts';
import { CALENDLY } from '../../../utils/constants/constants';
import { Button } from '../../../common/button/homeButton';

export function BrandsSection() {
  return (
    <section className="relative z-20 bg-[#0d0817] py-16 md:py-[60px] pb-24 md:pb-[90px] overflow-hidden">
      <div className="container px-5 md:px-10 mx-auto max-w-[1360px]">
        {/* Two-Column Grid: Title + CTA on left, Marquee rows on right */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-[100px] items-center lg:items-end">

          {/* Left Column: Heading & Button */}
          <div className="flex flex-col items-start text-left">
            {/* Title - lg:whitespace-nowrap ensures it stays on a single line on desktop */}
            <h2 className={`${FONTS.head} font-normal text-[35px] md:text-[54px] leading-tight md:leading-[1.1] tracking-[-1.9px] text-white lg:whitespace-nowrap reveal`}>
              Brands we <span className={`${FONTS.serif} italic text-[#e0b6ff]`}>grew with</span>
            </h2>

            {/* "Let's grow together" CTA Button using common Button component in all-caps */}
            <div className="mt-6 md:mt-8 reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
              <Button
                variant="small"
                href={CALENDLY}
                className="!px-5 border border-white/20 shadow-[0_0_20px_rgba(105,32,131,0.5)] hover:shadow-[0_0_30px_rgba(192,85,229,0.8)] transition-all duration-300"
              >
                LET’S GROW TOGETHER
              </Button>
            </div>
          </div>

          {/* Right Column: Marquees */}
          <div className="flex flex-col gap-[18px] w-full min-w-0 overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)' }}>
            {brandRows.map((row, r) => (
              <BrandMarquee key={r} reverse={r === 1}>
                {row.map((tile, i) =>
                  tile.meta ? (
                    <div
                      key={i}
                      className="h-14 md:h-[68px] px-4 md:px-[26px] bg-[#16101f] border border-white/[0.06] rounded-[18px] flex flex-col items-center justify-center gap-[2px] shrink-0"
                    >
                      <img src={tile.image} alt={tile.alt} className="h-6 md:h-7 object-contain" />
                      <span className="font-['Comfortaa'] font-bold text-[10px] text-white">Meta</span>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="h-14 md:h-[68px] px-[18px] md:px-[28px] bg-[#16101f] border border-white/[0.06] rounded-[18px] flex items-center justify-center shrink-0"
                    >
                      <img src={tile.image} alt={tile.alt} className="h-7 md:h-8 object-contain opacity-80" />
                    </div>
                  )
                )}
              </BrandMarquee>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
