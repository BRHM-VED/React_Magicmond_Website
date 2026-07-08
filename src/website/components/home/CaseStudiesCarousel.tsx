import { useCarousel } from '../../../hooks/useCarousel';
import { caseSlides } from '../../../data/home/homeData';
import { FONTS } from '../../../utils/constants/fonts';
import { ChevronLeft, ChevronRight, Sparkle } from 'lucide-react';
import type { CaseSlide } from '../../../data/common/types';
import { Button } from '../../../common/button/homeButton';

const ArrowUpSvg = ({ id }: { id: string }) => (
  <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] lg:w-[260px] opacity-35 pointer-events-none z-0" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 20 L180 100 H130 V200 H70 V100 H20 Z" fill={`url(#${id})`} stroke="rgba(193, 86, 230, 0.4)" strokeWidth="3" strokeLinejoin="round" />
    <defs>
      <linearGradient id={id} x1="100" y1="20" x2="100" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C156E6" />
        <stop offset="0.5" stopColor="#6B3080" />
        <stop offset="1" stopColor="#0e081d" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export function CaseStudiesCarousel() {
  const cases = useCarousel(caseSlides.length, 5000);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden max-w-[1240px] mx-auto px-0 md:px-12" id="case-studies">
      <div className="relative overflow-hidden rounded-none md:rounded-[32px] bg-[#0e081d]/50 backdrop-blur-sm">
        <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.2,1)]" style={{ transform: `translateX(-${cases.index * 100}%)` }} onTouchStart={cases.onTouchStart} onTouchEnd={cases.onTouchEnd}>
          {caseSlides.map((slide: CaseSlide, i: number) => (
            <article className="flex-[0_0_100%] grid grid-cols-1 lg:grid-cols-2 items-center gap-[28px] lg:gap-10 px-5 py-7 md:px-16 md:py-14 lg:px-[90px] lg:py-[55px] min-h-0 lg:min-h-[500px]" key={slide.href}>
              {/* Left Column: Info */}
              <div className="relative z-10 flex flex-col items-start text-left">
                {/* Logo and Brand row */}
                <div className="h-[40px] mb-[25px] flex items-center gap-2.5">
                  {slide.logo && <img src={slide.logo} alt={slide.logoText || 'Case study brand'} className="max-h-full w-auto max-w-[180px] object-contain" />}
                  {slide.logoText && <span className={`${slide.logoClass || 'text-white'} font-head font-semibold text-[17px] tracking-tight`}>{slide.logoText}</span>}
                </div>

                {/* Heading */}
                <h2 className={`${FONTS.head} font-medium text-[28px] md:text-[38px] lg:text-[42px] leading-[1.2] tracking-[-1px] text-white`}>
                  {slide.titleLines.map((l: string) => <span key={l} className="block">{l}</span>)}
                  <span className="font-serif italic text-[#e0b6ff] block">{slide.serifLine}</span>
                </h2>

                {/* Description */}
                <p className={`mt-[20px] max-w-[430px] ${FONTS.body} text-[14px] md:text-[16px] leading-[1.55] text-white/85`}>{slide.description}</p>

                {/* Button */}
                <div className="mt-7">
                  <Button variant="small" to={slide.href}>
                    Know more
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Graphic */}
              <div className="relative flex flex-col items-center justify-center min-h-[220px] md:min-h-[300px] lg:min-h-[380px] z-10 select-none">
                <ArrowUpSvg id={`arrgrad${i}`} />

                {/* Star Sparkles */}
                <Sparkle className="absolute left-[20%] top-[25%] text-[#c156e6] opacity-60 animate-pulse pointer-events-none" size={18} />
                <Sparkle className="absolute right-[22%] bottom-[25%] text-[#c156e6] opacity-60 animate-pulse pointer-events-none" size={14} />

                {/* Metric Layout */}
                {slide.metricLabel === "Building a Brand in" ? (
                  /* Slide 1: Label above Metric */
                  <div className="flex flex-col items-center text-center z-10">
                    <div className="font-medium text-[18px] md:text-[22px] leading-[1.2] tracking-[-0.01em] text-[#ff73f0] mb-2">{slide.metricLabel}</div>
                    <div className="font-body font-semibold text-[54px] md:text-[76px] lg:text-[88px] tracking-[-2px] leading-[1] bg-gradient-to-b from-[#ffffff] to-[#e0b6ff] bg-clip-text text-transparent">{slide.metric}</div>
                  </div>
                ) : (
                  /* Other Slides: Metric above Label */
                  <div className="flex flex-col items-center text-center z-10">
                    <div className="font-body font-semibold text-[54px] md:text-[76px] lg:text-[88px] tracking-[-2px] leading-[1] bg-gradient-to-b from-[#e0b6ff] to-[#9747ff] bg-clip-text text-transparent mb-2">{slide.metric}</div>
                    <div className="font-medium text-[18px] md:text-[22px] leading-[1.2] tracking-[-0.01em] text-[#ff73f0]">{slide.metricLabel}</div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Navigation Arrows — desktop only */}
        <button
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 items-center justify-center text-white/70 hover:text-white transition-all duration-200 left-4"
          aria-label="Previous case study"
          onClick={cases.prev}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 items-center justify-center text-white/70 hover:text-white transition-all duration-200 right-4"
          aria-label="Next case study"
          onClick={cases.next}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {caseSlides.map((_: any, i: number) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === cases.index ? 'bg-[#c156e6] scale-110 shadow-[0_0_8px_#c156e6]' : 'bg-white/20 hover:bg-white/40'}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => cases.select(i)}
          />
        ))}
      </div>
    </section>
  );
}
export default CaseStudiesCarousel;
