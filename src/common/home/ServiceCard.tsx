import * as Icons from 'lucide-react';

const iconStyles: Record<string, { bg: string; shadow: string; color: string }> = {
  Target: { bg: 'linear-gradient(180deg, #FE8550 0%, #E14601 100%)', shadow: '2px 4px 27px rgba(0,85,255,0.35)', color: '#ffffff' },
  Monitor: { bg: '#70218B', shadow: '2px 4px 27px rgba(112,33,139,0.45)', color: '#ffffff' },
  MessageSquare: { bg: '#413BAC', shadow: '2px 4px 27px rgba(65,59,172,0.45)', color: '#ffffff' },
  Palette: { bg: 'linear-gradient(180deg, #FBFBFB 0%, #D0D0D0 100%)', shadow: '2px 4px 27px rgba(200,200,200,0.35)', color: '#000000' },
  TrendingUp: { bg: 'linear-gradient(180deg, #FEE863 0%, #9F8D22 100%)', shadow: '2px 4px 27px rgba(159,141,34,0.35)', color: '#000000' },
  Cpu: { bg: 'linear-gradient(180deg, #09406E 0%, #061F54 100%)', shadow: '2px 4px 27px rgba(6,31,84,0.45)', color: '#ffffff' },
};

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  index: number;
}

export function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  badge,
  index,
}: ServiceCardProps) {
  const cfg = iconStyles[icon] || { bg: '#70218B', shadow: '2px 4px 27px rgba(112,33,139,0.45)', color: '#ffffff' };
  const LucideIcon = (Icons as any)[icon];

  return (
    <article
      className="sticky top-[110px] md:top-[110px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 min-h-0 md:min-h-[365px] mb-7 px-6 py-9 md:px-[95px] md:py-[60px] rounded-[20px] border border-white/[0.07] text-left overflow-hidden reveal"
      style={{
        backgroundImage: 'linear-gradient(0deg, rgba(112,33,139,0.15) 0%, rgba(97,97,97,0.09) 100%)',
        boxShadow: '0 -18px 40px rgba(0,0,0,0.45)',
        '--d': `${0.1 * index}s`,
      } as React.CSSProperties}
    >
      {/* Top light bar accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[247px] h-[3px] bg-gradient-to-r from-transparent via-[#c156e6] to-transparent pointer-events-none" />

      {/* Left: text content */}
      <div className="max-w-[420px] relative z-10 flex flex-col gap-[25px]">
        {/* Icon */}
        {LucideIcon && (
          <div
            className="w-[49px] h-[49px] rounded-full border border-white/[0.07] flex items-center justify-center shrink-0"
            style={{ background: cfg.bg, boxShadow: cfg.shadow }}
          >
            <LucideIcon
              size={24}
              strokeWidth={1.8}
              color={cfg.color}
              style={{ filter: 'drop-shadow(0px 3px 1.5px rgba(0,0,0,0.25))' }}
            />
          </div>
        )}

        {/* Title row with optional badge */}
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-body font-semibold text-[18px] leading-[29px] tracking-[-0.56px] text-white">
              {title}
            </h3>
            {badge && (
              <span className="inline-flex items-center h-[29px] px-2.5 rounded-[9px] bg-[#692083] border-2 border-white/15 font-body font-bold text-[13.5px] tracking-[-0.56px] text-white">
                {badge}
              </span>
            )}
          </div>
          <p className="font-body text-[18px] leading-[29px] tracking-[-0.22px] text-white/60 mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="font-body text-[18px] leading-[29px] tracking-[-0.22px] text-white/50">
          {description}
        </p>
      </div>

      {/* Right: image with gradient backing */}
      <div className="relative w-full md:w-[345px] h-[250px] md:h-[309px] shrink-0 self-center md:self-auto">
        {/* Gradient background behind image */}
        <div className="absolute inset-0 rounded-t-[39px] bg-gradient-to-b from-[#c156e6] to-[#3c0051]" />
        {/* Card image */}
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-t-[39px]"
          src={image}
          alt={imageAlt}
        />
      </div>
    </article>
  );
}

export default ServiceCard;
