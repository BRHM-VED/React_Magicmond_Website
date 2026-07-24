import { SectionHeading } from '../../../common/SectionHeading';
import { MotionStagger, MotionStaggerItem } from '../../../common/motion/MotionStagger';
import { MotionReveal } from '../../../common/motion/MotionReveal';
import { slideLeft } from '../../../utils/constants/motion';
import { FONTS } from '../../../utils/constants/fonts';
import { itPillars, itPillarsBanner, itPillarsIntro } from '../../../data/itServices/itServices';
import { IconBadge } from './IconBadge';

export function PillarsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHeading
          titleNormal="Who"
          titleSerif="We Are"
          description={itPillarsIntro}
          align="left"
        />

        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-10">
          {itPillars.map((pillar, index) => (
            <MotionStaggerItem
              key={pillar.title}
              index={index}
              className="rounded-[16px] border border-white/5 bg-gradient-to-b from-[#16101f] to-[#1c0c29] p-6 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <IconBadge icon={pillar.icon} />
              <h3 className={`${FONTS.head} text-[18px] font-semibold text-white mt-4`}>{pillar.title}</h3>
              <p className={`${FONTS.body} text-[14px] text-white/60 mt-2 leading-[1.65]`}>{pillar.desc}</p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionReveal
          variants={slideLeft}
          className="mt-8 rounded-[14px] bg-[#1c0c28] border border-[#c055e5]/20 px-6 py-5 text-center md:text-left"
        >
          <p className={`${FONTS.body} text-[15px] md:text-[16px] leading-[1.6]`}>
            <span className="text-[#c055e5] font-semibold">{itPillarsBanner.highlight}</span>
            <span className="text-white/80">{itPillarsBanner.rest}</span>
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
export default PillarsSection;
