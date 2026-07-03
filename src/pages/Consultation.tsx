import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { ConsultHero } from '../components/consultation/ConsultHero';
import { ConsultOfferings } from '../components/consultation/ConsultOfferings';
import { ConsultGrowthStories } from '../components/consultation/ConsultGrowthStories';
import { ConsultPartners } from '../components/consultation/ConsultPartners';
import { ConsultCta } from '../components/consultation/ConsultCta';
import { ConsultFooter } from '../components/consultation/ConsultFooter';

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
        <ConsultHero />
        <ConsultOfferings />
        <ConsultGrowthStories />
        <ConsultPartners />
        <ConsultCta />
      </main>

      <ConsultFooter />
    </div>
  );
}
