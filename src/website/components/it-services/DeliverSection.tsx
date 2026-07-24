import { SectionHeading } from '../../../common/SectionHeading';
import { MotionStagger, MotionStaggerItem } from '../../../common/motion/MotionStagger';
import { scaleIn } from '../../../utils/constants/motion';
import { m, useReducedMotion } from 'framer-motion';
import { FONTS } from '../../../utils/constants/fonts';
import { itDeliver } from '../../../data/itServices/itServices';
import { IconBadge } from './IconBadge';

export function DeliverSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHeading
          titleNormal="What"
          titleSerif="We Deliver"
          description="The same team, end to end — from first sketch to post-launch growth."
          align="left"
        />

        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10">
          {itDeliver.map((service, index) => (
            <MotionStaggerItem
              key={service.title}
              index={index}
              className="rounded-[16px] border border-white/5 bg-gradient-to-b from-[#16101f] to-[#1c0c29] p-6"
            >
              <div className="flex items-center gap-4 justify-center md:justify-start">
                {reduceMotion ? (
                  <IconBadge icon={service.icon} />
                ) : (
                  <m.div variants={scaleIn}>
                    <IconBadge icon={service.icon} />
                  </m.div>
                )}
                <h3 className={`${FONTS.head} text-[17px] font-semibold text-white`}>{service.title}</h3>
              </div>
              <p className={`${FONTS.body} text-[14px] text-white/60 mt-3 leading-[1.65] text-center md:text-left`}>
                {service.desc}
              </p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
export default DeliverSection;
