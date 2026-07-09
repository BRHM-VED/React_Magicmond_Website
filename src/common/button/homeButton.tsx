import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'large' | 'small' | 'header' | 'custom';
}

export function Button({
  children,
  href,
  to,
  onClick,
  className = '',
  variant = 'large'
}: ButtonProps) {
  const location = useLocation();
  const isInfraEdge = location.pathname.startsWith('/infraedge');
  const isSports = location.pathname.startsWith('/sports');

  // Determine theme colors dynamically
  let bg = 'bg-[#692083]';
  let hoverBg = 'hover:bg-[#7d279c]';
  let shadowColor = 'rgba(192,85,229,0.45)';
  
  if (isInfraEdge) {
    bg = 'bg-[#0055ff]';
    hoverBg = 'hover:bg-[#0044dd]';
    shadowColor = 'rgba(0,85,255,0.45)';
  } else if (isSports) {
    bg = 'bg-[#00ac79]';
    hoverBg = 'hover:bg-[#008f64]';
    shadowColor = 'rgba(0,172,121,0.45)';
  }

  // For header variant
  let headerBg = 'bg-[#70218b]';
  let headerHoverBg = 'hover:bg-[#852ea3]';
  let headerBorder = 'border-[#70218b]';
  let headerShadow = 'shadow-[0_8px_40px_rgba(105,32,131,0.5)]';

  if (isInfraEdge) {
    headerBg = 'bg-[#0055ff]';
    headerHoverBg = 'hover:bg-[#0044dd]';
    headerBorder = 'border-[#0055ff]';
    headerShadow = 'shadow-[0_8px_40px_rgba(0,85,255,0.5)]';
  } else if (isSports) {
    headerBg = 'bg-[#00ac79]';
    headerHoverBg = 'hover:bg-[#008f64]';
    headerBorder = 'border-[#00ac79]';
    headerShadow = 'shadow-[0_8px_40px_rgba(0,172,121,0.5)]';
  }

  // Base design styling (shadows, purple color variation, border-radius, typography etc.)
  const baseStyle = 'inline-flex items-center justify-center rounded-lg text-white font-head transition-all duration-300 cursor-pointer';

  // Variant-specific styles (aligning heights and paddings responsively)
  let variantStyle = '';
  if (variant === 'large') {
    variantStyle = `h-[45px] md:h-[52px] px-6 font-semibold text-[14px] md:text-[16px] ${bg} ${hoverBg} shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_${shadowColor},0_0_0_1px_rgba(255,255,255,0.2)]`;
  } else if (variant === 'small') {
    variantStyle = `h-[45px] md:h-[46px] px-5 font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] ${bg} ${hoverBg} shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_${shadowColor},0_0_0_1px_rgba(255,255,255,0.2)]`;
  } else if (variant === 'header') {
    variantStyle = `h-[45px] md:h-[46px] px-[15px] font-medium text-[14px] md:text-[16px] ${headerBg} ${headerHoverBg} ${headerShadow} border ${headerBorder}`;
  }

  const combinedClassName = `${baseStyle} ${variantStyle} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

export default Button;
