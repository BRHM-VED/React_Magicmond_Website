import React from 'react';
import { founderPills } from '../../../data/home.data';
import { FONTS } from '../../../utils/constants/fonts';
import { LightRays } from '../../../common/LightRays';

// Specific placement and rotation values for the founder pills matching original designs
const DESKTOP_POSITIONS = [
  'left-[8%] top-[26%] -rotate-[8deg]',
  'right-[7%] top-[22%] rotate-[6deg]',
  'left-[7%] bottom-[24%] rotate-[5deg]',
  'right-[9%] bottom-[22%] -rotate-[5deg]',
  'left-[42%] bottom-[4%] rotate-[3deg]',
];

export function FoundersSection() {
  return (
    <section className="relative py-20 lg:py-[170px] text-center overflow-hidden">
      {/* Background animated WebGL light rays */}
      <LightRays
        theme="purple"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none z-0 opacity-40"
      />

      {/* Centered container for heading & mobile layout */}
      <div className="relative z-10 container px-0 lg:px-5 mx-auto">
        {/* Sparkle Heading */}
        <h2
          className={`${FONTS.head} relative inline-block font-normal text-[34px] lg:text-[54px] leading-tight lg:leading-[50px] tracking-[-1.9px] text-white reveal`}
        >
          {/* Sparkle icon positioned next to header */}
          <img
            className="absolute left-[-10px] lg:left-[-30px] top-[-10px] lg:top-[-40px] w-6 lg:w-[80px] select-none pointer-events-none"
            src="/assets/icons/sparkle.svg"
            alt=""
          />
          Founders we want
          <br />
          to work with
        </h2>

        {/* ── MOBILE LAYOUT (Centred, stacked flex column with alternative subtle rotations) ── */}
        <div className="flex lg:hidden flex-col items-center gap-4 mt-10 w-full px-4">
          {founderPills.map((pill, i) => (
            <div
              key={pill}
              className={`px-6 py-[11px] rounded-full bg-[#692083] ${FONTS.body} font-normal text-[15.5px] leading-none text-white whitespace-nowrap reveal-scale`}
              style={{
                '--d': `${0.1 * (i + 1)}s`,
                transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
              } as React.CSSProperties}
            >
              {pill}
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (Pills positioned relative to the full section container, preventing overlap) ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {founderPills.map((pill, i) => (
          <div
            key={pill}
            className={`absolute px-7 py-[9px] rounded-full bg-[#692083] ${FONTS.instrument} font-medium text-[18px] leading-none text-white whitespace-nowrap pointer-events-auto reveal-scale ${DESKTOP_POSITIONS[i] || ''}`}
            style={{
              '--d': `${0.1 * (i + 1)}s`,
            } as React.CSSProperties}
          >
            {pill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoundersSection;
