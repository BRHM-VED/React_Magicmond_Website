import { CommonBrandsSection } from '../../../common/CommonBrandsSection';
import { CALENDLY } from '../../../utils/constants/constants';

const row1 = [
  { image: "/assets/images/infraedge/brand-logo-01.svg", alt: "" },
  { image: "/assets/images/infraedge/brand-logo-02.svg", alt: "" },
  { image: "/assets/images/infraedge/brand-logo-03.svg", alt: "" },
  { image: "/assets/icons/brand-r1-extra.svg", alt: "" },
];

const row2 = [
  { image: "/assets/images/infraedge/brand-logo-04.webp", alt: "" },
  { image: "/assets/icons/brand-makelen.svg", alt: "" },
  { image: "/assets/icons/brand-onsite.svg", alt: "" },
  { image: "/assets/icons/brand-r2-extra.svg", alt: "" },
];

const row3 = [
  { image: "/assets/images/infraedge/brand-logo-02.svg", alt: "" },
  { image: "/assets/icons/brand-fur.svg", alt: "" },
  { image: "/assets/icons/brand-r3-extra.svg", alt: "" },
  { image: "/assets/images/infraedge/brand-logo-01.svg", alt: "" },
];

const brandRows = [row1, row2, row3];

export function BrandsSection() {
  return (
    <CommonBrandsSection
      sectionClassName="bg-[#0e081d] py-16 md:py-24 overflow-hidden"
      containerClassName="w-full max-w-[1425px] mx-auto px-5 md:px-10"
      layoutClassName="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16"
      leftColClassName="flex flex-col items-start shrink-0 lg:max-w-[450px]"
      showSparkle={false}
      titleClassName="font-head font-normal text-[28px] sm:text-[36px] md:text-[44px] text-white tracking-[-1px] leading-[1.15] whitespace-nowrap"
      titleNormalText="Brands we "
      titleSerifText="grew with"
      serifClassName="font-serif italic text-[#7db9ff]"
      buttonType="infra"
      buttonText="Let's grow together"
      buttonHref={CALENDLY}
      rightColClassName="relative flex-1 flex flex-col gap-4 overflow-hidden w-full max-w-full"
      showFadeOverlays={true}
      fadeOverlayColor="#0e081d"
      rowWrapperClass="flex gap-4 pr-4"
      rows={brandRows}
      renderTile={(tile, _, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-[#120a22]/50 hover:bg-[#120a22] hover:border-white/[0.12] transition-colors duration-300 px-8 py-4 w-[160px] md:w-[180px] h-[64px] shrink-0 select-none"
        >
          <img src={tile.image} alt={tile.alt} className="max-h-[32px] max-w-[120px] w-auto object-contain brightness-95 opacity-90" />
        </div>
      )}
    />
  );
}

export default BrandsSection;
