import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

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
  // Base design styling (shadows, purple color variation, border-radius, typography etc.)
  const baseStyle = 'inline-flex items-center justify-center rounded-lg text-white font-head transition-all duration-300 cursor-pointer';

  // Variant-specific styles (aligning heights and paddings responsively)
  let variantStyle = '';
  if (variant === 'large') {
    variantStyle = 'h-[45px] md:h-[52px] px-6 font-semibold text-[14px] md:text-[16px] bg-[#692083] hover:bg-[#7d279c] shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)]';
  } else if (variant === 'small') {
    variantStyle = 'h-[45px] md:h-[46px] px-5 font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] bg-[#692083] hover:bg-[#7d279c] shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)]';
  } else if (variant === 'header') {
    variantStyle = 'h-[45px] md:h-[46px] px-[15px] font-medium text-[14px] md:text-[16px] bg-[#70218b] hover:bg-[#852ea3] shadow-[0_8px_40px_rgba(105,32,131,0.5)] border border-[#70218b]';
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
