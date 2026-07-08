import { useRef, useEffect } from 'react';
import { ieServices } from '../../../data/infraEdge/infraEdge';
import { CALENDLY } from '../../../utils/constants/constants';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';
import { IeServiceCard } from './IeServiceCard';

export function ServicesSection() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el1 = scrollRef1.current;
    const el2 = scrollRef2.current;
    if (!el1 || !el2) return;

    // Initialize Row 2 scroll position to the rightmost edge on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        el2.scrollLeft = el2.scrollWidth - el2.clientWidth;
      }, 50);
    }

    const handleAutoScroll = () => {
      if (window.innerWidth >= 768) return;

      // Row 1: Scroll right (increasing scrollLeft)
      const cardWidth1 = el1.firstElementChild ? (el1.firstElementChild as HTMLElement).offsetWidth + 24 : 304;
      const maxScroll1 = el1.scrollWidth - el1.clientWidth;
      let nextScroll1 = el1.scrollLeft + cardWidth1;
      if (nextScroll1 > maxScroll1 + 10) {
        nextScroll1 = 0;
      }
      el1.scrollTo({ left: nextScroll1, behavior: 'smooth' });

      // Row 2: Scroll left (decreasing scrollLeft)
      const cardWidth2 = el2.firstElementChild ? (el2.firstElementChild as HTMLElement).offsetWidth + 24 : 304;
      const maxScroll2 = el2.scrollWidth - el2.clientWidth;
      let nextScroll2 = el2.scrollLeft - cardWidth2;
      if (nextScroll2 < -10) {
        nextScroll2 = maxScroll2;
      }
      el2.scrollTo({ left: nextScroll2, behavior: 'smooth' });
    };

    const interval = setInterval(handleAutoScroll, 4000); // Auto scroll every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="service" className="relative pt-10 pb-12 md:py-28 text-center overflow-hidden bg-[#0e081d]">

      {/* Left Wing (Blue PNG) - Placed directly in section for full viewport width */}
      <div className="absolute left-[-20px] xs:left-[-30px] sm:left-[-40px] lg:left-0 top-[120px] lg:top-[146px] w-[110px] xs:w-[140px] sm:w-[220px] md:w-[300px] lg:w-[567px] lg:h-[237px] pointer-events-none select-none z-0">
        <img
          src="/assets/images/infraedge/infra-edge-left-wings.webp"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Wing (Blue PNG) - Placed directly in section for full viewport width */}
      <div className="absolute right-[-20px] xs:right-[-30px] sm:right-[-40px] lg:right-0 top-[120px] lg:top-[146px] w-[110px] xs:w-[140px] sm:w-[220px] md:w-[300px] lg:w-[567px] lg:h-[237px] pointer-events-none select-none z-0">
        <img
          src="/assets/images/infraedge/infra-edge-right-wings.webp"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content Container - 120px padding on desktop */}
      <div className="relative w-full max-w-[1425px] mx-auto px-5 md:px-[120px] z-10">

        {/* Header Area */}
        <div className="relative w-full flex flex-col items-center justify-center min-h-0 md:min-h-[300px] pt-8 pb-4 md:py-0 mb-0">

          {/* Heading */}
          <h2 className="relative z-10 font-head font-normal text-[19px] xs:text-[22px] sm:text-[36px] md:text-[52px] text-white tracking-[-1px] md:tracking-[-1.9px] leading-[1.2] md:leading-[1.25]">
            Drive real results with<br />
            <span className="font-serif italic text-[#92b7ff]">creativity</span>
            {', '}
            <span className="font-serif italic text-[#92b7ff]">strategy</span>
            {' & '}
            <span className="font-serif italic text-[#92b7ff]">innovation</span>
          </h2>

          {/* Sub */}
          <p className="relative z-10 mt-16 md:mt-5 mx-auto max-w-[500px] md:max-w-[600px] text-[11.5px] leading-[18px] xs:text-[12.5px] xs:leading-[20px] sm:text-[15.5px] sm:leading-[24px] md:text-[16px] md:leading-[26px] text-white/60">
            Backed by proven expertise, we transform businesses into<br /> future-ready brands that thrive in a competitive market.
          </p>

          {/* CTA */}
          <div className="relative z-10 mt-12 md:mt-11 w-full md:w-auto px-6 md:px-0">
            <InfraEdgeButton variant="small" href={CALENDLY} className="w-full md:w-auto">
              Transform my business
            </InfraEdgeButton>
          </div>

        </div>

        {/* ── ROW 1 (Cards 1-3) ── */}
        <div ref={scrollRef1} className="flex items-stretch overflow-x-auto gap-6 mt-6 md:grid md:grid-cols-3 scrollbar-none pb-4 -mr-5 md:mr-0 md:mx-0 snap-x snap-mandatory">
          {ieServices.slice(0, 3).map((s, i) => (
            <div key={s.title} className="flex w-[280px] sm:w-[320px] md:w-full shrink-0 snap-start">
              <IeServiceCard
                icon={s.icon}
                title={s.title}
                tag={s.tag}
                desc={s.desc}
                isRecommended={i === 0}
              />
            </div>
          ))}
        </div>

        {/* ── ROW 2 (Cards 4-6) ── */}
        <div ref={scrollRef2} className="flex items-stretch overflow-x-auto gap-6 mt-4 md:mt-6 md:grid md:grid-cols-3 scrollbar-none pb-4 -mr-5 md:mr-0 md:mx-0 snap-x snap-mandatory">
          {ieServices.slice(3, 6).map((s) => (
            <div key={s.title} className="flex w-[280px] sm:w-[320px] md:w-full shrink-0 snap-start">
              <IeServiceCard
                icon={s.icon}
                title={s.title}
                tag={s.tag}
                desc={s.desc}
                isRecommended={false}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
