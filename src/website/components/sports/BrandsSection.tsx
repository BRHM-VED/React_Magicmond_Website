import { CommonBrandsSection } from '../../../common/CommonBrandsSection';
import { CALENDLY } from '../../../utils/constants/constants';

const row1 = [
  { image: "/assets/images/sports/brand-hsbc.webp", alt: "HSBC" },
  { image: "/assets/images/sports/brand-kfc.webp", alt: "KFC" },
  { image: "/assets/images/sports/brand-my11circle.webp", alt: "My11Circle" },
  { image: "/assets/images/sports/brand-probo.webp", alt: "Probo" },
];

const row2 = [
  { image: "/assets/images/sports/brand-saudi.webp", alt: "Saudi Tourism" },
  { image: "/assets/images/sports/brand-westernunion.webp", alt: "Western Union" },
  { image: "/assets/images/sports/brand-dalmia.webp", alt: "Dalmia Bharat" },
  { image: "/assets/images/sports/brand-extra.webp", alt: "Extra" },
];

const row3 = [
  { image: "/assets/images/sports/brand-my11circle.webp", alt: "My11Circle" },
  { image: "/assets/images/sports/brand-hsbc.webp", alt: "HSBC" },
  { image: "/assets/images/sports/brand-kfc.webp", alt: "KFC" },
  { image: "/assets/images/sports/brand-probo.webp", alt: "Probo" },
];

const brandRows = [row1, row2, row3];

export function BrandsSection() {
  return (
    <CommonBrandsSection
      sectionClassName="bg-[#010502] py-16 md:py-24 overflow-hidden w-full relative"
      containerClassName="w-full md:container px-5 md:px-10 mx-auto max-w-[1240px]"
      layoutClassName="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16"
      leftColClassName="flex flex-col items-start shrink-0 lg:max-w-[450px] text-left relative z-10"
      showSparkle={false}
      titleClassName="font-body font-medium text-[35px] sm:text-[42px] md:text-[54px] leading-[1.15] tracking-[-1.9px] text-white words text-left lg:whitespace-nowrap reveal"
      titleNormalText="Brands we "
      titleSerifText="grew with"
      serifClassName="font-serif italic text-[#1ff9b8] ml-2"
      buttonType="sports"
      buttonText="Let’s grow together"
      buttonHref={CALENDLY}
      rightColClassName="relative flex-1 flex flex-col gap-4 overflow-hidden w-full max-w-full z-10"
      showFadeOverlays={true}
      fadeOverlayColor="#010502"
      rowWrapperClass="flex gap-4 pr-4"
      rows={brandRows}
      renderTile={(tile, _, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-[#0a0f14]/60 hover:bg-[#111922]/80 transition-all duration-300 px-6 py-4 w-[150px] md:w-[170px] h-[64px] shrink-0 select-none"
        >
          <img
            src={tile.image}
            alt={tile.alt}
            className="max-h-[34px] max-w-[120px] w-auto object-contain brightness-95 opacity-90"
          />
        </div>
      )}
    />
  );
}

export default BrandsSection;
