import { useEffect, useState } from 'react';
import { useTicker } from '../../../hooks/useTicker';
import { FONTS } from '../../../utils/constants/fonts';

const desktopItems = [
  "<s>Services</s> Tailored solution",
  "results that, speak.",
  "conversion focused",
  "fullstack digital partner",
  "Omnichannel presence",
];

const mobileItems = [
  "Tailored solution",
  "results that, speak.",
  "conversion focused",
];

export function UspTickerSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsList = isMobile ? mobileItems : desktopItems;
  const ticker = useTicker(itemsList.length, 2000);
  const tickerItems = [...itemsList, ...itemsList, ...itemsList];

  return (
    <section className="py-20 md:py-[120px] bg-[#0e081d]">
      <div className="container px-5 md:px-10 mx-auto max-w-[1425px]">
        <div className="grid grid-cols-1 md:grid-cols-[476px_1fr] items-center gap-[20px] md:gap-16">

          {/* Heading — left-aligned on mobile */}
          <div className="relative w-full md:max-w-[476px]">
            <h2 className={`${FONTS.head} font-semibold text-[32px] md:text-[48px] leading-[38px] md:leading-[55px] tracking-[-1px] md:tracking-[-1.86px] text-white text-left reveal`}>
              {/* Sparkle Icon - white color */}
              <img
                className="absolute top-[-30px] md:top-[-45px] left-[-6px] md:left-[-15px] w-[34px] md:w-[43px] h-[37px] md:h-[47px] select-none pointer-events-none brightness-0 invert"
                src="/assets/icons/sparkle.svg"
                alt=""
              />

              Not your usual
              <span className={`${FONTS.serif} italic block text-[#e0b6ff] text-[32px] md:text-[48px] leading-[38px] md:leading-[55px] mt-1`}>
                boutique marketing agency
              </span>
            </h2>

            {/* Desktop-only curly arrow — positioned bridging heading to ticker column */}
            <img
              className="absolute right-[-15px] bottom-[-100px] md:left-[350px] md:top-[-50px] md:right-auto md:bottom-auto w-[110px] md:w-[214px] rotate-[110deg] md:rotate-0 select-none pointer-events-none z-20"
              src="/assets/icons/arrow-curly.svg"
              alt=""
            />
          </div>

          {/* Ticker */}
          <div className="relative">

            <div
              className="h-[150px] md:h-[353px] overflow-hidden"
              aria-label="What makes us different"
              ref={ticker.viewportRef}
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 42%, black 58%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 42%, black 58%, transparent 100%)',
              }}
            >
              <div
                className="flex flex-col gap-2 md:gap-3 transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.2,1)]"
                ref={ticker.listRef}
                style={{ transform: `translateY(${ticker.offset}px)`, transition: ticker.animated ? undefined : 'none' }}
              >
                {tickerItems.map((item, i) => {
                  const isActive = i === ticker.index;
                  return (
                    <div
                      key={i}
                      className={`${FONTS.head} font-semibold text-[28px] sm:text-[30px] md:text-[50px] tracking-[-1px] leading-[48px] md:leading-[62.4px] whitespace-nowrap transition-colors duration-500 text-left ${isActive
                        ? 'bg-gradient-to-r from-[#e0b6ff] via-[#c055e5] to-[#9747ff] bg-clip-text text-transparent'
                        : 'text-white/35'
                        }`}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default UspTickerSection;
