import { Link } from 'react-router-dom';
import { CALENDLY } from '../utils/constants/constants';
import { FONTS } from '../utils/constants/fonts';

interface Props {
  suffix?: string;
}

export function Footer({ suffix }: Props) {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-0 px-5 md:px-10 z-20 border-t border-white/[0.03]"
      style={{
        background:
          'radial-gradient(900px 420px at 0% 0%, rgba(105, 32, 131, 0.55), transparent 65%), #0a0517',
      }}
    >
      <div className="mx-auto max-w-[1200px] w-full">
        {/* Main Grid content layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 pb-16">
          {/* Brand info column */}
          <div className="max-w-[380px] w-full flex flex-col items-start">
            <div className={`${FONTS.head} font-semibold text-[29px] text-white flex items-center gap-2.5`}>
              <img
                src="/assets/icons/logo-wand-footer.svg"
                alt=""
                className="w-[34px] h-[34px] select-none pointer-events-none"
              />
              <span>
                MagicMond
                {suffix ? (
                  <>
                    &nbsp;
                    <span className="font-normal text-[22px] text-white/80">
                      {suffix}
                    </span>
                  </>
                ) : null}
              </span>
            </div>

            {/* Tagline matching Figma 325-5129 */}
            <p className={`${FONTS.body} mt-4 text-[16px] leading-[26px] tracking-[-0.26px] text-white/60`}>
              At magicmond, we’re transforming traditional businesses into digitally strong brands that drive growth.
            </p>

            {/* Social handles list matching Figma 325-5139 */}
            <p className={`${FONTS.body} mt-[34px] text-[20px] leading-[1.6] text-white/60 font-medium`}>
              Our Social Handles
            </p>
            <div className="flex items-center gap-3 mt-3.5">
              <a
                href="https://www.linkedin.com/company/magicmondglobal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-[10px] bg-white/8 hover:bg-white/16 transition-all duration-300 flex items-center justify-center hover:-translate-y-[2px]"
              >
                <img src="/assets/icons/social-linkedin.svg" alt="" className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://x.com/magicmondglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-[10px] bg-white/8 hover:bg-white/16 transition-all duration-300 flex items-center justify-center hover:-translate-y-[2px]"
              >
                <img src="/assets/icons/social-x.svg" alt="" className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/reidiusinfra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-[10px] bg-white/8 hover:bg-white/16 transition-all duration-300 flex items-center justify-center hover:-translate-y-[2px]"
              >
                <img src="/assets/icons/social-instagram.svg" alt="" className="w-[18px] h-[18px]" />
              </a>
            </div>

            {/* Copyright matching Figma 325-5126 */}
            <p className={`${FONTS.body} mt-10 text-[14px] text-[#a7adbe]`}>
              Magicmond Inc. ©2025, All Rights Reserved
            </p>
          </div>

          {/* Navigation links columns matching Figma 325-5162 */}
          <div className="flex gap-[90px] md:gap-[120px] lg:mr-[100px] shrink-0">
            {/* Column 1: Home */}
            <div className="flex flex-col">
              <p className={`${FONTS.body} font-medium text-[20px] text-[#f0f1f4]`}>
                Home
              </p>
              <ul className="mt-[22px] flex flex-col gap-4">
                <li>
                  <Link to="/#about" className={`${FONTS.body} text-[16px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#service" className={`${FONTS.body} text-[16px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/#process" className={`${FONTS.body} text-[16px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    Process
                  </Link>
                </li>
                <li>
                  <Link to="/#comparison" className={`${FONTS.body} text-[16px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    Comparison
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact */}
            <div className="flex flex-col">
              <p className={`${FONTS.body} font-medium text-[20px] text-[#f0f1f4]`}>
                Contact
              </p>
              <ul className="mt-[22px] flex flex-col gap-4">
                <li>
                  <a href={CALENDLY} className={`${FONTS.body} text-[16px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/#faq" className={`${FONTS.body} text-[16px] text-[#a7adbe] hover:text-white transition-colors duration-250`}>
                    FAQ’s
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Brand Wordmark at bottom matching Figma 325-5181 */}
        <div className="footer__wordmark text-center select-none font-instrument text-[clamp(60px,15vw,215px)] letter-spacing-[-1px] line-height-[0.78] text-white/[0.03] whitespace-nowrap translate-y-[18%]">
          magicmond
        </div>
      </div>
    </footer>
  );
}

export default Footer;
