import * as Icons from 'lucide-react';

const ieIconClasses: Record<string, { bg: string; color: string; shadow: string }> = {
  Zap: { bg: 'bg-gradient-to-b from-[#FE8550] to-[#E14601]', color: 'text-white', shadow: 'shadow-[2px_4px_24px_rgba(254,85,80,0.35)]' },
  User: { bg: 'bg-[#b48cf2]', color: 'text-white', shadow: 'shadow-[2px_4px_24px_rgba(180,140,242,0.35)]' },
  Globe: { bg: 'bg-[#0055ff]', color: 'text-white', shadow: 'shadow-[2px_4px_24px_rgba(0,85,255,0.45)]' },
  CheckCircle: { bg: 'bg-[#413BAC]', color: 'text-white', shadow: 'shadow-[2px_4px_24px_rgba(65,59,172,0.45)]' },
  Image: { bg: 'bg-gradient-to-b from-[#FEE863] to-[#9F8D22]', color: 'text-black', shadow: 'shadow-[2px_4px_24px_rgba(254,232,99,0.25)]' },
  MessageCircle: { bg: 'bg-gradient-to-b from-[#00AC3C] to-[#138D3E]', color: 'text-white', shadow: 'shadow-[2px_4px_24px_rgba(0,172,60,0.35)]' },
};

interface IeServiceCardProps {
  icon: string;
  title: string;
  tag: string;
  desc: string;
  isRecommended?: boolean;
}

export function IeServiceCard({ icon, title, tag, desc, isRecommended }: IeServiceCardProps) {
  const cfg = ieIconClasses[icon] || { bg: 'bg-[#70218B]', color: 'text-white', shadow: 'shadow-[2px_4px_24px_rgba(112,33,139,0.45)]' };

  const LucideIcon = (Icons as any)[icon];

  return (
    <article
      className="relative rounded-[20px] border border-white/[0.07] p-5 md:p-[30px] flex flex-col justify-start overflow-hidden group min-h-0 md:min-h-[275px] w-full text-left bg-[linear-gradient(180deg,rgba(0,85,255,0.15)_0%,rgba(97,97,97,0.09)_100%)]"
    >
      {/* Top light glow border highlight */}
      <div
        className="absolute top-0 left-5 right-5 md:left-[30px] md:right-[30px] h-px bg-gradient-to-r from-transparent via-[#0055ff]/45 to-transparent transition-all duration-300 group-hover:via-[#0055ff]"
      />

      {/* Icon */}
      <div className="mb-4 md:mb-5">
        <div
          className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-white/[0.07] shrink-0 ${cfg.bg} ${cfg.shadow}`}
        >
          {LucideIcon && (
            <LucideIcon
              size={20}
              strokeWidth={1.8}
              className={`${cfg.color} drop-shadow-[0_3px_1.5px_rgba(0,0,0,0.25)]`}
            />
          )}
        </div>
      </div>

      {/* Title and tag */}
      <div className="flex flex-col gap-[3px]">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-head font-semibold text-[16px] md:text-[18px] text-white tracking-[-0.5px] leading-tight">
            {title}
          </h3>
          {isRecommended && (
            <div className="bg-[#0055ff] border border-white/15 px-[8px] md:px-[10px] py-[2px] md:py-[3px] rounded-[7px] shadow-[0px_0px_10px_rgba(0,85,255,0.5)] shrink-0">
              <span className="font-head font-bold text-[9px] md:text-[10px] text-white tracking-[-0.4px] uppercase">
                Recommended
              </span>
            </div>
          )}
        </div>
        <p className="font-inter text-[13.5px] md:text-[16px] text-white/60 tracking-[-0.2px] leading-tight">
          {tag}
        </p>
      </div>

      {/* Separator line */}
      <div className="my-3 md:my-[18px] h-px bg-gradient-to-r from-white/[0.12] to-transparent w-full" />

      {/* Description */}
      <p className="font-inter text-[13.5px] leading-[22px] md:text-[16px] md:leading-[26px] text-white/75 tracking-[-0.2px]">
        {desc}
      </p>
    </article>
  );
}

export default IeServiceCard;
