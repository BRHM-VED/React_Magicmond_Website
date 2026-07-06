import { CALENDLY } from '../../../utils/constants/constants';

export function CtaSection() {
  return (
    <section className="py-[60px_0_90px] md:py-20 bg-[#0e081d]" id="cta">
      <div className="w-full max-w-[1425px] mx-auto px-5 md:px-10">

        {/* Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] px-6 md:px-10 py-20 md:py-24 text-center"
          style={{ background: 'radial-gradient(60% 340px at 50% 0%, rgba(38,92,240,0.65), transparent 75%), #060a16' }}>

          {/* Dots pattern overlay */}
          <img
            src="/assets/images/common/cta-dots-pattern.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="font-head font-normal text-[32px] sm:text-[42px] md:text-[54px] text-white tracking-[-1.9px] leading-[1.2]">
              Take your business to
              <span className="block font-serif italic text-[#7db9ff]">new heights!</span>
            </h2>

            <p className="mt-6 mx-auto max-w-[460px] text-[16px] leading-[26px] text-white/60">
              More leads. More sales. More growth. RealCons makes it happen for real traditional businesses.
            </p>

            <div className="mt-9">
              <a
                href={CALENDLY}
                className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer"
              >
                Transform my business
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CtaSection;
