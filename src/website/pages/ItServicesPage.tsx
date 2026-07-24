import { LazyMotion, domAnimation } from 'framer-motion';
import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Navbar } from '../../common/Navbar';
import { Footer } from '../../common/Footer';
import { Seo } from '../../common/Seo';
import { ServiceSchema, FaqSchema } from '../../common/JsonLd';
import { CommonCtaSection } from '../../common/CommonCtaSection';
import { CALENDLY } from '../../utils/constants/constants';
import { itFaqs } from '../../data/itServices/itServices';
import { HeroSection } from '../components/it-services/HeroSection';
import { PillarsSection } from '../components/it-services/PillarsSection';
import { ImpactStatsSection } from '../components/it-services/ImpactStatsSection';
import { PortfolioSection } from '../components/it-services/PortfolioSection';
import { DeliverSection } from '../components/it-services/DeliverSection';
import { WhySection } from '../components/it-services/WhySection';
import { FaqSection } from '../components/it-services/FaqSection';

export default function ItServices() {
  const metaTitle = 'IT Services Company in Delhi';
  const metaDesc =
    'MagicMond is a Delhi-based IT services company building mobile apps, web platforms, ERP systems & e-commerce. 9 live products, 100M+ downloads. Get a free quote.';
  usePageMeta(`${metaTitle} | MagicMond`, metaDesc);
  // Only CommonCtaSection below uses the legacy .reveal CSS classes — this
  // page's own sections animate via framer-motion instead.
  useReveal();

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="bg-[#0e081d] min-h-screen text-white">
        <Seo title={metaTitle} description={metaDesc} canonical="https://magicmond.com/it-services" />
        <ServiceSchema
          name="IT Services"
          description={metaDesc}
          url="https://magicmond.com/it-services"
          serviceType={[
            'App Development',
            'Web Development',
            'ERP Systems',
            'E-commerce Development',
            'UI/UX Design',
            'Growth Marketing',
          ]}
        />
        <FaqSchema faqs={itFaqs} />
        <Navbar activePath="/it-services" />
        <main>
          <HeroSection />
          <PillarsSection />
          <ImpactStatsSection />
          <PortfolioSection />
          <DeliverSection />
          <WhySection />
          <FaqSection />
          <CommonCtaSection
            titleNormal="Let's build"
            titleItalic="your next product"
            description="From first sketch to app-store launch to post-launch growth — we'd love to hear what you're building."
            buttonText="Get a Free Consultation"
            buttonHref={CALENDLY}
            buttonType="home"
            raysTheme="cta"
            sectionBg="#0e081d"
          />
        </main>
        <Footer gradientColor="rgba(193, 86, 230, 0.45)" wordmarkColor="#C156E6" />
      </div>
    </LazyMotion>
  );
}
