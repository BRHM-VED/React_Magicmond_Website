import { Check } from 'lucide-react';
import { CALENDLY } from '../../../utils/constants/constants';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';

const PROBLEMS = [
  'Poor online presence',
  'No premium brand positioning',
  'No online lead generation',
  'No whatsapp marketing',
];

export function ProblemSection() {
  return (
    <section className="relative pt-20 pb-0 md:pt-28 md:pb-0 overflow-hidden bg-[#0d0817]">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/assets/images/infraedge/problem-section.webp"
          className="w-full h-full object-cover select-none"
          alt=""
        />
      </div>

      <div className="relative w-full md:container mx-auto px-0 md:px-10 max-w-[1240px] z-10">
        {/* Title Group */}
        <div className="text-left md:text-center flex flex-col items-start md:items-center px-5 md:px-0">
          <h2 className="font-head font-semibold text-[32px] md:text-[52px] leading-tight md:leading-[1.15] text-white tracking-tight">
            No Digital Team = Limited <span className="font-serif italic text-[#7ebaff]">business growth</span>
          </h2>
          <p className="mt-4 font-inter text-[14px] md:text-[16px] leading-[1.6] text-white/60 max-w-[440px]">
            Grow smarter with strategy, design, and tech.<br />Scale your brand without limits.
          </p>
          <div className="mt-8 w-full md:w-auto">
            <InfraEdgeButton className="w-full md:w-auto" variant="small" href={CALENDLY}>
              Transform my business
            </InfraEdgeButton>
          </div>
        </div>

        {/* Desktop View Layout (visible on desktop only) */}
        <div className="hidden md:block relative w-full max-w-[1080px] mx-auto h-[333px] mt-16">

          {/* Subtle Glow behind the card box */}
          <div className="absolute left-[10%] top-[10%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,85,255,0.18),transparent_60%)] filter blur-3xl pointer-events-none z-0" />

          {/* Blue gradient card */}
          <div className="w-full md:w-[628px] bg-gradient-to-b from-[#0055ff] to-[#18071f] rounded-none md:rounded-t-[20px] border-y md:border border-white/10 px-6 py-10 md:px-16 md:py-0 md:h-[333px] flex flex-col justify-center shadow-2xl relative z-10 md:absolute md:left-[80px] md:bottom-0">
            <ul className="flex flex-col gap-6 md:gap-[24px]">
              {PROBLEMS.map((t) => (
                <li key={t} className="flex items-center gap-[14px] text-white font-inter font-medium text-[16px] md:text-[22px] leading-[1.4]">
                  {/* Premium checkmark with purple-to-pink gradient border */}
                  <div className="relative w-[34px] h-[34px] rounded-[10px] bg-gradient-to-b from-[#692083] to-[#d511fd] p-[1.25px] shrink-0">
                    <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                      <Check size={16} strokeWidth={3} className="text-[#692083]" />
                    </div>
                  </div>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Radial Glow specifically behind the skyscraper graphic on desktop to make it pop */}
          <div className="hidden md:block absolute left-[580px] bottom-[-20px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,85,255,0.35),rgba(105,32,131,0.15),transparent_70%)] filter blur-2xl pointer-events-none z-0" />

          {/* Desktop Skyscraper Graphic (overlaps bottom/right of blue box) */}
          <div className="hidden md:block absolute left-[600px] bottom-[-24px] w-[449px] h-[449px] pointer-events-none z-0">
            <img
              src="/assets/images/infraedge/business-growth.webp"
              className="w-full h-full object-contain object-bottom"
              alt="360° digital growth"
            />
          </div>

        </div>

        {/* Mobile View Layout: Skyscraper Image on top, horizontal scrolling cards below */}
        <div className="block md:hidden w-full mt-10 pb-2">
          {/* Mobile Skyscraper Graphic */}
          <div className="w-full max-w-[340px] mx-auto pointer-events-none mb-4 px-5">
            <img
              src="/assets/images/infraedge/business-growth.webp"
              className="w-full h-auto object-contain"
              alt="360° digital growth"
            />
          </div>

          {/* Infinite Horizontal Auto-Scrolling Text Ticker */}
          <div className="overflow-hidden w-full pt-0 pb-4 pl-5 select-none relative z-10">
            <style dangerouslySetInnerHTML={{
              __html: `
              @keyframes problemMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-problem-marquee {
                display: flex;
                width: max-content;
                animation: problemMarquee 25s linear infinite;
              }
            `}} />

            <div className="animate-problem-marquee flex gap-8 items-center">
              {/* Set 1 */}
              {PROBLEMS.map((t, idx) => (
                <div key={`set1-${idx}`} className="flex items-center gap-8 shrink-0">
                  <span className="text-white font-head font-medium text-[20px] tracking-tight">
                    {t}
                  </span>
                  <span className="text-[#0055ff] font-bold text-[24px] select-none">•</span>
                </div>
              ))}
              {/* Set 2 (for seamless loop) */}
              {PROBLEMS.map((t, idx) => (
                <div key={`set2-${idx}`} className="flex items-center gap-8 shrink-0">
                  <span className="text-white font-head font-medium text-[20px] tracking-tight">
                    {t}
                  </span>
                  <span className="text-[#0055ff] font-bold text-[24px] select-none">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProblemSection;
