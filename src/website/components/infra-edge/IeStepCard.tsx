import { BadgeCheck } from 'lucide-react';

interface IeStepCardProps {
  badge: string;
  title: string;
  desc: string;
}

export function IeStepCard({ badge, title, desc }: IeStepCardProps) {
  return (
    <article
      className="relative rounded-[20px] border border-white/[0.07] p-7 md:p-[30px] flex flex-col justify-start overflow-hidden group min-h-0 md:min-h-[260px] w-full text-left bg-[#0f0a1c] bg-[radial-gradient(circle_at_top_left,rgba(0,85,255,0.08),transparent_50%)]"
    >
      {/* Top light glow border highlight */}
      <div
        className="absolute top-0 left-5 right-5 md:left-[30px] md:right-[30px] h-px bg-gradient-to-r from-transparent via-[#0055ff]/30 to-transparent transition-all duration-300 group-hover:via-[#0055ff]/70"
      />

      {/* Blue check badge icon */}
      <div className="mb-6">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0055ff] shadow-[0_0_20px_rgba(0,85,255,0.35)] shrink-0"
        >
          <BadgeCheck
            size={22}
            strokeWidth={1.8}
            className="text-white drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        {/* Step subtitle */}
        <span className="font-inter text-[13px] md:text-[14px] text-[#7db9ff] font-medium tracking-wide">
          {badge}
        </span>
        {/* Title */}
        <h3 className="font-head font-semibold text-[18px] md:text-[20px] text-white tracking-[-0.3px] leading-tight mt-1.5">
          {title}
        </h3>
        {/* Description */}
        <p className="font-inter text-[13.5px] leading-[22px] md:text-[14.5px] md:leading-[24px] text-white/70 mt-3">
          {desc}
        </p>
      </div>
    </article>
  );
}

export default IeStepCard;
