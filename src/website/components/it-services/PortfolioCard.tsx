import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MetricChip } from '../../../common/MetricChip';
import { FONTS } from '../../../utils/constants/fonts';
import type { ItPortfolioItem } from '../../../data/itServices/itServices';
import { IconBadge } from './IconBadge';

interface Props {
  item: ItPortfolioItem;
  /** Card position — alternates which side the scroll-in slide/tilt comes from. */
  index: number;
  /** md+ viewport: enables the larger slide distance + 3D tilt. */
  isDesktop: boolean;
}

export function PortfolioCard({ item, index, isDesktop }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const fromLeft = index % 2 === 0;

  // Scroll-scrubbed entrance: progress tracks the card's own travel from just
  // below the fold to just past viewport-center, so the slide/tilt/scale is
  // driven directly by scroll position (reverses smoothly on scroll-up)
  // rather than firing once like the rest of the page's reveals.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 95%', 'start 45%'],
  });

  const xDistance = isDesktop ? 70 : 24;
  const tiltDegrees = isDesktop ? 10 : 0; // 3D tilt only on desktop — kept flat/light on mobile

  const x = useTransform(scrollYProgress, [0, 1], [fromLeft ? -xDistance : xDistance, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [fromLeft ? tiltDegrees : -tiltDegrees, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const cardClasses =
    'grid md:grid-cols-[2fr_3fr] gap-8 rounded-[20px] border border-white/5 bg-gradient-to-b from-[#16101f] to-[#1c0c29] p-7 md:p-10 hover:border-[#c055e5]/30 transition-colors duration-300';

  const content = (
    <>
      {/* Left: identity */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <IconBadge icon={item.icon} className="w-14 h-14" />
        <p className={`${FONTS.inter} text-[12px] font-semibold tracking-[1.5px] uppercase text-[#c055e5] mt-4`}>
          {item.tag}
        </p>
        <h3 className={`${FONTS.head} text-[26px] md:text-[32px] font-semibold text-white mt-2 leading-[1.2]`}>
          {item.name}
        </h3>
        <p className={`${FONTS.serif} italic text-[16px] text-white/70 mt-3 leading-[1.6]`}>{item.tagline}</p>
        {item.caseStudyHref && (
          <Link
            to={item.caseStudyHref}
            className={`${FONTS.inter} text-[#e0b6ff] text-[14px] font-medium mt-5 inline-flex items-center gap-1 hover:gap-2 transition-all duration-200`}
          >
            {item.linkLabel ?? 'View case study'}
            <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {/* Right: what we built + metrics */}
      <div>
        <p className={`${FONTS.inter} text-[12px] uppercase tracking-wide text-white/40`}>What We Built</p>
        <p className={`${FONTS.body} text-[15px] leading-[1.75] text-white/75 mt-3`}>{item.built}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {item.metrics.map((metric) => (
            <MetricChip key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    </>
  );

  if (reduceMotion) {
    return (
      <div ref={ref} className={cardClasses}>
        {content}
      </div>
    );
  }

  return (
    <m.div
      ref={ref}
      className={cardClasses}
      style={{ x, rotateY, scale, opacity, transformPerspective: 1000 }}
      whileHover={{ y: -4 }}
    >
      {content}
    </m.div>
  );
}
export default PortfolioCard;
