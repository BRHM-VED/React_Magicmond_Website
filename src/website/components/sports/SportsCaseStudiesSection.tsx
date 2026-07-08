import { Check } from 'lucide-react';
import { SportsButton } from '../../../common/button/SportsButton';
import { CALENDLY } from '../../../utils/constants/constants';
import { FONTS } from '../../../utils/constants/fonts';

interface CaseStudyShowcase {
  tag: string;
  title: string;
  category: string;
  desc: string;
  metrics: string[];
  bannerSrc: string;
}

const showcases: CaseStudyShowcase[] = [
  {
    tag: 'FMCG BUSINESS',
    title: 'Brand Uplift for KFC',
    category: 'In-app Ads',
    desc: 'See the power of data in action as we break down how analytics-driven decisions led to a surge in campaign effectiveness.',
    metrics: ['1M+ Impressions', '400K+ Reach'],
    bannerSrc: '/assets/images/sports/magicAndImage.png',
  },
  {
    tag: 'GAMING',
    title: 'Elevating brand impact for probo',
    category: 'In-app Ads, Brand awareness',
    desc: 'See the power of data in action as we break down how analytics-driven decisions led to a surge in campaign effectiveness.',
    metrics: ['210M+ Impressions per day', 'Full day Roadblock'],
    bannerSrc: '/assets/images/sports/probo.png',
  },
];

export function SportsCaseStudiesSection() {
  return (
    <section className="bg-[#010502] py-20 md:py-28 px-5 md:px-10 text-center overflow-hidden w-full relative">
      {/* Background stars / effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,172,121,0.03),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1140px] mx-auto px-0 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center justify-center max-w-[750px] mx-auto text-center mb-16 md:mb-24">
          <h2 className={`${FONTS.head} font-medium text-[30px] sm:text-[42px] md:text-[54px] leading-[1.2] tracking-[-1px] md:tracking-[-1.9px] text-white reveal`}>
            How MagicMond shaped <br />
            <span className={`${FONTS.serif} italic text-[#1ff9b8]`}>iconic identities in sports</span>
          </h2>

          <p className={`${FONTS.body} text-[#aaaaaa] font-normal text-[14px] md:text-[16px] leading-[1.65] max-w-[580px] mx-auto mt-6 reveal`} style={{ '--d': '.1s' } as React.CSSProperties}>
            Explore stories of brands that shaped culture, elevated their presence, and unlocked commercial opportunities through our work.
          </p>

          <div className="mt-8 reveal flex justify-center w-full px-5 md:px-0" style={{ '--d': '.15s' } as React.CSSProperties}>
            <SportsButton variant="small" href={CALENDLY} className="w-full md:w-auto">
              Let's collaborate
            </SportsButton>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 w-full text-left">
          {showcases.map((s, i) => (
            <div
              key={s.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center reveal"
              style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}
            >
              {/* Left Column: Graphic Banner Card */}
              <div className="relative w-full aspect-[4/3] rounded-[20px] md:rounded-[28px] overflow-hidden border border-white/5 bg-[#08050f] shadow-2xl flex items-center justify-center">
                <img
                  src={s.bannerSrc}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Information Block */}
              <div className="flex flex-col items-start text-left">
                {/* FMCG / Gaming Tag */}
                <span className={`${FONTS.head} inline-flex items-center justify-center h-[28px] px-3.5 rounded-[6px] border border-[#00ac79]/35 bg-[#00ac79]/5 font-semibold text-[11px] md:text-[12px] text-[#00ac79] tracking-[0.06em] uppercase mb-4`}>
                  {s.tag}
                </span>

                {/* Title */}
                <h3 className={`${FONTS.head} font-semibold text-[26px] sm:text-[34px] md:text-[40px] text-white leading-tight tracking-tight mb-2`}>
                  {s.title}
                </h3>

                {/* Subtag Category */}
                <span className={`${FONTS.body} font-medium text-[13px] md:text-[14px] text-[#00ac79] mb-4`}>
                  {s.category}
                </span>

                {/* Paragraph */}
                <p className={`${FONTS.body} font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[#aaaaaa] mb-6`}>
                  {s.desc}
                </p>

                {/* Metrics Stat Pills */}
                <div className="flex flex-wrap gap-3">
                  {s.metrics.map((metric) => (
                    <div
                      key={metric}
                      className={`${FONTS.head} inline-flex items-center gap-2 bg-[#0a0f15]/80 border border-white/[0.06] rounded-full px-4 py-2 font-medium text-[13px] md:text-[14px] text-white/80`}
                    >
                      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#00ac79]/10 text-[#00ac79] shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SportsCaseStudiesSection;
