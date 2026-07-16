import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { HeroSection } from '../components/infra-edge/HeroSection';
import { OfferSection } from '../components/infra-edge/OfferSection';
import { ProblemSection } from '../components/infra-edge/ProblemSection';
import { MeetSection } from '../components/infra-edge/MeetSection';
import { GlimpseSection } from '../components/infra-edge/GlimpseSection';
import { ServicesSection } from '../components/infra-edge/ServicesSection';
import { HowSection } from '../components/infra-edge/HowSection';
import { JourneySection } from '../components/infra-edge/JourneySection';
import { BrandsSection } from '../components/infra-edge/BrandsSection';
import { CtaSection } from '../components/infra-edge/CtaSection';
import { CaseStudiesCarousel } from '../components/home/CaseStudiesCarousel';
import { caseSlides } from '../../data/home/homeData';

const infraSlides = caseSlides.filter(
  (slide) =>
    slide.href === '/case-study-reidius-infra' ||
    slide.href === '/case-study-shri-yamuna-infra'
);

import { Seo } from '../../common/Seo';

export default function InfraEdge() {
  const metaTitle = 'InfraEdge | Digital Growth Partner for Construction & Real Estate';
  const metaDesc = 'The future of real estate growth starts here. Transforming traditional businesses into digitally strong brands that thrive in today’s digital world.';
  const metaKeywords = 'InfraEdge, infra edge, construction marketing, real estate lead generation, infrastructure brand building, construction B2B marketing, real estate growth engine, qualified project meetings for builders, real estate sales pipeline';
  usePageMeta(metaTitle, metaDesc, metaKeywords);
  useReveal();

  return (
    <div className="bg-[#04060f] min-h-screen text-white">
      <Seo
        title={metaTitle}
        description={metaDesc}
        canonical="https://magicmond.com/infraedge"
      />
      <Navbar suffix="InfraEdge" activePath="/infraedge" />
      <main>
        <HeroSection />
        <OfferSection />
        <ProblemSection />
        <MeetSection />
        <GlimpseSection />
        <ServicesSection />
        <HowSection />
        <JourneySection />
        <CaseStudiesCarousel
          slides={infraSlides}
          bgClass="bg-[#04060f]/50"
          sparkleColor="text-[#0055ff]"
          dotActiveColor="bg-[#0055ff] shadow-[0_0_8px_#0055ff]"
          serifColor="text-[#7dbaff]"
          metricLabelColor="text-[#7dbaff]"
          metricTextGrad="from-[#ffffff] to-[#7dbaff]"
          metricLabelGrad="from-[#ffffff] to-[#7dbaff]"
          buttonType="infra"
          arrowStrokeColor="rgba(0, 85, 255, 0.4)"
          arrowStartColor="#0055ff"
          arrowStopColor="#002b80"
          arrowEndColor="#04060f"
        />
        <BrandsSection />
        <CtaSection />
      </main>
      <Footer
        gradientColor="rgba(0, 85, 255, 0.45)"
        wordmarkColor="#05F"
        backgroundColor="#05070f"
      />
    </div>
  );
}
