import React from 'react';
import { FONTS } from '../utils/constants/fonts';
import { CALENDLY } from '../utils/constants/constants';

/* ── Tag pill ── */
export function StepTag({ label }: { label: string }) {
  return (
    <div
      className="h-[28px] md:h-[33px] inline-flex items-center px-2.5 md:px-4 rounded-full overflow-hidden border border-white/5 shrink-0"
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(143,57,133,0.2) 0%, rgba(153,153,153,0.1) 100%)',
      }}
    >
      <span
        className={`${FONTS.body} font-normal text-[11.5px] md:text-[14px] tracking-[-0.3px] md:tracking-[-0.44px] bg-clip-text text-transparent`}
        style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #c156e6 100%)' }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Step Card ── */
export interface StepCardProps {
  icon: React.ReactNode;
  badge: string;        // e.g. "Step-1"
  title: string;
  description: string;
  tags?: string[];      // optional tag pills (cards 1 & 2)
  isLast?: boolean;     // if true, shows CTA button instead of tags
  delay?: string;       // reveal delay, e.g. '0.1s'
}

export function StepCard({
  icon,
  badge,
  title,
  description,
  tags = [],
  isLast = false,
  delay,
}: StepCardProps) {
  const [prefix, num] = badge.split('-');

  // Set Figma defined min-height values for desktop screens
  const desktopMinHeight = isLast ? 'md:min-h-[302px]' : 'md:min-h-[318px]';

  return (
    <article
      className={`bg-[#080808] rounded-[28px] shadow-[0px_9.5px_20.9px_-1.662px_rgba(0,0,0,0.16)] overflow-hidden reveal flex flex-col ${desktopMinHeight}`}
      style={delay ? ({ '--d': delay } as React.CSSProperties) : undefined}
    >
      {/* Inner panel — border-t border-x border-b-0 overlay will wrap it */}
      <div className="relative m-[6px] rounded-[21px] overflow-hidden flex-1 flex flex-col justify-between" style={{ background: '#080808' }}>

        {/* Radial dark gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 110% 100% at 50% 50%, rgba(15,9,18,0.15) 0%, rgba(12,9,18,1) 100%)',
          }}
        />
        {/* Top inset purple glow */}
        <div className="absolute inset-0 pointer-events-none rounded-[21px] shadow-[inset_0px_9.5px_4.75px_-0.95px_rgba(143,57,133,0.15)]" />

        {/* Content & Layout Wrapper */}
        <div className="relative px-3 md:px-7 pt-8 pb-7 flex flex-col flex-1 justify-between gap-[22px]">

          <div className="flex flex-col gap-[18px]">
            {/* Row: icon + step badge */}
            <div className="flex items-center justify-between">
              {/* Icon box */}
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center border border-[rgba(143,57,133,0.15)] shadow-[inset_0px_9.5px_4.75px_-0.95px_rgba(255,255,255,0.08)]"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(15,9,18,0.15) 0%, rgba(12,9,18,1) 100%)',
                }}
              >
                {icon}
              </div>

              {/* Step-N badge */}
              <div
                className="h-[33px] flex items-center px-3 rounded-full border border-white/5"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(97,97,97,0.09) 0%, rgba(255,255,255,0.05) 100%)',
                }}
              >
                <span
                  className={`${FONTS.body} text-[15px] tracking-[-0.44px] bg-clip-text text-transparent`}
                  style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #c156e6 100%)' }}
                >
                  {prefix}-{num}
                </span>
              </div>
            </div>

            {/* Title */}
            <h4 className={`${FONTS.head} font-medium text-[20px] md:text-[24px] leading-tight text-white tracking-[-0.44px]`}>
              {title}
            </h4>

            {/* Thin gradient divider */}
            <div className="h-px w-[197px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Description */}
            <p className={`${FONTS.body} font-normal text-[12.5px] md:text-[14px] leading-[1.63] text-white/50 tracking-[-0.18px] max-w-[420px]`}>
              {description}
            </p>
          </div>

          {/* Tags or CTA pinned perfectly to bottom */}
          {tags.length > 0 ? (
            <div className="flex flex-row flex-wrap gap-[6px] md:gap-[9px] pt-1">
              {tags.map((t) => <StepTag key={t} label={t} />)}
            </div>
          ) : isLast ? (
            <a
              href={CALENDLY}
              className={`${FONTS.head} self-start inline-flex items-center justify-center h-[46px] px-5 rounded-[10px] bg-[#692083] hover:bg-[#7d279c] text-white font-medium text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[0_0_0_1px_rgba(105,32,131,0.12),0_8px_40px_0px_rgba(105,32,131,0.5)] hover:shadow-[0_0_0_1px_rgba(105,32,131,0.2),0_8px_40px_0px_rgba(192,85,229,0.6)]`}
            >
              Start your growth journey
            </a>
          ) : null}
        </div>

        {/* Purple border overlay (no bottom border to match Figma) */}
        <div className="absolute inset-0 pointer-events-none rounded-[21px] border-t border-x border-b-0 border-[#c156e6]" />
      </div>
    </article>
  );
}

export default StepCard;
