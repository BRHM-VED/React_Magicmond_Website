import { useReveal } from '../hooks/useReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { HeaderSection } from '../components/case-study/HeaderSection';
import { ArticleSection } from '../components/case-study/ArticleSection';
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
        <HeaderSection study={study} />
        <ArticleSection blocks={study.blocks} />
      </main>
      <Footer />
    </div>
  );
}
