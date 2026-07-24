import { useEffect, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { LightRays } from '../../../common/LightRays';
import { Button } from '../../../common/button/homeButton';
import { MotionReveal } from '../../../common/motion/MotionReveal';
import { FONTS } from '../../../utils/constants/fonts';
import { CALENDLY } from '../../../utils/constants/constants';
import { itHero } from '../../../data/itServices/itServices';

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % itHero.rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section className="relative pt-[120px] md:pt-[150px] pb-16 md:pb-24 text-center overflow-hidden">
      {/* Background */}
      <img
        className="absolute top-0 left-0 w-full h-[619px] object-cover object-top opacity-55 pointer-events-none z-0"
        src="/assets/images/common/hero-bg-stars.webp"
        alt=""
      />
      <LightRays theme="purple" className="absolute top-0 left-0 w-full h-[640px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1025px] mx-auto px-5 md:px-10 flex flex-col items-center">
        <h1
          className={`${FONTS.head} font-medium text-[30px] sm:text-[34px] md:text-[48px] lg:text-[58px] xl:text-[72px] leading-[1.2] md:leading-[1.05] tracking-[-1px] text-white`}
        >
          {itHero.h1Normal}
          <br />
          <span className="inline-block relative">
            <AnimatePresence mode="wait">
              <m.span
                key={index}
                className={`${FONTS.serif} italic text-[#e0b6ff] inline-block`}
                initial={reduceMotion ? false : { y: 18, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={reduceMotion ? undefined : { y: -18, opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                {itHero.rotatingWords[index]}
              </m.span>
            </AnimatePresence>
          </span>
        </h1>

        <MotionReveal delay={0.15}>
          <p className={`${FONTS.head} text-[#aaaaaa] text-[14px] md:text-[16.6px] leading-[1.7] max-w-[560px] mx-auto mt-6`}>
            {itHero.answer}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.3} className="mt-8">
          <Button
            variant="large"
            href={CALENDLY}
            className="border border-white/20 shadow-[0_0_20px_rgba(105,32,131,0.5)] hover:shadow-[0_0_30px_rgba(192,85,229,0.8)] transition-all duration-300"
          >
            {itHero.cta}
          </Button>
        </MotionReveal>
      </div>
    </section>
  );
}
export default HeroSection;
