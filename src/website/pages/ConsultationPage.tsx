import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
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
    <div className="bg-[#07030f] font-body text-white min-h-screen relative w-full overflow-hidden">
      {/* Pill navigation */}
      <header className="fixed top-[14px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-40px)] max-w-[1080px] flex items-center justify-between px-6 py-3 rounded-[14px] bg-[#0e081d]/75 backdrop-blur-[14px] border border-white/[0.08]">
        <Link className="flex items-center gap-2 font-inter font-semibold text-[16px] text-white" to="/">
          <img className="w-6 h-6" src="/assets/icons/logo-wand.svg" alt="" />
          MagicMond
        </Link>
        <nav className="flex gap-[20px] md:gap-[34px] items-center">
          <a className="text-[16px] text-white opacity-90 hover:opacity-100 transition-opacity duration-200" href="#offerings">Offerings</a>
          <a className="text-[16px] text-white opacity-90 hover:opacity-100 transition-opacity duration-200" href="#about-us">About Us</a>
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
