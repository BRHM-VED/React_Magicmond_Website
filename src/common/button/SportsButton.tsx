import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SportsButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'large' | 'small' | 'custom';
}

export function SportsButton({
  children,
  href,
  to,
  onClick,
  className = '',
  variant = 'large'
}: SportsButtonProps) {
  // Base style matches typography, flex positioning, and border-radius tokens.
  const baseStyle = 'inline-flex items-center justify-center rounded-[10px] text-white font-head font-medium transition-all duration-300 cursor-pointer text-center relative z-10 whitespace-nowrap';

  let variantStyle = '';
  const hasHeight = className.includes('h-');
  const hasText = className.includes('text-');

  if (variant === 'large') {
    const heightStyle = hasHeight ? '' : 'h-[45px] md:h-[52px]';
    const textStyle = hasText ? '' : 'text-[14px] md:text-[16px]';
    variantStyle = `${heightStyle} px-6 ${textStyle} bg-[#57bd8b] hover:bg-[#64cf9a] shadow-[0_0_0_1px_rgba(255,255,255,0.22),0_0_26px_rgba(87,189,139,0.5)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.32),0_0_36px_rgba(87,189,139,0.7)]`;
  } else if (variant === 'small') {
    const heightStyle = hasHeight ? '' : 'h-[38px] md:h-[40px]';
    const textStyle = hasText ? '' : 'text-[13px] md:text-[14px]';
    variantStyle = `${heightStyle} px-4 md:px-5 ${textStyle} tracking-[-0.5px] bg-[#57bd8b] hover:bg-[#64cf9a] shadow-[0_0_0_1px_rgba(255,255,255,0.22),0_0_26px_rgba(87,189,139,0.5)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.32),0_0_36px_rgba(87,189,139,0.7)]`;
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

export default SportsButton;
