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

export default function InfraEdge() {
  const metaTitle = 'MagicMond InfraEdge';
  const metaDesc = 'The future of real estate growth starts here. Transforming traditional businesses into digitally strong brands that thrive in today’s digital world.';
  usePageMeta(metaTitle, metaDesc);
  useReveal();

  return (
    <div className="bg-[#04060f] min-h-screen text-white">
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
