/** Shared framer-motion variants & transitions — import from here, never inline duplicates. */
import type { Variants, Transition } from 'framer-motion';

export const EASE_OUT: Transition = { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] };
export const SPRING: Transition = { type: 'spring', stiffness: 260, damping: 20 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: EASE_OUT },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: SPRING },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: EASE_OUT },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: EASE_OUT },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

/**
 * Standard once-only viewport config for whileInView animations.
 * A small `amount` + generous bottom margin means content starts revealing
 * as soon as it approaches the viewport, not only once deep inside it —
 * this avoids any risk of content getting stuck hidden on fast scrolls.
 */
export const VIEWPORT_ONCE = { once: true, amount: 0, margin: '0px 0px -10% 0px' } as const;
