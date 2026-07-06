import { Link } from 'react-router-dom';
import { Sparkle } from 'lucide-react';
import { useCarousel } from '../../../hooks/useCarousel';
import { caseSlides } from '../../../data/home.data';

const ArrowUpSvg = ({ id }: { id: string }) => (
  <svg className="case-slide__arrow-up" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 10 L170 90 H135 V210 H65 V90 H30 Z" fill={`url(#${id})`} opacity=".55" />
    <defs>
      <linearGradient id={id} x1="100" y1="10" x2="100" y2="210" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b4bd8" />
        <stop offset="1" stopColor="#3b4bd8" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export function CaseStudiesCarousel() {
  const cases = useCarousel(caseSlides.length, 5000);

  return (
    <section className="cases" id="case-studies">
      <div className="cases__track" style={{ transform: `translateX(-${cases.index * 100}%)` }} onTouchStart={cases.onTouchStart} onTouchEnd={cases.onTouchEnd}>
        {caseSlides.map((slide, i) => (
          <article className="case-slide" key={slide.href}>
            <div>
              <div className="case-slide__logo">
                {slide.logo && <img src={slide.logo} alt={slide.logoText ? '' : 'Case study brand'} />}
                {slide.logoText && <span className={slide.logoClass}>{slide.logoText}</span>}
              </div>
              <h2 className="case-slide__title">
                {slide.titleLines.map((l) => <span key={l}>{l}<br /></span>)}
                <span className="serif">{slide.serifLine}</span>
              </h2>
              <p className="case-slide__desc">{slide.description}</p>
              <div className="case-slide__cta">
                <Link className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer" to={slide.href}>Know more</Link>
              </div>
            </div>
            <div className="case-slide__visual">
              <ArrowUpSvg id={`arrgrad${i}`} />
              <Sparkle className="case-slide__star case-slide__star--1 text-[#6F2888] fill-[#6F2888]" />
              <Sparkle className="case-slide__star case-slide__star--2 text-[#6F2888] fill-[#6F2888]" />
              <Sparkle className="case-slide__star case-slide__star--3 text-[#6F2888] fill-[#6F2888]" />
              <div className="case-slide__metric-label">{slide.metricLabel}</div>
              <div className="case-slide__metric">{slide.metric}</div>
            </div>
          </article>
        ))}
      </div>

      <button className="cases__nav cases__nav--prev" aria-label="Previous case study" onClick={cases.prev}>
        <img src="/assets/images/common/carousel-prev.svg" alt="" />
      </button>
      <button className="cases__nav cases__nav--next" aria-label="Next case study" onClick={cases.next}>
        <img src="/assets/images/common/carousel-next.svg" alt="" />
      </button>

      <div className="cases__dots">
        {caseSlides.map((_, i) => (
          <button
            key={i}
            className={`cases__dot${i === cases.index ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => cases.select(i)}
          />
        ))}
      </div>
    </section>
  );
}
export default CaseStudiesCarousel;
