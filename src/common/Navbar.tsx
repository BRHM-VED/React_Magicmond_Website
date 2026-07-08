import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { navLinks } from '../data/common/navData';
import { CALENDLY } from '../utils/constants/constants';
import { Button } from './button/homeButton';

interface Props {
  /** Suffix shown after the wordmark, e.g. "InfraEdge" or "Sports". */
  suffix?: string;
  /** Route whose nav link should be highlighted. */
  activePath?: string;
}

/** Smoothly scrolls to an element by id, accounting for fixed navbar height. */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const topOffset = window.innerWidth >= 768 ? 120 : 110;
  const rect = el.getBoundingClientRect();
  const offset = rect.top + window.scrollY - topOffset;
  window.scrollTo({ top: offset, behavior: 'smooth' });
  return true;
}

export function Navbar({ suffix, activePath }: Props) {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  /**
   * Handles all nav link clicks that may contain a hash.
   * - If the target section exists on the current page → scroll locally.
   * - If not → navigate to the path (usually /) and scroll after the route renders.
   */
  const handleNavClick = (to: string, e?: React.MouseEvent) => {
    setOpen(false);
    setServicesExpanded(false);

    if (!to.includes('#')) return; // plain route, let react-router handle it

    e?.preventDefault();

    const hashIndex = to.indexOf('#');
    const hash = to.substring(hashIndex + 1); // e.g. "about", "service"
    const basePath = to.substring(0, hashIndex) || '/'; // e.g. "/"

    // Try to scroll locally first
    if (scrollToId(hash)) return;

    // Section not on this page → navigate to basePath then scroll
    navigate(basePath);
    // After navigation, wait a tick for the DOM to update then scroll
    setTimeout(() => scrollToId(hash), 80);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      if (window.innerWidth < 900) {
        e.preventDefault();
        setServicesExpanded((prev) => !prev);
      } else {
        handleNavClick('/#service', e);
      }
    } else {
      handleNavClick('/#service', e);
    }
  };

  return (
    <>
      <header className="md:absolute fixed md:bg-transparent md:border-none md:backdrop-blur-none bg-[#010502]/75 backdrop-blur-md border-b border-white/5 top-0 left-0 right-0 z-[999] h-[64px] flex items-center px-5 md:px-10 transition-colors duration-300">
        <div className="w-full flex items-center justify-between gap-5">

          {/* Mobile: Hamburger Button on Left (2 lines) */}
          <button
            className="flex md:hidden flex-col gap-[6px] p-2 focus:outline-none relative z-50"
            aria-label="Menu"
            onClick={() => setOpen(true)}
          >
            <span className="w-[22px] h-[2px] bg-white rounded-sm"></span>
            <span className="w-[22px] h-[2px] bg-white rounded-sm"></span>
          </button>

          {/* Desktop Logo on Left */}
          <Link
            className="hidden md:flex items-center gap-2 font-head font-semibold text-[18.9px] text-white select-none"
            to="/"
            onClick={() => { setOpen(false); setServicesExpanded(false); }}
          >
            <img src="/assets/icons/logo-wand.svg" alt="MagicMond" className="w-[28px] h-[28px]" />
            <span>MagicMond</span>
            {suffix && (
              <>
                &nbsp;<span className="font-normal opacity-95 text-white/80">{suffix}</span>
              </>
            )}
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const isServices = l.label === 'Services';
              return (
                <div
                  key={l.label}
                  className="group relative flex items-center"
                >
                  <Link
                    className={`
                      font-inter font-medium text-[16px] tracking-[-0.32px] 
                      text-white/90 hover:text-white transition-colors duration-200 
                      flex items-center gap-1
                      ${activePath === l.to ? 'text-white font-semibold' : ''}
                    `}
                    to={l.to}
                    onClick={isServices ? handleServicesClick : (e) => handleNavClick(l.to, e)}
                  >
                    <span className="relative flex items-center">
                      <span className="nav__link-text">{l.label}</span>
                      {l.badge && (
                        <span className="absolute left-[calc(70%)] top-[-8px] bg-white text-[#c055e5] font-semibold text-[6px] px-1.5 py-[1px] rounded-[4px] shadow-[0_2px_6px_rgba(0,0,0,0.15)] whitespace-nowrap select-none">
                          {l.badge}
                        </span>
                      )}
                    </span>
                    {isServices && isHomePage && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 text-white/80 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {/* Services Dropdown (Desktop) */}
                  {isServices && isHomePage && (
                    <div className="hidden md:flex absolute top-full left-1/2 -translate-x-1/2 translate-y-3 bg-[#080412]/95 backdrop-blur-md border border-white/8 rounded-xl p-2.5 min-w-[280px] flex-col gap-0.5 shadow-2xl transition-all duration-200 z-[1000] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-1">
                      <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#brand-identity" onClick={(e) => handleNavClick('/#brand-identity', e)}>Brand Identity Development</Link>
                      <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#website-design" onClick={(e) => handleNavClick('/#website-design', e)}>Website Design & Development</Link>
                      <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#content-marketing" onClick={(e) => handleNavClick('/#content-marketing', e)}>Content Marketing</Link>
                      <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#creative-strategy" onClick={(e) => handleNavClick('/#creative-strategy', e)}>Creative Strategy & Design</Link>
                      <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#growth-marketing" onClick={(e) => handleNavClick('/#growth-marketing', e)}>Performance / Growth Marketing</Link>
                      <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#erp-solutions" onClick={(e) => handleNavClick('/#erp-solutions', e)}>ERP Solutions & App Development</Link>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Get Started Button on Right (Desktop & Mobile header) */}
          <Button
            variant="header"
            href={CALENDLY}
            className="relative z-50"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Overlay */}
      <div
        className={`
          fixed inset-0 z-[1000] bg-[#1d072b] px-6 py-5 flex flex-col justify-between
          transition-transform duration-300 ease-in-out md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          {/* Drawer Top Row */}
          <div className="flex items-center justify-between w-full h-[64px] border-b border-white/5">
            {/* Close Button on Left */}
            <button
              className="p-2 text-white/90 hover:text-white focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>

            {/* Logo on Right */}
            <Link
              className="flex items-center gap-2 font-head font-semibold text-[18.9px] text-white select-none"
              to="/"
              onClick={() => setOpen(false)}
            >
              <img src="/assets/icons/logo-wand.svg" alt="MagicMond" className="w-[28px] h-[28px]" />
              <span>MagicMond</span>
            </Link>
          </div>

          {/* Drawer Menu Items */}
          <div className="flex flex-col gap-[18px] mt-[25px] text-left pl-3">
            {navLinks.map((l) => {
              const isServices = l.label === 'Services';
              return (
                <div key={l.label} className="flex flex-col items-start w-full">
                  <div className="relative w-full">
                    <Link
                      className={`
                        font-inter font-medium text-[20px] tracking-[-0.37px] 
                        text-white/90 hover:text-white transition-colors duration-200 
                        flex items-center justify-between w-full py-1
                        ${activePath === l.to ? 'text-white font-semibold' : ''}
                      `}
                      to={l.to}
                      onClick={isServices ? handleServicesClick : (e) => handleNavClick(l.to, e)}
                    >
                      <span className="relative flex items-center">
                        {l.label}
                        {l.badge && (
                          <span className="absolute left-[calc(100%+6px)] top-[-6px] bg-white text-[#c055e5] font-semibold text-[9px] px-1.5 py-[2px] rounded-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] whitespace-nowrap tracking-wide select-none">
                            {l.badge}
                          </span>
                        )}
                      </span>
                      {isServices && isHomePage && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 text-white/80 ${servicesExpanded ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>
                  </div>

                  {/* Mobile Accordion Dropdown */}
                  {isServices && isHomePage && (
                    <div
                      className={`
                        flex flex-col gap-3 pl-4 mt-2 transition-all duration-300 ease-in-out w-full
                        ${servicesExpanded ? "max-h-[500px] opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"}
                      `}
                    >
                      <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-1 text-left" to="/#brand-identity" onClick={(e) => handleNavClick('/#brand-identity', e)}>Brand Identity Development</Link>
                      <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-1 text-left" to="/#website-design" onClick={(e) => handleNavClick('/#website-design', e)}>Website Design & Development</Link>
                      <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-1 text-left" to="/#content-marketing" onClick={(e) => handleNavClick('/#content-marketing', e)}>Content Marketing</Link>
                      <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-1 text-left" to="/#creative-strategy" onClick={(e) => handleNavClick('/#creative-strategy', e)}>Creative Strategy & Design</Link>
                      <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-1 text-left" to="/#growth-marketing" onClick={(e) => handleNavClick('/#growth-marketing', e)}>Performance / Growth Marketing</Link>
                      <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-1 text-left" to="/#erp-solutions" onClick={(e) => handleNavClick('/#erp-solutions', e)}>ERP Solutions & App Development</Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Drawer Bottom CTA Button */}
        <div className="w-full pb-4">
          <Button
            variant="header"
            href={CALENDLY}
            className="w-full h-[48px] rounded-[10px] bg-[#692083] hover:bg-[#7d279c] flex items-center justify-center text-white font-head font-medium text-[16px]"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
