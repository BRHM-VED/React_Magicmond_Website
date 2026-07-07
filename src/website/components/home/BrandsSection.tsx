import { CommonBrandsSection } from '../../../common/CommonBrandsSection';
import { brandRows } from '../../../data/home.data';
import { FONTS } from '../../../utils/constants/fonts';
import { CALENDLY } from '../../../utils/constants/constants';

export function BrandsSection() {
  return (
    <CommonBrandsSection
      sectionClassName="relative z-20 bg-[#0d0817] py-16 md:py-[60px] pb-12 md:pb-[90px] overflow-hidden"
      containerClassName="container px-5 md:px-10 mx-auto max-w-[1360px]"
      layoutClassName="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-[100px] items-center lg:items-end"
      leftColClassName="flex flex-col items-start text-left"
      showSparkle={true}
      sparkleClassName="absolute left-[-15px] lg:left-[-25px] top-[-10px] lg:top-[-18px] w-8 lg:w-[50px] select-none pointer-events-none brightness-0 invert"
      titleClassName={`${FONTS.head} relative font-normal text-[35px] md:text-[54px] leading-tight md:leading-[1.1] tracking-[-1.9px] text-white lg:whitespace-nowrap reveal`}
      titleNormalText="Brands we "
      titleSerifText="grew with"
      serifClassName={`${FONTS.serif} italic text-[#e0b6ff]`}
      buttonType="home"
      buttonText="LET’S GROW TOGETHER"
      buttonHref={CALENDLY}
      buttonClassName="!px-5 border border-white/20 shadow-[0_0_20px_rgba(105,32,131,0.5)] hover:shadow-[0_0_30px_rgba(192,85,229,0.8)] transition-all duration-300"
      rightColClassName="flex flex-col gap-[18px] w-full min-w-0 overflow-hidden"
      marqueeMaskStyle={{
        maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)'
      }}
      rows={brandRows}
      renderTile={(tile, _, i) =>
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
      }
    />
  );
}

export default BrandsSection;
