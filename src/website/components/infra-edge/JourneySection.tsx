import { Link } from 'react-router-dom';
import { ieQuarters } from '../../../data/infra-edge.data';
import { IeDonutChart } from './IeDonutChart';
import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';
import { CALENDLY } from '../../../utils/constants/constants';

// Using colors from COLORS design tokens in utils/constants/colors
const qLabelColors = [
  'text-[#00c285]', // COLORS.ieQ1
  'text-[#b48cf2]', // COLORS.ieQ2
  'text-[#7fb0f7]', // COLORS.ieQ3
  'text-[#e8a04c]', // COLORS.ieQ4
];

const qLineColors = [
  'bg-gradient-to-r from-[#00c285] to-transparent',
  'bg-gradient-to-r from-[#b48cf2] to-transparent',
  'bg-gradient-to-r from-[#7fb0f7] to-transparent',
  'bg-gradient-to-r from-[#e8a04c] to-transparent',
];

const getProgress = (label: string) => {
  if (label === 'Q1') return 0;
  if (label === 'Q2') return 0.08;
  if (label === 'Q3') return 0.30;
  if (label === 'Q4') return 0.85;
  return 0;
};

export function JourneySection() {
  return (
    <section className="relative py-24 md:py-[100px] text-center bg-[#0e081d] overflow-hidden">
      {/* Left bottom corner glow */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,85,255,0.14),transparent_60%)] filter blur-3xl pointer-events-none z-0" />

      <div className="w-full max-w-[1425px] mx-auto px-5 md:px-10">

        {/* Heading with clickable logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 relative z-10">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/assets/images/infraedge/reidiusInfraLogo.png"
              alt="Reidius"
              className="w-12 h-12 object-contain"
            />
          </Link>
          <h2 className="font-head font-normal text-[32px] sm:text-[42px] md:text-[54px] text-white tracking-[-1.5px] leading-[1.15]">
            Reidius 2024-25 Growth Journey
            <sup className="text-[#7db9ff] text-[20px] md:text-[32px] ml-0.5 font-light">+</sup>
          </h2>
        </div>

        {/* Sub */}
        <p className="mt-5 mx-auto max-w-[500px] text-[12.5px] leading-[19px] xs:text-[13.5px] xs:leading-[21px] sm:text-[15.5px] sm:leading-[23px] md:text-[16px] md:leading-[26px] text-white/60 relative z-10">
          Each milestone reflects our commitment to scaling bigger,<br />
          moving faster, and building a future without limits.
        </p>

        {/* CTA Button */}
        <div className="mt-7 relative z-10">
          <InfraEdgeButton variant="small" href={CALENDLY} className="w-full md:w-auto">
            Help me grow
          </InfraEdgeButton>
        </div>

        {/* Quarters grid & Legend container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-8 max-w-[1000px] lg:max-w-[1120px] mx-auto mt-16 text-left items-start z-10 relative">

          {/* Quarters loop */}
          {ieQuarters.map((q, i) => (
            <div key={q.label}>
              {/* Donut chart */}
              <IeDonutChart progress={getProgress(q.label)} label="Sales" />

              {/* Quarter label */}
              <div className={`mt-6 font-head font-semibold text-[24px] ${qLabelColors[i] ?? 'text-white'}`}>
                {q.label}
              </div>

              {/* Separator line with matching quarter gradient */}
              <div className={`my-3 h-[2px] w-full ${qLineColors[i] ?? 'bg-white/20'}`} />

              {/* Title */}
              <h3 className="font-head font-semibold text-[18px] text-white tracking-[-0.3px] leading-snug mt-3">
                {q.title}
              </h3>

              {/* Content */}
              {q.bullets ? (
                <ul className="mt-3 pl-4 list-disc grid gap-1.5 font-inter text-[13.5px] leading-[22px] md:text-[14.5px] md:leading-[24px] text-white/70">
                  {q.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              ) : (
                <p className="mt-3 font-inter text-[13.5px] leading-[22px] md:text-[14.5px] md:leading-[24px] text-white/70">
                  {q.desc}
                </p>
              )}
            </div>
          ))}

          {/* Legend: 5th item in grid, aligned on the right on desktop, centered on mobile */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-6 lg:gap-3 mt-6 lg:mt-[38px] text-[13px] font-inter font-medium text-white select-none col-span-1 sm:col-span-2 lg:col-span-1 shrink-0">
            <span className="flex items-center gap-2.5">
              <i className="inline-block w-[12px] h-[12px] bg-white rounded-[2px] border border-white/20" />
              Online
            </span>
            <span className="flex items-center gap-2.5">
              <i className="inline-block w-[12px] h-[12px] bg-[#3b5bff] rounded-[2px] border border-white/20" />
              Offline
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default JourneySection;
