import type { NewCaseStudy } from '../../../data/common/types';
import { FONTS } from '../../../utils/constants/fonts';

interface Props {
  study: NewCaseStudy;
  /** URL to the product screenshot / hero image (the dashboard mockup) */
  heroImage?: string;
}

/**
 * Component 1 – Hero Section
 *
 * Layout matches Figma node 469-3376:
 * - Full-width dark navy section
 * - Product screenshot spans the full width at the top, slightly tilted perspective
 * - Bottom fades via gradient to dark navy
 * - Text (breadcrumb, H1, subtitle) sits at the bottom-left, overlaid on the gradient
 */
export function CsHeroSection({ study, heroImage }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0e1628]">

      {/* ── Product screenshot (full-width, top-aligned) ── */}
      <div className="relative w-full">
        {heroImage ? (
          <img
            src={heroImage}
            alt={`${study.brand.name} product dashboard`}
            className="w-full object-cover object-bottom max-h-[480px] md:max-h-[560px] select-none pointer-events-none"
          />
        ) : (
          /* Placeholder until image path is provided */
          <div className="w-full h-[320px] md:h-[460px] bg-[#141e35] flex items-center justify-center border-b border-white/5">
            <p className={`${FONTS.body} text-white/25 text-[14px]`}>Hero dashboard screenshot</p>
          </div>
        )}

        {/* Gradient overlay — fades image into dark navy at the bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(14,22,40,0) 0%, rgba(14,22,40,0.2) 50%, rgba(14,22,40,0.8) 75%, rgba(14,22,40,1) 92%)',
          }}
        />

        {/* Subtle left-side dark gradient so text stays readable on any image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(14,22,40,0.6) 0%, rgba(14,22,40,0.0) 55%)',
          }}
        />
      </div>

      {/* ── Text content — sits over the gradient fade ── */}
      <div className="relative w-full max-w-[1062px] mx-auto px-5 md:px-10 pb-5 md:pb-8 mt-[-120px] md:mt-[-160px]">

        {/* Breadcrumb */}
        <p className={`${FONTS.inter} text-[10px] md:text-[15px] text-white tracking-[0.01em] mb-0 md:mb-3`}>
          {study.brand.name} &middot; {study.brand.category || 'SaaS'}
        </p>

        {/* H1 heading */}
        <h1
          className={`${FONTS.head} font-semibold text-[20px] md:text-[46px] lg:text-[54px] leading-[1.1]  tracking-[-1.5px] text-white max-w-[700px]`}
        >
          {study.heroTitle.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>

        {/* Subtitle — two lines as shown in Figma */}
        <div className={`mt-2 md:mt-4 max-w-[540px] ${FONTS.inter} text-[10px] md:text-[16px] leading-[1.65] text-white/70`}>
          <p className="font-semibold text-white/90 mb-0">
            {study.brand.tagline || 'A predictable pipeline for a construction SaaS platform.'}
          </p>
          {study.heroSubtitle.split('\n').map((line, i) => (
            <p key={i} className="mt-[2px]">{line}</p>
          ))}
        </div>
      </div>

    </section>
  );
}

export default CsHeroSection;
