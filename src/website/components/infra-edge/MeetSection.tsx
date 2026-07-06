import { COMPANY_NAME } from '../../../utils/constants/constants';

const MEET_QUOTE = '\u201cWe don\u2019t provide services, we build partnerships that deliver business growth.\u201d';

export function MeetSection() {
  return (
    <section className="relative bg-[#0d0817] overflow-hidden w-full">

      {/* ── MOBILE layout (block, flex-col) ── hidden on md+ */}
      <div className="flex flex-col md:hidden">

        {/* Top zone: hands + heading side-by-side */}
        <div className="relative w-full h-[120px] flex items-center justify-center overflow-hidden">

          {/* Left Hand */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[140px] sm:w-[180px] pointer-events-none select-none z-0" aria-hidden="true">
            <img src="/assets/images/infraedge/leftHand.png" className="w-full h-auto object-contain" alt="" />
          </div>

          {/* Right Hand */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[140px] sm:w-[180px] pointer-events-none select-none z-0" aria-hidden="true">
            <img src="/assets/images/infraedge/rightHand.png" className="w-full h-auto object-contain" alt="" />
          </div>

          {/* Heading — centered between hands */}
          <div className="relative z-10 flex flex-col items-center text-center px-[150px] sm:px-[185px]">
            <h2 className="font-head font-semibold text-white leading-[1.1] tracking-[-1px]">
              <span className="block text-[32px] sm:text-[40px]">Meet</span>
              <span className="block font-serif italic text-[#7ebaff] text-[32px] sm:text-[40px]">{COMPANY_NAME}</span>
            </h2>
          </div>

        </div>

        {/* Bottom zone: quote — below the hands, no overlap */}
        <div className="px-6 pt-3 pb-8 flex items-center justify-center">
          <p className="font-inter font-normal text-[15px] sm:text-[17px] leading-[1.65] text-white/60 tracking-[-0.1px] text-center max-w-[420px]">
            {MEET_QUOTE}
          </p>
        </div>

      </div>

      {/* ── DESKTOP layout (unchanged) ── hidden below md */}
      <div className="relative hidden md:flex w-full h-[480px] lg:h-[560px] items-center">

        {/* Left Hand */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] pointer-events-none select-none z-0" aria-hidden="true">
          <img src="/assets/images/infraedge/leftHand.png" className="w-full h-auto object-contain" alt="" />
        </div>

        {/* Right Hand */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] pointer-events-none select-none z-0" aria-hidden="true">
          <img src="/assets/images/infraedge/rightHand.png" className="w-full h-auto object-contain" alt="" />
        </div>

        {/* Center Text Block */}
        <div className="relative z-10 w-full flex flex-col items-center text-center px-[300px] lg:px-[380px] gap-6">
          <h2 className="font-head font-semibold text-[62px] lg:text-[80px] text-white tracking-[-2.5px] leading-[1.1] whitespace-nowrap">
            Meet{' '}
            <span className="font-serif italic text-[#7ebaff]">{COMPANY_NAME}</span>
          </h2>
          <p className="font-inter font-normal text-[18px] lg:text-[22px] leading-[1.6] text-white/60 tracking-[-0.2px] max-w-[380px] lg:max-w-[440px]">
            {MEET_QUOTE}
          </p>
        </div>

      </div>

    </section>
  );
}

export default MeetSection;
