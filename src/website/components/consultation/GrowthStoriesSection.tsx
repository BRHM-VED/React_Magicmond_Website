import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCarousel } from '../../../hooks/useCarousel';
import { growthStories } from '../../../data/consultation.data';

const StoryArrow = ({ id }: { id: string }) => (
  <svg className="c-story__arrow" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <section className="c-growth">
      <div className="container">
        <p className="c-growth__label reveal">📈 Growth story</p>
        <div className="c-growth__viewport" style={{ overflow: 'hidden' }}>
          <div className="c-growth__track" style={{ transform: `translateX(-${stories.index * 100}%)` }}>
            {growthStories.map((story, i) => (
              <article className="c-story" key={story.href}>
                <div>
                  <p className={`c-story__brand ${story.brandClass}`}>{story.brand}</p>
                  <h2 className="c-story__title">{story.title}</h2>
                  <p className="c-story__desc">{story.desc}</p>
                  <Link className="c-story__btn" to={story.href} aria-label={`Read the ${story.brand} case study`}>
                    <ArrowRight size={24} strokeWidth={2} color="#fff" />
                  </Link>
                </div>
                <div className="c-story__visual">
                  <StoryArrow id={`cgrad${i}`} />
                  <div className="c-story__metric-label">{story.metricLabel}</div>
                  <div className="c-story__metric">{story.metric}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="c-growth__dots">
          {growthStories.map((s, i) => (
            <span key={s.href} className={`c-growth__dot${i === stories.index ? ' active' : ''}`} onClick={() => stories.select(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default GrowthStoriesSection;
