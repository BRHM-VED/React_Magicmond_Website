// import { Link } from 'react-router-dom';
// import { useCarousel } from '../../../hooks/useCarousel';
// import { caseSlides } from '../../../data/home.data';
// import { FONTS } from '../../../utils/constants/fonts';

// const ArrowUpSvg = ({ id }: { id: string }) => (
//   <svg className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[130px] lg:w-[210px] opacity-90 pointer-events-none" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M100 10 L170 90 H135 V210 H65 V90 H30 Z" fill={`url(#${id})`} opacity=".55" />
//     <defs>
//       <linearGradient id={id} x1="100" y1="10" x2="100" y2="210" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#C258E8" />
//         <stop offset="1" stopColor="#C258E8" stopOpacity="0" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// export function CaseStudiesCarousel() {
//   const cases = useCarousel(caseSlides.length, 5000);

//   return (
//     <section className="relative py-[60px] overflow-hidden" id="case-studies">
//       <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.2,1)]" style={{ transform: `translateX(-${cases.index * 100}%)` }} onTouchStart={cases.onTouchStart} onTouchEnd={cases.onTouchEnd}>
//         {caseSlides.map((slide, i) => (
//           <article className="flex-[0_0_100%] grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] lg:gap-10 px-6 py-10 md:px-20 md:py-[60px] lg:px-[120px] lg:py-[60px] min-h-0 lg:min-h-[560px]" key={slide.href}>
//             <div>
//               <div className="h-[34px] mb-[30px] flex items-center gap-2.5">
//                 {slide.logo && <img src={slide.logo} alt={slide.logoText ? '' : 'Case study brand'} className="h-full w-auto" />}
//                 {slide.logoText && <span className={slide.logoClass}>{slide.logoText}</span>}
//               </div>
//               <h2 className={`${FONTS.head} font-medium text-[30px] lg:text-[44px] leading-[1.15] tracking-[-1px] text-white`}>
//                 {slide.titleLines.map((l) => <span key={l}>{l}<br /></span>)}
//                 <span className="text-[#e0b6ff]">{slide.serifLine}</span>
//               </h2>
//               <p className="mt-[22px] max-w-[430px] text-[18px] leading-[1.4] text-white/70">{slide.description}</p>
//               <div className="mt-[30px]">
//                 <Link className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer" to={slide.href}>Know more</Link>
//               </div>
//             </div>
//             <div className="relative flex flex-col items-center justify-center min-h-[380px]">
//               <ArrowUpSvg id={`arrgrad${i}`} />
//               <div className="font-medium text-[24px] leading-[0.99] tracking-[-0.01em] text-[#ff73f0]">{slide.metricLabel}</div>
//               <div className="font-body font-semibold text-[60px] lg:text-[96px] tracking-[-2px] leading-[1.1] bg-gradient-to-b from-[#e0b6ff] to-[#9747ff] bg-clip-text text-transparent">{slide.metric}</div>
//             </div>
//           </article>
//         ))}
//       </div>

//       <button className="hidden lg:block absolute top-1/2 -translate-y-1/2 z-10 w-[41px] h-[41px] rounded-full transition-opacity duration-300 opacity-85 hover:opacity-100 left-[16px] xl:left-[180px]" aria-label="Previous case study" onClick={cases.prev}>
//         <img src="/assets/images/common/carousel-prev.svg" alt="" />
//       </button>
//       <button className="hidden lg:block absolute top-1/2 -translate-y-1/2 z-10 w-[41px] h-[41px] rounded-full transition-opacity duration-300 opacity-85 hover:opacity-100 right-[16px] xl:right-[180px]" aria-label="Next case study" onClick={cases.next}>
//         <img src="/assets/images/common/carousel-next.svg" alt="" />
//       </button>

//       <div className="flex justify-center gap-2 mt-1">
//         {caseSlides.map((_, i) => (
//           <button
//             key={i}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${i === cases.index ? 'bg-white scale-[1.15]' : 'bg-white/25'}`}
//             aria-label={`Slide ${i + 1}`}
//             onClick={() => cases.select(i)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
// export default CaseStudiesCarousel;
