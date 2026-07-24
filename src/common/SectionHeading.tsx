import { FONTS } from '../utils/constants/fonts';
import { cn } from '../utils/constants/cn';
import { MotionReveal } from './motion/MotionReveal';

interface Props {
  titleNormal: string;
  titleSerif: string;
  description?: string;
  /** Desktop alignment — mobile is always centered. */
  align?: 'left' | 'center';
  className?: string;
}

/** Section heading: normal + serif italic accent title with optional description. */
export function SectionHeading({ titleNormal, titleSerif, description, align = 'center', className }: Props) {
  const desktopAlign = align === 'left' ? 'md:text-left md:items-start' : 'md:text-center md:items-center';

  return (
    <MotionReveal className={cn('flex flex-col text-center items-center', desktopAlign, className)}>
      <h2
        className={`${FONTS.head} font-medium text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-1px] text-white`}
      >
        {titleNormal}{' '}
        <span className={`${FONTS.serif} italic text-[#e0b6ff]`}>{titleSerif}</span>
      </h2>
      {description && (
        <p className={`${FONTS.head} text-[#aaaaaa] text-[14px] md:text-[16.6px] leading-[1.7] max-w-[640px] mt-4`}>
          {description}
        </p>
      )}
    </MotionReveal>
  );
}
export default SectionHeading;
