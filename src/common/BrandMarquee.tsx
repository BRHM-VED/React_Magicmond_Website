import type { ReactNode } from 'react';

interface Props {
  reverse?: boolean;
  children: ReactNode;
  className?: string;
}

/** Infinite logo marquee — children are rendered twice for a seamless loop. */
export function BrandMarquee({ reverse, children, className }: Props) {
  return (
    <div className={`marquee${reverse ? ' marquee--reverse' : ''}${className ? ' ' + className : ''}`}>
      <div className="marquee__track">
        {children}
        {children}
      </div>
    </div>
  );
}
export default BrandMarquee;
