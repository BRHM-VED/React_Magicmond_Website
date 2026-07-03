import { useReveal } from '../hooks/useReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { SpHeroSection } from '../components/sports/SpHeroSection';
import { SpVisionSection } from '../components/sports/SpVisionSection';
import { SpChannelSection } from '../components/sports/SpChannelSection';
import { SpAthletesSection } from '../components/sports/SpAthletesSection';
import { SpServicesSection } from '../components/sports/SpServicesSection';
import { SpCasesSection } from '../components/sports/SpCasesSection';
import { SpBrandsSection } from '../components/sports/SpBrandsSection';
import { SpCtaSection } from '../components/sports/SpCtaSection';

export default function Sports() {
  usePageMeta(
    'MagicMond Sports',
    'Connecting ambitious brands to the world of cricket. From global tournaments to digital cricket platforms — we help brands unlock visibility, engagement, and trust without breaking the bank.'
  );
  useReveal();

  return (
    <div className="sports">
      <Navbar suffix="Sports" activePath="/sports" />
      <main>
        <SpHeroSection />
        <SpVisionSection />
        <SpChannelSection />
        <SpAthletesSection />
        <SpServicesSection />
        <SpCasesSection />
        <SpBrandsSection />
        <SpCtaSection />
      </main>
      <Footer suffix="Sports" />
    </div>
  );
}
