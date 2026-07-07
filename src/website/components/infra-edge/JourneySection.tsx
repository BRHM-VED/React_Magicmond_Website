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
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,85,255,0.22),transparent_70%)] filter blur-3xl pointer-events-none z-0" />

      <div className="w-full max-w-[1425px] mx-auto px-5 md:px-10 flex flex-col items-center text-center relative">

        {/* Header container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10 w-full mb-4 md:mb-0">

          {/* Reidius Logo - centered horizontally on mobile */}
          <Link to="/" className="hover:opacity-80 transition-opacity shrink-0">
            <img
              src="/assets/images/infraedge/reidiusInfraLogo.png"
              alt="Reidius"
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* Mobile/Tablet Legend: absolute positioned on the right side, vertically centered with the logo */}
          <div className="flex flex-col items-start gap-1 text-[11px] font-inter font-medium text-white select-none absolute top-1.5 right-0 lg:hidden shrink-0 z-20">
            <span className="flex items-center gap-2">
              <i className="inline-block w-[10px] h-[10px] bg-white rounded-[2px] border border-white/20" />
              Online
            </span>
            <span className="flex items-center gap-2">
              <i className="inline-block w-[10px] h-[10px] bg-[#3b5bff] rounded-[2px] border border-white/20" />
              Offline
            </span>
          </div>

          <h2 className="font-head font-normal text-[20px] xs:text-[24px] sm:text-[36px] md:text-[54px] text-white tracking-[-1px] md:tracking-[-1.5px] leading-[1.25] md:leading-[1.15] text-center md:text-left whitespace-nowrap md:whitespace-normal">
            Reidius 2024-25 Growth Journey
            <sup className="text-[#7db9ff] text-[12px] xs:text-[14px] md:text-[32px] ml-0.5 font-light relative -top-1 md:-top-3">+</sup>
          </h2>
        </div>

        {/* Sub */}
        <p className="mt-5 max-w-[500px] md:mx-auto text-[12.5px] leading-[19px] xs:text-[13.5px] xs:leading-[21px] sm:text-[15.5px] sm:leading-[23px] md:text-[16px] md:leading-[26px] text-white/60 relative z-10 text-center">
          <span className="hidden md:inline">
            Each milestone reflects our commitment to scaling bigger,<br />
            moving faster, and building a future without limits.
          </span>
          <span className="inline md:hidden">
            Each milestone reflects our commitment<br />
            to building a future without limits.
          </span>
        </p>

        {/* CTA Button */}
        <div className="mt-7 relative z-10 w-full md:w-auto flex justify-center">
          <InfraEdgeButton variant="small" href={CALENDLY} className="w-full md:w-auto">
            Help me grow
          </InfraEdgeButton>
        </div>

        {/* Quarters grid & Legend container - grid-cols-2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-x-6 gap-y-12 lg:gap-8 max-w-[1000px] lg:max-w-[1120px] mx-auto mt-16 text-center lg:text-left items-start z-10 relative">

          {/* Quarters loop */}
          {ieQuarters.map((q, i) => (
            <div key={q.label} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Donut chart */}
              <div className="mt-0">
                <IeDonutChart progress={getProgress(q.label)} label="Sales" />
              </div>

              {/* Quarter label */}
              <div className={`mt-6 font-head font-semibold text-[18px] md:text-[24px] ${qLabelColors[i] ?? 'text-white'}`}>
                {q.label}
              </div>

              {/* Separator line with matching quarter gradient */}
              <div className={`my-3 h-[2px] w-full ${qLineColors[i] ?? 'bg-white/20'}`} />

              {/* Title - max-w-[210px] to wrap title correctly in two lines */}
              <h3 className="font-head font-semibold text-[14px] xs:text-[13px] md:text-[18px] text-white tracking-[-0.3px] leading-snug mt-3 max-w-[210px] text-center lg:text-left">
                {q.title}
              </h3>

              {/* Content */}
              <div className="mt-3 mb-0 text-center lg:text-left">
                {q.bullets ? (
                  <div className="text-center w-full">
                    <ul className="pl-4 list-disc inline-block text-left font-inter text-[10px] md:text-[14.5px] leading-[1.6] text-white/70">
                      {q.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                ) : (
                  <p className="font-inter text-[10px] md:text-[14.5px] leading-[1.6] text-white/70 text-center lg:text-left">
                    {q.desc}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Desktop Legend: positioned next to Q4 on desktop, hidden on mobile */}
          <div className="hidden lg:flex lg:flex-col items-start justify-start gap-3 mt-[-50px] lg:-ml-40 text-[13px] font-inter font-medium text-white select-none lg:col-span-1 shrink-0">
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
