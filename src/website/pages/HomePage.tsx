import { useReveal } from '../../hooks/useReveal';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { UspTickerSection } from '../components/home/UspTickerSection';
import { StatsSection } from '../components/home/StatsSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { CaseStudiesCarousel } from '../components/home/CaseStudiesCarousel';
import { FoundersSection } from '../components/home/FoundersSection';
import { BrandsSection } from '../components/home/BrandsSection';
import { CtaSection } from '../components/home/CtaSection';

export default function Home() {
  useReveal();

  return (
    <>
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
      <Footer />
    </>
  );
}
