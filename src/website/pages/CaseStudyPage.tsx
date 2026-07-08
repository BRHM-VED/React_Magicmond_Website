import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { HeaderSection } from '../components/case-study/HeaderSection';
import { ArticleSection } from '../components/case-study/ArticleSection';
import type { CaseStudy as CaseStudyType } from '../../data/common/types';

interface Props {
  study: CaseStudyType;
}

export default function CaseStudy({ study }: Props) {
  usePageMeta(study.title, study.metaDescription);
  useReveal();

  return (
    <div className="bg-white text-[#0e081d] min-h-screen relative w-full overflow-hidden">
      <Navbar />
      <main className="pt-[64px]">
        <HeaderSection study={study} />
        <ArticleSection blocks={study.blocks} />
      </main>
      <Footer
        gradientColor="rgba(130, 45, 170, 0.65)"
        wordmarkColor="#b45cf0"
        backgroundColor="#2a0a3d"
        rounded
      />
    </div>
  );
}
