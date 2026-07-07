import React from 'react';
import { BrandMarquee } from './BrandMarquee';
import { Button } from './button/homeButton';
import { InfraEdgeButton } from './button/InfraEdgeButton';
import { SportsButton } from './button/SportsButton';

export interface BrandItem {
  image: string;
  alt: string;
  meta?: boolean;
}

interface CommonBrandsSectionProps {
  // Section wrapper classes
  sectionClassName?: string;
  containerClassName?: string;
  layoutClassName?: string;

  // Left column / text area
  leftColClassName?: string;
  titleClassName?: string;
  titleNormalText: string;
  titleSerifText: string;
  serifClassName?: string;

  // Sparkle icon config
  showSparkle?: boolean;
  sparkleClassName?: string;
  sparkleSrc?: string;

  // Button config
  buttonType: 'home' | 'infra' | 'sports';
  buttonText: string;
  buttonHref?: string;
  buttonClassName?: string;

  // Right column / marquee wrapper
  rightColClassName?: string;
  marqueeMaskStyle?: React.CSSProperties;
  rowWrapperClass?: string;

  // Fade overlays
  showFadeOverlays?: boolean;
  fadeOverlayColor?: string; // e.g. "#0e081d"

  // Brand data and tile rendering
  rows: BrandItem[][];
  renderTile: (tile: BrandItem, rowIndex: number, tileIndex: number) => React.ReactNode;
}

export function CommonBrandsSection({
  sectionClassName = '',
  containerClassName = '',
  layoutClassName = '',
  leftColClassName = '',
  titleClassName = '',
  titleNormalText,
  titleSerifText,
  serifClassName = '',
  showSparkle = false,
  sparkleClassName = '',
  sparkleSrc = '/assets/icons/sparkle.svg',
  buttonType,
  buttonText,
  buttonHref,
  buttonClassName = '',
  rightColClassName = '',
  marqueeMaskStyle,
  rowWrapperClass,
  showFadeOverlays = false,
  fadeOverlayColor,
  rows,
  renderTile,
}: CommonBrandsSectionProps) {

  // Render the correct theme-specific CTA button
  const renderButton = () => {
    switch (buttonType) {
      case 'home':
        return (
          <Button
            variant="small"
            href={buttonHref}
            className={buttonClassName}
          >
            {buttonText}
          </Button>
        );
      case 'infra':
        return (
          <InfraEdgeButton
            variant="small"
            href={buttonHref}
            className={buttonClassName}
          >
            {buttonText}
          </InfraEdgeButton>
        );
      case 'sports':
        return (
          <SportsButton
            variant="small"
            href={buttonHref}
            className={buttonClassName}
          >
            {buttonText}
          </SportsButton>
        );
      default:
        return null;
    }
  };

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={layoutClassName}>

          {/* Left Column: Heading & CTA */}
          <div className={leftColClassName}>
            <h2 className={titleClassName}>
              {showSparkle && (
                <img
                  className={sparkleClassName}
                  src={sparkleSrc}
                  alt=""
                />
              )}
              {titleNormalText}
              <span className={serifClassName}>
                {titleSerifText}
              </span>
            </h2>

            <div className="mt-6 md:mt-8 reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
              {renderButton()}
            </div>
          </div>

          {/* Right Column: Scrolling Marquees */}
          <div
            className={rightColClassName}
            style={marqueeMaskStyle}
          >
            {/* Absolute positioning side gradient fades if enabled */}
            {showFadeOverlays && fadeOverlayColor && (
              <>
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10"
                  style={{ backgroundImage: `linear-gradient(to right, ${fadeOverlayColor}, transparent)` }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10"
                  style={{ backgroundImage: `linear-gradient(to left, ${fadeOverlayColor}, transparent)` }}
                />
              </>
            )}

            {/* Loop through each row of brand logos */}
            {rows.map((row, r) => (
              <BrandMarquee key={r} reverse={r === 1} className="w-full">
                {rowWrapperClass ? (
                  <div className={rowWrapperClass}>
                    {row.map((tile, i) => renderTile(tile, r, i))}
                  </div>
                ) : (
                  <>
                    {row.map((tile, i) => renderTile(tile, r, i))}
                  </>
                )}
              </BrandMarquee>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default CommonBrandsSection;
