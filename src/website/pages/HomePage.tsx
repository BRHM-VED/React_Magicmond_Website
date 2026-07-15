import { useReveal } from '../../hooks/useReveal';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { Seo } from '../../common/Seo';
import { OrganizationSchema, WebPageSchema } from '../../common/JsonLd';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { UspTickerSection } from '../components/home/UspTickerSection';
import { StatsSection } from '../components/home/StatsSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { FoundersSection } from '../components/home/FoundersSection';
import { CaseStudiesCarousel } from '../components/home/CaseStudiesCarousel';
import { BrandsSection } from '../components/home/BrandsSection';
import { CtaSection } from '../components/home/CtaSection';

export default function Home() {
  useReveal();

  return (
    <>
      <Seo
        title="App Development &amp; Marketing Company in Mumbai"
        description="MagicMond is a Mumbai-based app development, UI/UX design, website development &amp; performance marketing company. 20+ brands scaled. Get a free consultation."
        canonical="https://magicmond.com/"
      />
      <OrganizationSchema />
      <WebPageSchema
        name="MagicMond — App Development &amp; Marketing Company in Mumbai"
        description="MagicMond is a Mumbai-based app development, UI/UX design, website development &amp; performance marketing company. 20+ brands scaled."
        url="https://magicmond.com/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <UspTickerSection />
        <StatsSection />
        <ProcessSection />
        <CaseStudiesCarousel />
        <FoundersSection />
        <BrandsSection />
        <CtaSection />
      </main>
      <Footer
        gradientColor="rgba(193, 86, 230, 0.45)"
        wordmarkColor="#C156E6"
      />
    </>
  );
}

