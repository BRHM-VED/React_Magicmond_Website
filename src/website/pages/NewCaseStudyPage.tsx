import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { CsHeroSection } from '../components/case-study/CsHeroSection';
import { CsContentSection } from '../components/case-study/CsContentSection';
import { CsMetricsSection } from '../components/case-study/CsMetricsSection';
import { CsOutcomeSection } from '../components/case-study/CsOutcomeSection';
import type { NewCaseStudy } from '../../data/common/types';

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

        {/* Component 2: Content — HIGHLIGHTS + CHALLENGE + full-width image */}
        <CsContentSection
          blocks={study.blocks}
          accentColor={accent}
        />

        {/* Component 3: Metrics — stats table + TAILORED SOLUTION + RESEARCH & EXECUTION + reel strip */}
        <CsMetricsSection
          blocks={study.blocks}
          accentColor={accent}
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
