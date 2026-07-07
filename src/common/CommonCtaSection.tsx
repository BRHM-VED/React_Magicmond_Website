import React from 'react';
import { LightRays } from './LightRays';
import { Button } from './button/homeButton';
import { InfraEdgeButton } from './button/InfraEdgeButton';
import { SportsButton } from './button/SportsButton';
import { FONTS } from '../utils/constants/fonts';

interface CommonCtaSectionProps {
  titleNormal: string;
  titleItalic: string;
  titleItalicColor?: string;
  description: React.ReactNode;
  buttonText: string;
  buttonHref: string;
  buttonType?: 'home' | 'infra' | 'sports';
  raysTheme?: 'purple' | 'blue' | 'green' | 'cta';
  cardBackground?: string;
  sectionBg?: string;
  bgType?: 'dots' | 'stars';
  id?: string;
}

export function CommonCtaSection({
  titleNormal,
  titleItalic,
  titleItalicColor,
  description,
  buttonText,
  buttonHref,
  buttonType = 'home',
  raysTheme = 'cta',
  cardBackground = '#08050f',
  sectionBg = '#0d0817',
  bgType = 'dots',
  id = 'cta',
}: CommonCtaSectionProps) {
  
  // Choose button component
  const renderButton = () => {
    if (buttonType === 'infra') {
      return (
        <InfraEdgeButton variant="small" href={buttonHref} className="px-10 sm:px-12 md:px-14">
          {buttonText}
        </InfraEdgeButton>
      );
    }
    if (buttonType === 'sports') {
      return (
        <SportsButton variant="small" href={buttonHref} className="px-10 sm:px-12 md:px-14">
          {buttonText}
        </SportsButton>
      );
    }
    return (
      <Button
        variant="large"
        href={buttonHref}
        className="w-full sm:w-auto border border-white/20 shadow-[0_0_20px_rgba(105,32,131,0.5)] hover:shadow-[0_0_30px_rgba(192,85,229,0.8)] transition-all duration-300"
      >
        {buttonText}
      </Button>
    );
  };

  return (
    <section className="py-20 px-0 md:px-10 overflow-hidden relative z-20" style={{ background: sectionBg }} id={id}>
      <div className="mx-auto max-w-[1200px] w-full">
        {/* Glowing visual container with radial gradient background overlaying background pattern */}
        <div 
          className="relative rounded-none md:rounded-[24px] overflow-hidden border-x-0 md:border border-white/[0.06] py-[50px] px-5 sm:px-10 lg:py-[90px] lg:px-[40px] text-center shadow-[0_24px_80px_rgba(0,0,0,0.5)] flex flex-col items-center"
          style={{ background: cardBackground }}
        >
          {/* Background pattern */}
          {bgType === 'dots' ? (
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0 select-none"
              src="/assets/images/common/cta-dots-pattern.webp"
              alt=""
            />
          ) : (
            <img
              className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-50 pointer-events-none select-none"
              src="/assets/images/common/hero-bg-stars.webp"
              alt=""
            />
          )}

          {/* Animated Light Rays */}
          <LightRays
            theme={raysTheme}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          />

          {/* Interactive content layer */}
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Title with styled italic line */}
            <h2 className={`${FONTS.head} font-medium text-[32px] sm:text-[42px] lg:text-[54px] leading-tight lg:leading-[1.2] tracking-[-1.9px] text-white reveal`}>
              {titleNormal}{' '}
              <span 
                className={`${FONTS.serif} italic block mt-1 lg:mt-2`}
                style={titleItalicColor ? { color: titleItalicColor } : undefined}
              >
                {titleItalic}
              </span>
            </h2>

            {/* Description */}
            <p
              className={`${FONTS.body} max-w-[530px] mt-4 lg:mt-6 text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] tracking-[-0.2px] text-white/60 mx-auto reveal`}
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              {description}
            </p>

            {/* CTA Button */}
            <div className="mt-8 lg:mt-9 w-full sm:w-auto flex justify-center reveal" style={{ '--d': '.3s' } as React.CSSProperties}>
              {renderButton()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonCtaSection;
