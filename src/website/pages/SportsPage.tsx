import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { HeroSection } from '../components/sports/HeroSection';
import { VisionSection } from '../components/sports/VisionSection';
import { ServicesSection } from '../components/sports/ServicesSection';
import { PartnersSection } from '../components/sports/PartnersSection';
import { SportsCaseStudiesSection } from '../components/sports/SportsCaseStudiesSection';
import { ProcessSection } from '../components/sports/ProcessSection';
import { BrandsSection } from '../components/sports/BrandsSection';
import { CtaSection } from '../components/sports/CtaSection';

export default function Sports() {
  usePageMeta(
    'MagicMond Sports',
    'Connecting ambitious brands to the world of cricket. From global tournaments to digital cricket platforms — we help brands unlock visibility, engagement, and trust without breaking the bank.'
  );
  useReveal();

  return (
    <div className="bg-[#010502] font-body text-white min-h-screen relative w-full overflow-x-hidden">
      <Navbar suffix="Sports" activePath="/sports" />
      <main>
        <HeroSection />
        <VisionSection />
        <PartnersSection />
        <ServicesSection />
        <SportsCaseStudiesSection />
        <ProcessSection />
        <BrandsSection />
        <CtaSection />
      </main>
      <Footer
        gradientColor="rgba(0, 172, 121, 0.45)"
        wordmarkColor="#00ac79"
        backgroundColor="#010502"
      />
    </div>
  );
}
