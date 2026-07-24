import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '../../../common/SectionHeading';
import { FONTS } from '../../../utils/constants/fonts';
import { itWhy } from '../../../data/itServices/itServices';
import { IconBadge } from './IconBadge';

interface WhyCardProps {
  point: (typeof itWhy)[number];
}

const CARD_BASE =
  'relative rounded-[16px] border border-white/5 p-7 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-5 overflow-hidden';

function WhyCard({ point }: WhyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll-scrubbed "curtain" reveal: the card's gradient fill wipes in via
  // clip-path as it approaches the viewport center, while the icon spins and
  // pops into place in step with the same progress.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 92%', 'start 55%'] });

  const clipPath = useTransform(scrollYProgress, (v) => `inset(0 ${(1 - v) * 100}% 0 0 round 16px)`);
  const iconRotate = useTransform(scrollYProgress, [0, 1], [-90, 0]);
  const iconScale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={`${CARD_BASE} bg-gradient-to-b from-[#16101f] to-[#1c0c29]`}>
        <IconBadge icon={point.icon} />
        <div>
          <h3 className={`${FONTS.head} text-[18px] font-semibold text-white`}>{point.title}</h3>
          <p className={`${FONTS.body} text-[14px] text-white/65 mt-2 leading-[1.7]`}>{point.desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`${CARD_BASE} bg-[#0a0517]`}>
      <m.div className="absolute inset-0 bg-gradient-to-b from-[#16101f] to-[#1c0c29]" style={{ clipPath }} />
      <m.div className="relative z-10 shrink-0" style={{ rotate: iconRotate, scale: iconScale }}>
        <IconBadge icon={point.icon} />
      </m.div>
      <m.div className="relative z-10" style={{ opacity: textOpacity }}>
        <h3 className={`${FONTS.head} text-[18px] font-semibold text-white`}>{point.title}</h3>
        <p className={`${FONTS.body} text-[14px] text-white/65 mt-2 leading-[1.7]`}>{point.desc}</p>
      </m.div>
    </div>
  );
}

export function WhySection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0517]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHeading titleNormal="Why" titleSerif="Partner With MagicMond" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10">
          {itWhy.map((point) => (
            <WhyCard key={point.title} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhySection;
