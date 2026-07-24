import { useState } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../../../common/SectionHeading';
import { MotionReveal } from '../../../common/motion/MotionReveal';
import { FONTS } from '../../../utils/constants/fonts';
import { itFaqs } from '../../../data/itServices/itServices';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHeading titleNormal="Frequently" titleSerif="Asked Questions" align="center" />

        <MotionReveal className="max-w-[760px] mx-auto mt-10">
          {itFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="border-b border-white/8">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className={`${FONTS.head} text-[16px] md:text-[17px] font-medium text-white`}>{faq.q}</h3>
                  <Plus
                    size={18}
                    className={`text-[#e0b6ff] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      className="overflow-hidden"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <p className={`${FONTS.body} text-[14.5px] text-white/65 leading-[1.75] pb-5`}>{faq.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </MotionReveal>
      </div>
    </section>
  );
}
export default FaqSection;
