import { useState, useEffect } from 'react';
import { LightRays } from '../../../common/LightRays';

const WORDS = ["real estate", "architecture", "interior design", "construction"];

export function HeroSection() {
  const [visible, setVisible] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      // Slide out current word
      setVisible(false);
      timeoutId = setTimeout(() => {
        // Switch word while hidden, then slide in
        setDisplayIndex((prev) => (prev + 1) % WORDS.length);
        setVisible(true);
      }, 400);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative pt-[120px] md:pt-[150px] px-0 pb-0 text-center overflow-hidden">
      {/* Background elements */}
      <img
        className="absolute top-0 left-0 w-full h-[619px] object-cover object-top opacity-55 pointer-events-none z-0"
        src="/assets/images/common/hero-bg-stars.webp"
        alt=""
      />
      <LightRays theme="blue" className="absolute top-0 left-0 w-full h-[640px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1025px] mx-auto px-5 md:px-0 flex flex-col items-center">
        <style>{`
          @keyframes wordSlideIn {
            from { opacity: 0; transform: translateY(18px); filter: blur(4px); }
            to   { opacity: 1; transform: translateY(0px);  filter: blur(0px); }
          }
          @keyframes wordSlideOut {
            from { opacity: 1; transform: translateY(0px);  filter: blur(0px); }
            to   { opacity: 0; transform: translateY(-18px); filter: blur(4px); }
          }
          .word-animate-in  { animation: wordSlideIn  0.42s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .word-animate-out { animation: wordSlideOut 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards; }
        `}</style>
        <h1 className="font-head font-medium text-[30px] sm:text-[34px] md:text-[48px] lg:text-[58px] xl:text-[72px] leading-[1.2] md:leading-[1.1] lg:leading-[1.05] tracking-[-1px] lg:tracking-[-1.66px] text-white words">
          <span className="w-src">The future of</span>{' '}
          <span
            key={displayIndex}
            className={`font-serif italic text-[#7ebaff] inline-block ${visible ? 'word-animate-in' : 'word-animate-out'}`}
          >
            {WORDS[displayIndex]}
          </span>
          <br />
          <span className="w-src">growth starts here.</span>
        </h1>

        <p className="text-[#aaaaaa] font-head font-normal text-[14px] md:text-[16.6px] leading-[1.7] max-w-[560px] mx-auto mt-6 reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          We transform your traditional business into a digitally strong brand, enabling a 360° growth ecosystem to thrive in the new era.
        </p>


      </div>
      <img
        className="relative block w-full max-w-[1440px] mx-auto mt-11 md:mt-12 px-0 md:px-10 reveal z-10"
        style={{ '--d': '.4s' } as React.CSSProperties}
        src="/assets/images/infraedge/hero-city-skyline.webp"
        alt="City skyline"
      />
    </section>
  );
}

export default HeroSection;

