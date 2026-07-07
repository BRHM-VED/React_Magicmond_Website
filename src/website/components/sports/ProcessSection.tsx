import { spSteps } from '../../../data/sports/sports.data';
import { CALENDLY } from '../../../utils/constants/constants';
import { SportsButton } from '../../../common/button/SportsButton';

export function ProcessSection() {
  return (
    <section className="bg-[#010502] py-20 md:py-28 px-5 md:px-10 text-center overflow-hidden w-full relative">
      {/* Stadium Background Graphic Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/assets/images/sports/stadiusBg.png"
          className="w-full h-full object-cover opacity-90"
          alt=""
        />
      </div>

      <div className="w-full md:container mx-auto px-0 max-w-[1240px] relative z-10">
        <h2 className="font-body font-medium text-[28px] sm:text-[36px] md:text-[54px] leading-[1.25] md:leading-[1.15] tracking-[-1.9px] text-white text-center max-w-[900px] mx-auto reveal">
          Here’s how it <span className="font-serif italic text-[#1ff9b8]">works</span>
        </h2>

        <p className="text-[#aaaaaa] font-head font-normal text-[15px] md:text-[16.6px] leading-[1.65] text-center max-w-[620px] mx-auto mt-6 reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
          Grow smarter with strategy, design, and tech. <br className="hidden md:block" />
          Scale your brand without limits.
        </p>

        <div className="mt-8 reveal flex justify-center w-full px-5 md:px-0" style={{ '--d': '.15s' } as React.CSSProperties}>
          <SportsButton variant="small" href={CALENDLY} className="w-full md:w-auto">
            Transform my business
          </SportsButton>
        </div>

        {/* Process Cards Grid / Horizontal swipeable list on Mobile (InfraEdge responsive pattern) */}
        <div className="w-full flex items-stretch overflow-x-auto gap-6 mt-12 md:grid md:grid-cols-3 scrollbar-none pb-4 snap-x snap-mandatory px-5 md:px-0 max-w-[1240px] mx-auto text-left relative z-10">
          {spSteps.map((s, i) => (
            <div key={s.badge} className="flex w-[280px] sm:w-[320px] md:w-full shrink-0 snap-start">
              <article
                className="relative border border-white/[0.07] p-6 md:p-8 rounded-[20px] transition-all duration-300 min-h-[275px] backdrop-blur-md flex flex-col justify-start items-start w-full"
                style={{
                  backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(13, 8, 23, 0.25) 100%)'
                } as React.CSSProperties}
              >
                {/* Decorative Neon Top Border Glow Segments */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[170px] h-[1px] bg-gradient-to-r from-transparent via-[#0055ff]/35 to-transparent z-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[1px] bg-gradient-to-r from-transparent via-[#22dfa0] to-transparent z-10" />

                {/* Step-specific Transparent Blue-Glowing Icon */}
                <div className="w-[44px] h-[44px] rounded-full bg-gradient-to-b from-[#0055ff]/15 to-white/[0.03] shadow-[0_4px_24px_rgba(0,85,255,0.25)] flex items-center justify-center border border-white/10 shrink-0">
                  {i === 0 && (
                    <svg className="w-5 h-5 text-[#0055ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-5 h-5 text-[#0055ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-5 h-5 text-[#0055ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-1">
                  <span className="text-[#7ebaff] font-body font-medium text-[13px] md:text-[16px] tracking-[-0.2px]">{s.badge}</span>
                  <h4 className="text-white font-body font-semibold text-[18px] md:text-[22px] tracking-[-0.5px] leading-[1.2]">{s.title}</h4>
                </div>

                <p className="text-white/75 font-body font-normal text-[12px] leading-[20px] md:text-[15px] md:leading-[26px] tracking-[-0.2px] mt-4">{s.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
