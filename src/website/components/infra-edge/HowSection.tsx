import { ieSteps } from '../../../data/infraEdge/infraEdge';
import { CALENDLY } from '../../../utils/constants/constants';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';
import { IeStepCard } from './IeStepCard';

export function HowSection() {
  return (
    <section id="process" className="relative pt-10 pb-16 md:py-[120px] text-center bg-[#0e081d] overflow-hidden">

      {/* Left bottom corner glow */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(30,78,216,0.22),transparent_70%)] filter blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1425px] mx-auto px-5 md:px-10 flex flex-col items-start md:items-center text-left md:text-center">

        {/* Heading */}
        <h2 className="font-head font-normal text-[30px] xs:text-[35px] sm:text-[42px] md:text-[54px] text-white tracking-[-1px] md:tracking-[-1.5px] leading-[1.2] md:leading-[1.15]">
          Here's how it{' '}
          <span className="font-serif italic text-[#7db9ff]">works</span>
        </h2>

        {/* Sub */}
        <p className="mt-4 max-w-[500px] text-[11.5px] leading-[18px] xs:text-[12.5px] xs:leading-[20px] sm:text-[15.5px] sm:leading-[24px] md:text-[16px] md:leading-[26px] text-white/60">
          Grow smarter with strategy, design, and tech.<br />
          Scale your brand without limits.
        </p>

        {/* CTA */}
        <div className="relative z-10 mt-7 w-full md:w-auto flex justify-start md:justify-center">
          <InfraEdgeButton variant="small" href={CALENDLY} className="w-full md:w-auto">
            Transform my business
          </InfraEdgeButton>
        </div>

        {/* Steps Horizontal scrollview on mobile, standard 3-column grid on desktop */}
        <div className="w-full flex items-stretch overflow-x-auto gap-6 mt-12 md:grid md:grid-cols-3 scrollbar-none pb-4 -mr-5 md:mr-0 md:mx-0 snap-x snap-mandatory">
          {ieSteps.map((s) => (
            <div key={s.badge} className="flex w-[280px] sm:w-[320px] md:w-full shrink-0 snap-start">
              <IeStepCard
                badge={s.badge}
                title={s.title}
                desc={s.desc}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowSection;
