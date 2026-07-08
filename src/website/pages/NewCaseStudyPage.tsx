import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { CsHeroSection } from '../components/case-study/CsHeroSection';
import { CsContentSection } from '../components/case-study/CsContentSection';
import { CsMetricsSection } from '../components/case-study/CsMetricsSection';
import { CsOutcomeSection } from '../components/case-study/CsOutcomeSection';
import type { NewCaseStudy } from '../../data/common/types';
import { FONTS } from '../../utils/constants/fonts';

interface Props {
  study: NewCaseStudy;
  /** Optional extra image URLs for the scrolling ad strip in CsOutcomeSection */
  stripImages?: string[];
}

export default function NewCaseStudyPage({ study, stripImages = [] }: Props) {
  usePageMeta(study.title, study.metaDescription);
  useReveal();

  const accent = study.brand.accentColor;

  return (
    <div className="bg-white text-[#0e1628] min-h-screen relative w-full overflow-hidden">
      <Navbar />
      <main className="pt-[64px]">
        {/* Component 1: Hero — full-width screenshot with gradient fade + text overlay */}
        <CsHeroSection study={study} heroImage={study.brand.logo} />

        {/* Optional Top Image (e.g. Sales landing page before Highlights) */}
        {study.topImage && (
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 md:pt-14 flex flex-col items-center">
            <img
              src={study.topImage}
              alt="Intro visual"
              className="w-full h-auto md:h-[637px] object-cover rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] select-none pointer-events-none"
            />
            {study.topImageCaption && (
              <p className={`${FONTS.body} font-light leading-[1.6] opacity-80 mt-3 text-[13px] text-black text-center w-full`}>
                {study.topImageCaption}
              </p>
            )}
          </div>
        )}

        {/* Component 2: Content — HIGHLIGHTS + CHALLENGE + full-width image */}
        <CsContentSection
          blocks={study.blocks}
          accentColor={accent}
        />

        {/* Component 3: Metrics — stats table + TAILORED SOLUTION + RESEARCH & EXECUTION + reel strip */}
        <CsMetricsSection
          blocks={study.blocks}
          studySlug={study.slug}
        />


        {/* Component 4: Outcome — ad strip + GROWTH PARTNERSHIP + OUTCOME */}
        <CsOutcomeSection
          blocks={study.blocks}
          accentColor={accent}
          stripImages={stripImages}
        />
      </main>
      <Footer
        gradientColor="rgba(0, 85, 200, 0.35)"
        wordmarkColor="#3366cc"
        backgroundColor="#0e1628"
      />
    </div>
  );
}
