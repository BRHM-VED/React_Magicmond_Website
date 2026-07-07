import React from 'react';
import { Workflow, MousePointerClick, Rocket } from 'lucide-react';
import { processSteps } from '../../../data/home.data';
import { FONTS } from '../../../utils/constants/fonts';
import { StepCard } from '../../../common/StepCard';

/* ── Static icon & tag data ── */
const STEP_ICONS: React.ReactNode[] = [
  <Workflow key="1" strokeWidth={1.4} size={20} color="#fff" />,
  <MousePointerClick key="2" strokeWidth={1.4} size={20} color="#fff" />,
  <Rocket key="3" strokeWidth={1.4} size={20} color="#fff" />,
];

const STEP_TAGS: string[][] = [
  ['Discovery Call', 'Expert-Led Blueprint'],
  ['Opportunity Mapping', 'Competitive Benchmark'],
  [],
];

export function ProcessSection() {
  return (
    <section className="relative bg-[#0d0817] py-16 md:py-[100px] overflow-x-clip" id="process">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1260px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1260px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="container px-5 md:px-10 mx-auto max-w-[1200px]">
        {/* ── Two-Column Grid: left has heading + cards, right has sticky visual wand ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 lg:gap-20">

          {/* Left Column: Heading + Step cards */}
          <div>
            {/* Section heading */}
            <div className="relative mb-11 lg:mb-16 max-w-[500px]">
              {/* Sparkle icon - white color */}
              <img
                className="absolute top-[-35px] left-[-8px] w-[39px] h-[52px] select-none pointer-events-none brightness-0 invert"
                src="/assets/icons/sparkle.svg"
                alt=""
              />
              <h2
                className={`${FONTS.head} font-normal text-[40px] md:text-[52px] leading-[1.25] tracking-[-1.9px] text-white reveal`}
              >
                How magicmond<br />
                makes brand{' '}
                <span className={`${FONTS.serif} italic text-[#e0b6ff]`}>magic</span>
              </h2>
              <p
                className={`${FONTS.body} font-normal text-[15.2px] leading-[1.63] text-white/60 tracking-[-0.19px] mt-7 max-w-[409px] reveal`}
                style={{ '--d': '.1s' } as React.CSSProperties}
              >
                From in‑depth strategy to growth‑driven scaling,{' '}
                <br className="hidden sm:inline" />
                we transform your vision into a scalable brand.
              </p>
            </div>

            {/* Step cards */}
            <div className="space-y-[49px] relative z-10">
              {processSteps.map((step, i) => (
                <StepCard
                  key={step.badge}
                  icon={STEP_ICONS[i]}
                  badge={step.badge}
                  title={step.title}
                  description={step.description}
                  tags={STEP_TAGS[i]}
                  isLast={i === processSteps.length - 1}
                  delay={`${i * 0.1}s`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Wand visual panel */}
          <aside className="hidden lg:block lg:-mt-[00px]">
            <div className="sticky top-[0px]">
              <div
                className="relative w-full lg:w-[345px] h-[250px] lg:h-[309px] lg:ml-auto rounded-[28px] overflow-hidden border border-white/[0.07] flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #2a1240 0%, #12081f 55%, #0b0516 100%)',
                }}
              >
                {/* Ambient glow effect inside card */}
                <div className="absolute inset-0 pointer-events-none rounded-[28px] shadow-[inset_0px_9.5px_9.5px_-0.95px_rgba(143,57,133,0.15)]" />

                {/* Wand logo — 62% width centered */}
                <img
                  src="/assets/icons/wand-big.svg"
                  alt="MagicMond wand"
                  className="w-[62%] h-auto block"
                />

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0817]/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
