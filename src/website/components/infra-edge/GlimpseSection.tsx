import { useEffect, useRef } from 'react';
import { ieGallery } from '../../../data/infraEdge/infraEdge';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';
import { CALENDLY } from '../../../utils/constants/constants';

// Split gallery into 3 columns for the masonry marquee
const col1 = ieGallery.filter((_, i) => i % 3 === 0);
const col2 = ieGallery.filter((_, i) => i % 3 === 1);
const col3 = ieGallery.filter((_, i) => i % 3 === 2);

function MarqueeCol({
  images,
  direction = 'up',
}: {
  images: string[];
  direction?: 'up' | 'down';
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf: number;
    let pos = direction === 'up' ? 0 : -(el.scrollHeight / 2);

    const step = () => {
      if (!el) return;
      pos += direction === 'up' ? -0.5 : 0.5;
      const half = el.scrollHeight / 2;
      if (direction === 'up' && pos <= -half) pos = 0;
      if (direction === 'down' && pos >= 0) pos = -half;
      el.style.transform = `translateY(${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden flex-1 rounded-2xl" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15px, black calc(100% - 15px), transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15px, black calc(100% - 15px), transparent)' }}>
      <div ref={trackRef} className="flex flex-col gap-3 will-change-transform">
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i < images.length ? 'Work sample' : ''}
            className="w-full rounded-xl object-cover aspect-[4/3]"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export function GlimpseSection() {
  return (
    <section className="relative bg-[#0d0817] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1425px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 md:gap-6 mb-12 md:mb-16 px-5 md:px-10">

          {/* Heading */}
          <h2 className="font-head font-normal text-[24px] xs:text-[26px] sm:text-[36px] md:text-[52px] text-white tracking-[-1px] md:tracking-[-1.9px] leading-[1.2] md:leading-[1.25]">
            Glimpse of{' '}
            <span className="font-serif italic text-[#92b7ff]">creativity</span>
            {', '}
            <span className="font-serif italic text-[#92b7ff]">strategy</span>
            {' & '}
            <br />
            <span className="font-serif italic text-[#92b7ff]">technology </span>
            in one hood
          </h2>

          {/* Description */}
          <p className="font-inter font-normal text-[13.5px] xs:text-[14.5px] sm:text-[15px] md:text-[16px] text-white/60 tracking-[-0.2px] leading-[1.6] max-w-[320px] sm:max-w-[360px] md:max-w-[420px]">
            Grow smarter with marketing, design, and tech.<br />
            Scale your brand without limits.
          </p>

          {/* CTA */}
          <InfraEdgeButton variant="small" href={CALENDLY} className="w-full md:w-auto">
            Let's grow my business
          </InfraEdgeButton>

        </div>

        {/* Gallery — 3-column animated marquee (desktop) */}
        <div className="hidden md:flex gap-3 h-[700px] lg:h-[800px] px-5 md:px-10">
          <MarqueeCol images={col1} direction="up" />
          <MarqueeCol images={col2} direction="down" />
          <MarqueeCol images={col3} direction="up" />
        </div>

        {/* Mobile: 2 rows of horizontal marquee with left padding only */}
        <div className="flex flex-col gap-4 md:hidden w-full overflow-hidden pl-5" style={{ maskImage: 'linear-gradient(to right, black, black 75%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black, black 75%, transparent 100%)' }}>

          {/* Row 1: Leftward marquee */}
          <div className="marquee">
            <div className="marquee__track flex gap-4 w-max">
              {[...ieGallery.slice(0, 6), ...ieGallery.slice(0, 6)].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-[180px] h-[135px] object-cover rounded-xl shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Row 2: Rightward marquee */}
          <div className="marquee marquee--reverse">
            <div className="marquee__track flex gap-4 w-max">
              {[...ieGallery.slice(5), ...ieGallery.slice(5)].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-[180px] h-[135px] object-cover rounded-xl shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default GlimpseSection;
