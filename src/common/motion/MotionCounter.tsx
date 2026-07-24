import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface Props {
  /** e.g. "100M+", "10,000+", "1,00,000+", "4.5", "6". Non-numeric values render statically. */
  value: string;
  className?: string;
}

/** Splits "1,00,000+" → prefix "", numeric 100000, suffix "+". Returns null when not animatable. */
function parseValue(value: string) {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, core, suffix] = match;
  if (/\d/.test(suffix)) return null; // ranges like "7–10%" stay static
  const num = parseFloat(core.replace(/,/g, ''));
  if (Number.isNaN(num)) return null;
  const decimals = core.includes('.') ? core.split('.')[1].length : 0;
  const grouped = core.includes(',');
  return { prefix, num, suffix, decimals, grouped };
}

function format(n: number, decimals: number, grouped: boolean) {
  if (grouped) {
    // en-IN grouping matches the site's Indian-style numbers (1,00,000)
    return n.toLocaleString('en-IN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return n.toFixed(decimals);
}

/** Counts up to `value` over ~1.2s the first time it scrolls into view. */
export function MotionCounter({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  // Render the final value on the server / first paint so prerendered HTML
  // and non-JS crawlers always see the real number.
  const [display, setDisplay] = useState(value);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!inView || !parsed || reduceMotion) return;
    const { prefix, num, suffix, decimals, grouped } = parsed;
    const controls = animate(0, num, {
      duration: 1.2,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setDisplay(`${prefix}${format(v, decimals, grouped)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
export default MotionCounter;
