import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCarousel } from '../../../hooks/useCarousel';
import { growthStories } from '../../../data/consultation.data';

const StoryArrow = ({ id }: { id: string }) => (
  <svg className="absolute top-[-4%] left-1/2 -translate-x-1/2 w-[150px] md:w-[230px] opacity-85 pointer-events-none select-none" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 10 L170 90 H135 V210 H65 V90 H30 Z" fill={`url(#${id})`} opacity=".5" />
    <defs>
      <linearGradient id={id} x1="100" y1="10" x2="100" y2="210" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4b3ad8" />
        <stop offset="1" stopColor="#4b3ad8" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export function GrowthStoriesSection() {
  const stories = useCarousel(growthStories.length, 5000);

  return (
    <section className="relative bg-[#0b0517] bg-[radial-gradient(700px_480px_at_70%_40%,rgba(90,30,140,0.4),transparent_70%)] py-[100px] overflow-hidden">
      <div className="container px-5 md:px-10 mx-auto max-w-[1200px]">
        <p className="flex items-center gap-2.5 font-bold text-[18px] tracking-[0.08em] uppercase text-[#d86cff] reveal">📈 Growth story</p>
        <div className="w-full overflow-hidden relative mt-8">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.2,1)]"
            style={{ transform: `translateX(-${stories.index * 100}%)` }}
          >
            {growthStories.map((story, i) => (
              <article className="flex-none w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-[30px] md:py-[50px]" key={story.href}>
                <div>
                  <p className={`font-bold text-[26px] text-white ${story.brandClass}`}>{story.brand}</p>
                  <h2 className="mt-5 font-bold text-[34px] md:text-[60px] leading-[1.1] tracking-[-0.01em] text-white">{story.title}</h2>
                  <p className="mt-[18px] max-w-[440px] text-[18px] leading-[1.4] text-white">{story.desc}</p>
                  <Link className="inline-flex items-center justify-center w-16 h-16 mt-[34px] rounded-full bg-[#5d007e] hover:bg-[#71009b] hover:translate-x-1 transition-all duration-300" to={story.href} aria-label={`Read the ${story.brand} case study`}>
                    <ArrowRight size={24} strokeWidth={2} className="text-white" />
                  </Link>
                </div>
                <div className="relative min-h-[380px] flex flex-col items-center justify-center">
                  <StoryArrow id={`cgrad${i}`} />
                  <div className="font-medium text-[24px] leading-[0.99] tracking-[-0.01em] text-[#d86cff]">{story.metricLabel}</div>
                  <div className="font-semibold text-[60px] md:text-[96px] tracking-[-2px] leading-[1.1] bg-gradient-to-b from-[#e0b6ff] to-[#9747ff] bg-clip-text text-transparent">{story.metric}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-2 justify-center md:justify-start">
          {growthStories.map((s, i) => (
            <span
              key={s.href}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${i === stories.index ? 'bg-white' : 'bg-white/25'}`}
              onClick={() => stories.select(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GrowthStoriesSection;
