import { m, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, VIEWPORT_ONCE } from '../../utils/constants/motion';

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Plain layout wrapper (grid/flex className) for a group of <MotionStaggerItem>s.
 * Each item animates itself independently (see MotionStaggerItem) — this wrapper
 * carries no motion of its own, since parent→child variant propagation via
 * whileInView proved unreliable across nested m.div trees.
 */
export function MotionStagger({ children, className }: StaggerProps) {
  return <div className={className}>{children}</div>;
}

interface ItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /** Position within the group — drives the stagger delay (index * 0.08s). */
  index?: number;
}

export function MotionStaggerItem({ children, className, variants = fadeUp, index = 0 }: ItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const delay = 0.1 + index * 0.08;
  const delayedVariants: Variants = {
    ...variants,
    visible: {
      ...(variants.visible as object),
      transition: { ...(variants.visible as { transition?: object }).transition, delay },
    },
  };

  return (
    <m.div
      className={className}
      variants={delayedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {children}
    </m.div>
  );
}
export default MotionStagger;
