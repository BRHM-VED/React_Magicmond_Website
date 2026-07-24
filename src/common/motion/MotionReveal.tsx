import { m, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, VIEWPORT_ONCE } from '../../utils/constants/motion';

interface Props {
  children: ReactNode;
  /** Extra delay (s) added to the variant's transition. */
  delay?: number;
  variants?: Variants;
  className?: string;
  as?: 'div' | 'section' | 'li';
}

/** Fade-up wrapper: animates once when scrolled into view. */
export function MotionReveal({ children, delay = 0, variants = fadeUp, className, as = 'div' }: Props) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = m[as];
  const delayed: Variants = delay
    ? {
        ...variants,
        visible: {
          ...(variants.visible as object),
          transition: { ...(variants.visible as { transition?: object }).transition, delay },
        },
      }
    : variants;

  return (
    <MotionTag
      className={className}
      variants={delayed}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {children}
    </MotionTag>
  );
}
export default MotionReveal;
