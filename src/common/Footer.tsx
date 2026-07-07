import { Link } from 'react-router-dom';
import { CALENDLY } from '../utils/constants/constants';
import { FONTS } from '../utils/constants/fonts';

interface Props {
  suffix?: string;
  gradientColor?: string;
  wordmarkColor?: string;
}

export function Footer({
  gradientColor = 'rgba(193, 86, 230, 0.45)',
  wordmarkColor = '#C156E6',
}: Props) {
  return (
    <footer
      className="relative overflow-hidden pt-24 lg:pt-[110px] pb-0 px-5 md:px-10 z-20 border-t border-white/[0.03]"
      style={{
        background: `radial-gradient(900px 420px at 0% 0%, ${gradientColor}, transparent 65%), #0a0517`,
      }}
    >
      <div className="mx-auto max-w-[1200px] w-full">
        {/* Main Grid content layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 pb-16">
          {/* Brand info column */}
          <div className="max-w-[420px] w-full flex flex-col items-start">
            <div className={`${FONTS.head} font-semibold text-[26px] md:text-[34px] text-white flex items-center gap-2.5`}>
              <img
                src="/assets/icons/logo-wand-footer.svg"
                alt=""
                className="w-[47px] h-[45px] select-none pointer-events-none"
              />
              <span>MagicMond</span>
            </div>

            {/* Tagline matching Figma 325-5129 / 325-2083 */}
            <p className={`${FONTS.body} mt-4 tracking-[-0.26px] text-[#a7adbe] text-[16px] md:text-[28px] leading-[1.4] max-w-[534px]`}>
              Let's create magic together! 🪄
            </p>

            {/* Social handles list matching Figma (icons directly below tagline, no title) */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/magicmondglobal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-105 transition-transform duration-300"
              >
                <img src="/assets/icons/social-linkedin.svg" alt="" className="w-10 h-10 md:w-[55px] md:h-[55px]" />
              </a>
              <a
                href="https://www.instagram.com/reidiusinfra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-105 transition-transform duration-300"
              >
                <img src="/assets/icons/social-instagram.svg" alt="" className="w-10 h-10 md:w-[55px] md:h-[55px]" />
              </a>
            </div>

            {/* Copyright matching Figma 325-5126 */}
            <p className={`${FONTS.body} mt-10 text-[14px] sm:text-[23.4px] text-[#a7adbe] whitespace-nowrap`}>
              Magicmond Inc. ©2025, All Rights Reserved
            </p>
          </div>

          {/* Navigation links columns matching Figma 325-5162 */}
          <div className="flex gap-[60px] md:gap-[120px] lg:mr-[100px] shrink-0 mt-6 lg:mt-0">
            {/* Column 1: Home */}
            <div className="flex flex-col">
              <p className={`${FONTS.body} font-medium text-[18px] md:text-[26px] text-[#f0f1f4]`}>
                Home
              </p>
              <ul className="mt-[10px] md:mt-[22px] flex flex-col gap-[12px] md:gap-[23.4px]">
                <li>
                  <Link to="/#about" className={`${FONTS.body} text-[15px] md:text-[23.4px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#service" className={`${FONTS.body} text-[15px] md:text-[23.4px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/#process" className={`${FONTS.body} text-[15px] md:text-[23.4px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    Process
                  </Link>
                </li>
                <li>
                  <Link to="/#comparison" className={`${FONTS.body} text-[15px] md:text-[23.4px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    Comparison
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact */}
            <div className="flex flex-col">
              <p className={`${FONTS.body} font-medium text-[18px] md:text-[26px] text-[#f0f1f4]`}>
                Contact
              </p>
              <ul className="mt-[10px] md:mt-[22px] flex flex-col gap-[12px] md:gap-[23.4px]">
                <li>
                  <a href={CALENDLY} className={`${FONTS.body} text-[15px] md:text-[23.4px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/#faq" className={`${FONTS.body} text-[15px] md:text-[23.4px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    FAQ’s
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Brand Wordmark at bottom matching Figma 325-5181 / 325-2069 */}
        <div
          className="footer-brand-wordmark-bottom text-center select-none font-instrument whitespace-nowrap translate-y-[8%] md:translate-y-[15%]"
          style={{
            color: wordmarkColor,
            WebkitTextStrokeWidth: '1.35px',
            WebkitTextStrokeColor: wordmarkColor,
            fontSize: 'clamp(60px, 15vw, 215px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '0.8',
            letterSpacing: '-1px',
          }}
        >
          magicmond
        </div>
      </div>
    </footer>
  );
}

export default Footer;
