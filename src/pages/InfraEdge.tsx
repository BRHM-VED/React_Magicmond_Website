import { useReveal } from '../hooks/useReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { IeHeroSection } from '../components/infraedge/IeHeroSection';
import { IeOfferSection } from '../components/infraedge/IeOfferSection';
import { IeProblemSection } from '../components/infraedge/IeProblemSection';
import { IeMeetSection } from '../components/infraedge/IeMeetSection';
import { IeGlimpseSection } from '../components/infraedge/IeGlimpseSection';
import { IeServicesSection } from '../components/infraedge/IeServicesSection';
import { IeHowSection } from '../components/infraedge/IeHowSection';
import { IeJourneySection } from '../components/infraedge/IeJourneySection';
import { IeBrandsSection } from '../components/infraedge/IeBrandsSection';
import { IeCtaSection } from '../components/infraedge/IeCtaSection';

export default function InfraEdge() {
  usePageMeta(
    'MagicMond InfraEdge',
    'The future of real estate growth starts here. Transforming traditional businesses into digitally strong brands that thrive in today’s digital world.'
  );
  useReveal();

  return (
    <div className="infraedge">
      <Navbar suffix="InfraEdge" activePath="/infraedge" />
      <main>
        <IeHeroSection />
        <IeOfferSection />
        <IeProblemSection />
        <IeMeetSection />
        <IeGlimpseSection />
        <IeServicesSection />
        <IeHowSection />
        <IeJourneySection />
        <IeBrandsSection />
        <IeCtaSection />
      </main>
      <Footer suffix="InfraEdge" />
      <IeOfferSection end />
    </div>
  );
}
