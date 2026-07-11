import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface InfraEdgeButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'large' | 'small' | 'custom';
}

export function InfraEdgeButton({
  children,
  href,
  to,
  onClick,
  className = '',
  variant = 'large'
}: InfraEdgeButtonProps) {
  // Base style matches typography, flex positioning, and border-radius tokens.
  // The border is border-white/15 matching Figma's border-[2.413px] border-[rgba(255,255,255,0.15)].
  const baseStyle = 'inline-flex items-center justify-center rounded-lg text-white font-head font-medium border border-white/15 transition-all duration-300 cursor-pointer text-center relative z-10 whitespace-nowrap';

  let variantStyle = '';
  const hasHeight = className.includes('h-');
  const hasText = className.includes('text-');

  if (variant === 'large') {
    const heightStyle = hasHeight ? '' : 'h-[45px] md:h-[52px]';
    const textStyle = hasText ? '' : 'text-[14px] md:text-[16px]';
    variantStyle = `${heightStyle} px-6 ${textStyle} bg-[#0055ff] hover:bg-[#3572f5] shadow-[0_0_0_1px_rgba(0,85,255,0.12),0_6.43px_32.17px_rgba(0,85,255,0.75)] hover:shadow-[0_0_0_1px_rgba(0,85,255,0.25),0_8px_40px_rgba(0,85,255,0.9)]`;
  } else if (variant === 'small') {
    const heightStyle = hasHeight ? '' : 'h-[38px] md:h-[40px]';
    const textStyle = hasText ? '' : 'text-[13px] md:text-[14px]';
    variantStyle = `${heightStyle} px-4 md:px-5 ${textStyle} tracking-[-0.5px] bg-[#0055ff] hover:bg-[#3572f5] shadow-[0_0_0_1px_rgba(0,85,255,0.12),0_6.43px_32.17px_rgba(0,85,255,0.75)] hover:shadow-[0_0_0_1px_rgba(0,85,255,0.25),0_8px_40px_rgba(0,85,255,0.9)]`;
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

export default InfraEdgeButton;
