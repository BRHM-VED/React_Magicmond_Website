import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { HeroSection } from '../components/consultation/HeroSection';
import { OfferingsSection } from '../components/consultation/OfferingsSection';
import { GrowthStoriesSection } from '../components/consultation/GrowthStoriesSection';
import { PartnersSection } from '../components/consultation/PartnersSection';
import { CtaSection } from '../components/consultation/CtaSection';
import { FooterSection } from '../components/consultation/FooterSection';

export default function Consultation() {
  usePageMeta(
    'MagicMond',
    'Build & Grow your business online. Need help building an identity for your brand or a website that converts? At MagicMond, we do it all.'
  );
  useReveal();

  return (
    <div className="consult">
      {/* Pill navigation */}
      <header className="c-nav">
        <Link className="c-nav__logo" to="/">
          <img src="/assets/icons/logo-wand.svg" alt="" />
          MagicMond
        </Link>
        <nav className="c-nav__links">
          <a href="#offerings">Offerings</a>
          <a href="#about-us">About Us</a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <OfferingsSection />
        <GrowthStoriesSection />
        <PartnersSection />
        <CtaSection />
      </main>

      <FooterSection />
    </div>
  );
}
