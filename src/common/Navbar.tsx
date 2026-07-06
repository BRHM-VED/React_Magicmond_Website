import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navLinks } from '../data/nav.data';
import { CALENDLY } from '../utils/constants/constants';
import { Button } from './button/homeButton';

interface Props {
  /** Suffix shown after the wordmark, e.g. "InfraEdge" or "Sports". */
  suffix?: string;
  /** Route whose nav link should be highlighted. */
  activePath?: string;
}

export function Navbar({ suffix, activePath }: Props) {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const handleServicesClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 900) {
      e.preventDefault();
      setServicesExpanded((prev) => !prev);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] h-[64px] flex items-center bg-[#010502]/75 backdrop-blur-md border-b border-white/5 px-5 md:px-10 transition-colors duration-300">
      <div className="w-full flex items-center justify-between gap-5">

        {/* Logo */}
        <Link
          className="flex items-center gap-2 font-head font-semibold text-[18.9px] text-white select-none"
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

        <nav
          className={`
            fixed md:static top-[64px] left-0 right-0 
            bg-[#04020c]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none 
            border-b border-white/5 md:border-b-0 
            px-6 py-6 md:p-0 
            flex flex-col md:flex-row items-stretch md:items-center gap-5 md:gap-8 
            transition-all duration-300 ease-in-out z-[998] md:z-auto 
            ${open ? "translate-y-0 opacity-100 pointer-events-auto" : "max-md:-translate-y-full max-md:opacity-0 max-md:pointer-events-none"}
          `}
        >
          {navLinks.map((l) => {
            const isServices = l.label === 'Services';
            return (
              <div
                key={l.label}
                className="group relative flex flex-col md:flex-row md:items-center"
              >
                <Link
                  className={`
                    font-inter font-medium text-[16px] tracking-[-0.32px] 
                    text-white/90 hover:text-white transition-colors duration-200 
                    py-2 md:py-0 flex items-center justify-between md:justify-start gap-1 w-full
                    ${activePath === l.to ? 'text-white font-semibold' : ''}
                  `}
                  to={l.to}
                  onClick={isServices ? handleServicesClick : () => { setOpen(false); setServicesExpanded(false); }}
                >
                  <span className="nav__link-text">{l.label}</span>
                  {isServices && (
                    <ChevronDown
                      size={14}
                      className={`
                        transition-transform duration-200 text-white/80
                        ${servicesExpanded ? "rotate-180" : "group-hover:rotate-180"}
                      `}
                    />
                  )}
                  {l.badge && (
                    <span className="bg-[#cfe0ff] text-[#0055ff] font-bold text-[8px] px-1.5 py-0.5 rounded-sm whitespace-nowrap ml-1">
                      {l.badge}
                    </span>
                  )}
                </Link>

                {/* Services Dropdown (Desktop) */}
                {isServices && (
                  <div className="hidden md:flex absolute top-full left-1/2 -translate-x-1/2 translate-y-3 bg-[#080412]/95 backdrop-blur-md border border-white/8 rounded-xl p-2.5 min-w-[230px] flex-col gap-0.5 shadow-2xl transition-all duration-200 z-[1000] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-1">
                    <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#service" onClick={() => { setOpen(false); setServicesExpanded(false); }}>Brand Identity</Link>
                    <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#service" onClick={() => { setOpen(false); setServicesExpanded(false); }}>Growth Marketing</Link>
                    <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#service" onClick={() => { setOpen(false); setServicesExpanded(false); }}>Website Design</Link>
                    <Link className="font-inter text-[14.5px] font-medium text-white/80 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/8 transition-colors duration-200 text-left whitespace-nowrap" to="/#service" onClick={() => { setOpen(false); setServicesExpanded(false); }}>WhatsApp Outreach</Link>
                  </div>
                )}

                {/* Services Dropdown (Mobile accordion) */}
                {isServices && (
                  <div
                    className={`
                      md:hidden flex flex-col gap-1 pl-4 mt-2 transition-all duration-300 ease-in-out
                      ${servicesExpanded ? "max-h-[500px] opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"}
                    `}
                  >
                    <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-2 text-left" to="/#service" onClick={() => { setOpen(false); setServicesExpanded(false); }}>Brand Identity</Link>
                    <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-2 text-left" to="/#service" onClick={() => { setOpen(false); setServicesExpanded(false); }}>Growth Marketing</Link>
                    <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-2 text-left" to="/#service" onClick={() => { setOpen(false); setServicesExpanded(false); }}>Website Design</Link>
                    <Link className="font-inter text-[15px] font-medium text-white/70 hover:text-white py-2 text-left" to="/#service" onClick={() => { setOpen(false); setServicesExpanded(false); }}>WhatsApp Outreach</Link>
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile CTA inside Drawer */}
          <Button
            variant="header"
            href={CALENDLY}
            className="md:hidden flex w-full mt-4"
            onClick={() => { setOpen(false); setServicesExpanded(false); }}
          >
            Get Started
          </Button>
        </nav>

        {/* Desktop CTA (hidden on mobile) */}
        <Button
          variant="header"
          href={CALENDLY}
          className="hidden md:inline-flex"
        >
          Get Started
        </Button>

        {/* Mobile Toggle Button */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-2 focus:outline-none"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}></span>
          <span className={`w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
        </button>
      </div>
    </header>
  );
}
