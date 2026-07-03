import { useReveal } from '../hooks/useReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { CsHeader } from '../components/casestudy/CsHeader';
import { CsArticle } from '../components/casestudy/CsArticle';
import type { CaseStudy as CaseStudyType } from '../data/types';

interface Props {
  study: CaseStudyType;
}

export default function CaseStudy({ study }: Props) {
  usePageMeta(study.title, study.metaDescription);
  useReveal();

  return (
    <div className="case-study">
      <Navbar />
      <main>
        <CsHeader study={study} />
        <CsArticle blocks={study.blocks} />
      </main>
      <Footer />
    </div>
  );
}
