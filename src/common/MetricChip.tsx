import { FONTS } from '../utils/constants/fonts';
import { cn } from '../utils/constants/cn';
import { MotionCounter } from './motion/MotionCounter';

interface Props {
  value: string;
  label: string;
  /** Count the value up when scrolled into view. */
  animated?: boolean;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

/** Dark stat tile: big serif gradient number + small dim label. */
export function MetricChip({ value, label, animated = false, className, valueClassName, labelClassName }: Props) {
  const valueClasses = cn(
    `${FONTS.serif} text-[26px] md:text-[30px] bg-gradient-to-r from-white to-[#e0b6ff] bg-clip-text text-transparent`,
    valueClassName,
  );

  return (
    <div
      className={cn(
        'rounded-[14px] border border-white/5 bg-gradient-to-b from-[#16101f] to-[#1c0c29] px-5 py-4',
        className,
      )}
    >
      {animated ? (
        <MotionCounter value={value} className={valueClasses} />
      ) : (
        <span className={valueClasses}>{value}</span>
      )}
      <p className={cn(`${FONTS.inter} text-[12px] md:text-[13px] text-white/60 mt-1`, labelClassName)}>{label}</p>
    </div>
  );
}
export default MetricChip;
