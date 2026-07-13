import { LightRays } from '../../../common/LightRays';

export function HeroSection() {
  return (
    <section className="relative pt-[120px] md:pt-[150px] px-0 pb-0 text-center overflow-hidden bg-[#010502]">
      {/* Background elements */}
      <img
        className="absolute top-0 left-0 w-full h-[619px] object-cover object-top opacity-55 pointer-events-none z-0"
        src="/assets/images/common/hero-bg-stars.webp"
        alt=""
      />
      <LightRays theme="green" className="absolute top-0 left-0 w-full h-[640px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1025px] mx-auto px-5 md:px-0 flex flex-col items-center">
        <h1 className="font-head font-medium text-[24px] sm:text-[34px] md:text-[48px] lg:text-[58px] xl:text-[72px] leading-[1.2] md:leading-[1.1] lg:leading-[1.05] tracking-[-1px] lg:tracking-[-1.66px] text-white words">
          <span className="w-src sm:whitespace-nowrap">Connecting ambitious brands</span><br className="hidden sm:inline" />
          <span className="w-src sm:whitespace-nowrap">to the <span className="font-serif italic text-[#00ac79]">world of cricket</span></span>
        </h1>

        <p className="text-[#aaaaaa] font-head font-normal text-[14px] md:text-[16.6px] leading-[1.7] max-w-[650px] mx-auto mt-6 reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          From global tournaments to digital cricket platforms — we help brands unlock visibility, engagement, and trust without breaking the bank.
        </p>


      </div>

      <img
        className="relative block w-full max-w-[1440px] mx-auto mt-11 md:mt-12 px-0 md:px-10 reveal z-10"
        style={{ '--d': '.4s' } as React.CSSProperties}
        src="/assets/images/sports/hero-stadium.webp"
        alt="Cricket stadium"
      />
    </section>
  );
}

export default HeroSection;
