import { CALENDLY } from '../../../utils/constants/constants';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';
import { BrandMarquee } from '../../../common/BrandMarquee';

const row1 = [
  "/assets/images/infraedge/brand-logo-01.svg",
  "/assets/images/infraedge/brand-logo-02.svg",
  "/assets/images/infraedge/brand-logo-03.svg",
  "/assets/icons/brand-r1-extra.svg",
];

const row2 = [
  "/assets/images/infraedge/brand-logo-04.webp",
  "/assets/icons/brand-makelen.svg",
  "/assets/icons/brand-onsite.svg",
  "/assets/icons/brand-r2-extra.svg",
];

const row3 = [
  "/assets/images/infraedge/brand-logo-02.svg",
  "/assets/icons/brand-fur.svg",
  "/assets/icons/brand-r3-extra.svg",
  "/assets/images/infraedge/brand-logo-01.svg",
];

export function BrandsSection() {
  return (
    <section className="bg-[#0e081d] py-16 md:py-24 overflow-hidden" id="brands">
      <div className="w-full max-w-[1425px] mx-auto px-5 md:px-10">

        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

          {/* Left: Title + CTA */}
          <div className="flex flex-col items-start shrink-0 lg:max-w-[450px]">
            <h2 className="font-head font-normal text-[28px] sm:text-[36px] md:text-[44px] text-white tracking-[-1px] leading-[1.15] whitespace-nowrap">
              Brands we <span className="font-serif italic text-[#7db9ff]">grew with</span>
            </h2>
            <div className="mt-7">
              <InfraEdgeButton variant="small" href={CALENDLY}>
                Let's grow together
              </InfraEdgeButton>
            </div>
          </div>

          {/* Right: Brand logo infinite scrolling marquees - 3 offset rows */}
          <div className="relative flex-1 flex flex-col gap-4 overflow-hidden w-full max-w-full">
            {/* Fade overlays on the sides */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#0e081d] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#0e081d] to-transparent z-10" />

            {/* Row 1 (scrolls left) */}
            <BrandMarquee reverse={false} className="w-full">
              <div className="flex gap-4 pr-4">
                {row1.map((logo, i) => (
                  <div
                    key={`r1-${i}`}
                    className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-[#120a22]/50 hover:bg-[#120a22] hover:border-white/[0.12] transition-colors duration-300 px-8 py-4 w-[160px] md:w-[180px] h-[64px] shrink-0 select-none"
                  >
                    <img src={logo} alt="" className="max-h-[32px] max-w-[120px] w-auto object-contain brightness-95 opacity-90" />
                  </div>
                ))}
              </div>
            </BrandMarquee>

            {/* Row 2 (scrolls right / reverse) */}
            <BrandMarquee reverse={true} className="w-full">
              <div className="flex gap-4 pr-4">
                {row2.map((logo, i) => (
                  <div
                    key={`r2-${i}`}
                    className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-[#120a22]/50 hover:bg-[#120a22] hover:border-white/[0.12] transition-colors duration-300 px-8 py-4 w-[160px] md:w-[180px] h-[64px] shrink-0 select-none"
                  >
                    <img src={logo} alt="" className="max-h-[32px] max-w-[120px] w-auto object-contain brightness-95 opacity-90" />
                  </div>
                ))}
              </div>
            </BrandMarquee>

            {/* Row 3 (scrolls left) */}
            <BrandMarquee reverse={false} className="w-full">
              <div className="flex gap-4 pr-4">
                {row3.map((logo, i) => (
                  <div
                    key={`r3-${i}`}
                    className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-[#120a22]/50 hover:bg-[#120a22] hover:border-white/[0.12] transition-colors duration-300 px-8 py-4 w-[160px] md:w-[180px] h-[64px] shrink-0 select-none"
                  >
                    <img src={logo} alt="" className="max-h-[32px] max-w-[120px] w-auto object-contain brightness-95 opacity-90" />
                  </div>
                ))}
              </div>
            </BrandMarquee>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
