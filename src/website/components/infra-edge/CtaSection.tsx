import { CALENDLY } from '../../../utils/constants/constants';
import { LightRays } from '../../../common/LightRays';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';

export function CtaSection() {
  return (
    <section className="py-[60px_0_90px] md:py-20 bg-[#0e081d]" id="cta">
      <div className="w-full max-w-[1425px] mx-auto px-0 md:px-10">

        {/* Card */}
        <div className="relative rounded-none md:rounded-3xl overflow-hidden border-t border-b md:border border-white/[0.06] px-5 md:px-10 py-20 md:py-24 text-center"
          style={{ background: '#060a16' }}>

          {/* Hero star bg */}
          <img
            src="/assets/images/common/hero-bg-stars.webp"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-50 pointer-events-none select-none"
          />

          {/* Hero light rays */}
          <LightRays theme="blue" className="absolute top-0 left-0 w-full h-full pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center w-full">
            <h2 className="font-head font-normal text-[28px] xs:text-[32px] sm:text-[42px] md:text-[54px] text-white tracking-[-1px] md:tracking-[-1.9px] leading-[1.2] w-full text-center whitespace-normal">
              Take your business to
              <span className="block font-serif italic text-[#7db9ff] mt-1 md:mt-2">new heights!</span>
            </h2>

            <p className="mt-6 mx-auto max-w-[420px] text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-white/60 text-center">
              More leads. More sales. More growth. RealCons<br />
              makes it happen for real traditional businesses.
            </p>

            <div className="mt-8 w-full md:w-auto flex justify-center">
              <InfraEdgeButton variant="small" href={CALENDLY} className="px-10 sm:px-12 md:px-14">
                Transform my business
              </InfraEdgeButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CtaSection;
