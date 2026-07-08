import { CheckCircle } from 'lucide-react';
import { CALENDLY } from '../../../utils/constants/constants';
import { Button } from '../../../common/button/homeButton';

export function AboutSection() {
  return (
    <section className="relative pt-10 pb-[60px] lg:py-20" id="about">
      <div className="container px-5 md:px-10 mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,543px)_1fr] gap-[44px] lg:gap-16 items-center">
          {/* Left Photo Container */}
          <div className="relative w-full aspect-[2172/1752] rounded-[20px] overflow-hidden reveal">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/images/home/about-team-award.webp"
              alt="The MagicMond team receiving an award"
            />
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="font-head font-medium text-[20px] xs:text-[19px] sm:text-[22px] lg:text-[38px] leading-[1.3] lg:leading-[46px] tracking-[-0.5px] lg:tracking-[-1.2px] text-white reveal">
              We're one of India's top <br />
              <span className="text-[#E0B6FF]">
                Digital growth teams, driven <br />
                by Marketing, Design and Tech.
              </span>
            </h2>
            <p
              className="mt-3.5 lg:mt-[18px] font-body text-[13px] lg:text-[16px] leading-[22px] lg:leading-[26px] text-white/60 max-w-[520px] text-left reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              At magicmond, we're transforming traditional businesses into digitally strong brands that drive growth.
            </p>
            <ul className="mt-7 grid gap-3.5">
              {[
                '8 yrs+ experience in scaling brands digitally',
                'Acquired 10 Cr+ customers',
                'Generated 500 Cr+ in revenue.'
              ].map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body font-medium text-[14.5px] lg:text-[16px] leading-[22px] lg:leading-[26px] tracking-[-0.2px] text-white/60 reveal"
                  style={{ '--d': `${0.1 * (i + 1)}s` } as React.CSSProperties}
                >
                  <CheckCircle size={20} className="text-white fill-[#692083] shrink-0 mt-[2px] lg:mt-[3px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 sm:gap-6 mt-8 reveal" style={{ '--d': '.4s' } as React.CSSProperties}>
              <Button
                variant="small"
                href={CALENDLY}
                className="w-[160px] sm:w-[191px] border border-white/15 shadow-[0_4px_20px_rgba(105,32,131,0.3)] hover:shadow-[0_4px_25px_rgba(125,39,156,0.5)]"
              >
                Know more
              </Button>
              <div className="flex flex-col gap-0.5 shrink-0">
                <div className="flex text-[#c055e5] gap-0.5 text-[14px] sm:text-[15px]">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-[11.5px] sm:text-[12.5px] text-white/60 font-inter font-medium tracking-wide">
                  200+ Agencies Rated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
export default AboutSection;
