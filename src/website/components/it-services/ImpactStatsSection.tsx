import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '../../../common/SectionHeading';
import { MetricChip } from '../../../common/MetricChip';
import { useIsDesktop } from '../../../hooks/useIsDesktop';
import { itStats } from '../../../data/itServices/itServices';

interface StatTileProps {
  stat: (typeof itStats)[number];
  index: number;
  isDesktop: boolean;
}

function StatTile({ stat, index, isDesktop }: StatTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const columns = isDesktop ? 3 : 2;
  const col = index % columns;

  // Scroll-scrubbed parallax cascade: each tile tracks the SAME kind of
  // "approaching the fold" progress, but later columns are given a phase
  // offset so they lag behind and settle a beat after the column before them
  // — a diagonal drift-in wave instead of a uniform one-shot fade.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'start 55%'] });
  const phase = col * 0.15;
  const distance = isDesktop ? 56 : 28;

  const y = useTransform(scrollYProgress, [phase, 1], [distance, 0]);
  const scale = useTransform(scrollYProgress, [phase, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [phase, 1], [0, 1]);

  const chip = (
    <MetricChip
      value={stat.value}
      label={stat.label}
      animated
      className="h-full px-5 py-6 md:px-7 md:py-8"
      valueClassName="text-[34px] md:text-[48px] leading-none"
      labelClassName="text-[12px] md:text-[14px] mt-3"
    />
  );

  if (reduceMotion) {
    return (
      <div ref={ref} className="h-full">
        {chip}
      </div>
    );
  }

  return (
    <m.div ref={ref} className="h-full" style={{ y, scale, opacity }}>
      {chip}
    </m.div>
  );
}

export function ImpactStatsSection() {
  const isDesktop = useIsDesktop();

  return (
    <section className="py-16 md:py-24 bg-[#0a0517]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHeading
          titleNormal="Impact"
          titleSerif="at a Glance"
          description="Real products, live in the market, used at scale."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10">
          {itStats.map((stat, index) => (
            <StatTile key={stat.label} stat={stat} index={index} isDesktop={isDesktop} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ImpactStatsSection;
