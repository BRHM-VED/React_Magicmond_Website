import { useReveal } from '../../hooks/useReveal';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { Seo } from '../../common/Seo';
import { WebPageSchema } from '../../common/JsonLd';
import { HeroSection } from '../components/sports/HeroSection';
import { VisionSection } from '../components/sports/VisionSection';
import { ServicesSection } from '../components/sports/ServicesSection';
import { PartnersSection } from '../components/sports/PartnersSection';
import { SportsCaseStudiesSection } from '../components/sports/SportsCaseStudiesSection';
import { ProcessSection } from '../components/sports/ProcessSection';
import { BrandsSection } from '../components/sports/BrandsSection';
import { CtaSection } from '../components/sports/CtaSection';

export default function Sports() {
  useReveal();

  return (
    <div className="bg-[#010502] font-body text-white min-h-screen relative w-full overflow-x-hidden">
      <Seo
        title="Sports Marketing &amp; Cricket Sponsorship Agency in India"
        description="MagicMond Sports connects brands to the world of cricket — IPL sponsorships, digital cricket platforms &amp; fan engagement. Grow with cricket without breaking the bank."
        canonical="https://magicmond.com/sports"
      />
      <WebPageSchema
        name="Sports Marketing &amp; Cricket Sponsorship Agency | MagicMond"
        description="MagicMond Sports connects brands to cricket audiences through IPL sponsorships, digital platforms and fan engagement campaigns."
        url="https://magicmond.com/sports"
      />
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
