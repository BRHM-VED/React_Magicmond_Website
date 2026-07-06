import { ieSteps } from '../../../data/infra-edge.data';
import { CALENDLY } from '../../../utils/constants/constants';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';
import { IeStepCard } from './IeStepCard';

export function HowSection() {
  return (
    <section className="relative py-20 md:py-[120px] text-center bg-[#0e081d] overflow-hidden">

      {/* Bottom radial glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[240px] pointer-events-none"
        style={{ background: 'radial-gradient(60% 200px at 50% 100%, rgba(30,78,216,0.45), transparent 75%)' }} />

      <div className="relative z-10 w-full max-w-[1425px] mx-auto px-5 md:px-10 flex flex-col items-center">

        {/* Heading */}
        <h2 className="font-head font-normal text-[22px] xs:text-[25px] sm:text-[36px] md:text-[54px] text-white tracking-[-1px] md:tracking-[-1.5px] leading-[1.2] md:leading-[1.15]">
          Here's how it{' '}
          <span className="font-serif italic text-[#7db9ff]">works</span>
        </h2>

        {/* Sub */}
        <p className="mt-4 mx-auto max-w-[500px] text-[13px] leading-[20px] xs:text-[14px] md:text-[16px] md:leading-[26px] text-white/60">
          From insights to execution, we craft solutions that drive real results.
        </p>

        {/* CTA */}
        <div className="relative z-10 mt-7 w-full md:w-auto px-5 md:px-0 flex justify-center">
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
