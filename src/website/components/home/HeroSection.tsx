import { LightRays } from '../../../common/LightRays';
import { CALENDLY } from '../../../utils/constants/constants';
import { Button } from '../../../common/button/homeButton';
import { FONTS } from '../../../utils/constants/fonts';

export function HeroSection() {
  return (
    <section className="relative pt-[156px] px-10 pb-[90px] text-center overflow-hidden">
      <img className="absolute top-0 left-0 w-full h-[619px] object-cover object-top pointer-events-none" src="/assets/images/common/hero-bg-stars.webp" alt="" />
      <LightRays theme="purple" className="absolute top-0 left-0 w-full h-[400px] pointer-events-none" />
      <div className="relative">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-3 reveal">
          <span className={`${FONTS.head} font-bold text-[11px] text-[#a7adbe] whitespace-nowrap`}>As seen on</span>
          <img src="/assets/images/home/logo-yourstory.webp" alt="YourStory" className="h-4 md:h-[21px] w-auto" />
          <img src="/assets/images/home/logo-timesofindia.webp" alt="The Times of India" className="h-4 md:h-[21px] w-auto" />
          <img src="/assets/images/home/logo-hindustantimes.webp" alt="Hindustan Times" className="h-[8px] md:h-[11px] w-auto brightness-0 invert opacity-90" />
        </div>
        <h1 className={`mt-6 md:mt-8 xl:mt-[34px] ${FONTS.head} font-medium text-[38px] leading-[1.15] tracking-[-0.8px] md:text-[54px] md:leading-[1.1] md:tracking-[-1.2px] lg:text-[93px] xl:text-[116px] xl:leading-[1] xl:tracking-[-2px] text-white words`}>
          <span className="w-src">Your digital</span><br />
          <span className="w-src">growth <span className="text-[#c055e5]">partner</span></span>
        </h1>
        <p className={`text-[#aaaaaa] font-head font-normal text-[13px] md:text-[16.6px] leading-[1.7] max-w-[560px] mx-auto mt-6 reveal`} style={{ '--d': '.15s' } as React.CSSProperties}>
          We transform your traditional business into a digitally strong brand, enabling a 360° growth ecosystem to thrive in the new era.
        </p>
        <div className="mt-10 reveal flex flex-row items-center justify-center gap-4 sm:gap-6" style={{ '--d': '.3s' } as React.CSSProperties}>
          <Button
            variant="large"
            href={CALENDLY}
            className="!px-5 sm:!px-6 whitespace-nowrap"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
