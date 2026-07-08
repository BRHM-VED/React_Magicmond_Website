import { services } from '../../../data/home/homeData';
import { CALENDLY } from '../../../utils/constants/constants';
import { Button } from '../../../common/button/homeButton';
import { ServiceCard } from '../../../common/ServiceCard';

const serviceIds = [
  'brand-identity',
  'website-design',
  'content-marketing',
  'creative-strategy',
  'growth-marketing',
  'erp-solutions'
];

export function ServicesSection() {
  return (
    <section className="relative px-5 md:px-10 pt-[60px] md:pt-20 text-center overflow-x-clip" id="service">

      {/* Header Container flanking the wings */}
      <div className="relative max-w-[1425px] w-full mx-auto pb-10">

        {/* Left wing graphic (Desktop / Mobile positions from Figma) */}
        <img
          src="/assets/images/home/wing-left.svg"
          alt=""
          className="pointer-events-none absolute left-[-20px] top-[-80px] w-[150px] h-[75px] md:left-[-40px] md:w-[240px] md:h-[100px] lg:left-[-83px] lg:top-[146px] lg:bottom-auto lg:w-[567px] lg:h-[237px] object-contain opacity-60 lg:opacity-100 select-none z-0"
        />

        {/* Right wing graphic (Desktop / Mobile positions from Figma) */}
        <img
          src="/assets/images/home/wing-right.svg"
          alt=""
          className="pointer-events-none absolute right-[-20px] top-[-80px] w-[150px] h-[75px] md:right-[-40px] md:w-[240px] md:h-[100px] lg:right-[-83px] lg:top-[146px] lg:bottom-auto lg:w-[567px] lg:h-[237px] object-contain opacity-60 lg:opacity-100 select-none z-0"
        />

        {/* Section title & description */}
        <h2 className="font-head font-normal text-[22px] sm:text-[32px] md:text-[52px] leading-[1.25] md:leading-[65px] tracking-[-1px] md:tracking-[-1.9px] text-white words relative z-10">
          <span className="w-src whitespace-nowrap sm:whitespace-normal">Fueling growth through <span className="font-serif italic text-[#e0b6ff]">creativity</span>,</span><br />
          <span className="w-src whitespace-nowrap sm:whitespace-normal"><span className="font-serif italic text-[#e0b6ff]">strategy</span> &amp; <span className="font-serif italic text-[#e0b6ff]">technology</span></span>
        </h2>

        <p className="mt-5 mx-auto max-w-[460px] font-body text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] tracking-[-0.2px] text-white/60 reveal relative z-10">
          Grow smarter with strategy, design, and tech.<br />
          Scale your brand without limits.
        </p>

        <div className="mt-8 mb-10 reveal relative z-10 w-full flex justify-center md:px-0" style={{ '--d': '.15s' } as React.CSSProperties}>
          <Button
            variant="small"
            href={CALENDLY}
            className="w-full md:w-auto border border-white/20 shadow-[0_0_20px_rgba(105,32,131,0.5)] hover:shadow-[0_0_30px_rgba(192,85,229,0.8)] transition-shadow duration-300"
          >
            Transform my business
          </Button>
        </div>

      </div>

      {/* Stacked service cards */}
      <div className="relative max-w-[1185px] mx-auto mt-[50px] md:mt-[70px] z-10">
        {services.map((svc, i) => (
          <ServiceCard
            key={svc.title}
            id={serviceIds[i]}
            icon={svc.icon}
            title={svc.title}
            subtitle={svc.subtitle}
            description={svc.description}
            image={svc.image}
            imageAlt={svc.imageAlt}
            badge={svc.badge}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
