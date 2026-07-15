import { useReveal } from '../../hooks/useReveal';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { Seo } from '../../common/Seo';
import { WebPageSchema } from '../../common/JsonLd';
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

export default function InfraEdge() {
  useReveal();

  return (
    <div className="bg-[#04060f] min-h-screen text-white">
      <Seo
        title="InfraEdge — B2B Growth Engine for Construction &amp; Real Estate"
        description="InfraEdge by MagicMond is a 90-day qualified meeting engine for construction and real estate businesses in India. 100 qualified meetings guaranteed."
        canonical="https://magicmond.com/infraedge"
      />
      <WebPageSchema
        name="InfraEdge — B2B Growth Engine for Construction &amp; Real Estate | MagicMond"
        description="InfraEdge is MagicMond's B2B growth engine helping construction and real estate companies generate 100 qualified meetings in 90 days."
        url="https://magicmond.com/infraedge"
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
