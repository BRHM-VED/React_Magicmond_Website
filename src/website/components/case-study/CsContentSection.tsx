import type { CaseStudyBlock } from '../../../data/common/types';
import { FONTS } from '../../../utils/constants/fonts';

interface Props {
  blocks: CaseStudyBlock[];
  accentColor?: string;
}

/** Renders a single text-only block: label on left, paragraphs on right (desktop),
 *  stacked on mobile. */
function TextBlock({ block }: { block: CaseStudyBlock }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[301.76px_1fr] gap-x-6 gap-y-3 py-6 md:py-8">
      {/* Label */}
      <p
        className={`${FONTS.body} font-semibold text-[18px] md:text-[20px] tracking-[0.08em] uppercase pt-[2px] leading-tight text-[#3e0078]`}
      >
        {block.label}
      </p>
      {/* Text */}
      <div className="flex flex-col gap-5">
        {block.description.map((para, i) => (
          <p
            key={i}
            className={`${FONTS.body} text-[18px] md:text-[26px] font-light leading-[1.6] text-black`}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

/** Component 2 – Content Section
 *  White background. Renders text-only blocks (HIGHLIGHTS, CHALLENGE) and a full-width image block.
 */
export function CsContentSection({ blocks }: Props) {
  // Separate the text blocks and image blocks
  const textBlocks = blocks.filter(
    (b) => b.label.includes('HIGHLIGHT') || b.label.includes('CHALLENGE')
  );
  const imageBlock = blocks.find((b) => b.layoutType === 'text-with-image');

  return (
    <section className="bg-white w-full">
      {/* Text blocks container */}
      <div className="max-w-[1062px] mx-auto px-5 md:px-10 py-10 md:py-14">
        <div className="flex flex-col gap-4">
          {textBlocks.map((block, i) => (
            <TextBlock key={i} block={block} />
          ))}
        </div>
      </div>

      {/* Full-width image block (No extra container, exact size) */}
      {imageBlock && (
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 pb-10 md:pb-14 flex flex-col items-center">
          {imageBlock.images && imageBlock.images[0] ? (
            <>
              <img
                src={imageBlock.images[0]}
                alt={`${imageBlock.label} visual`}
                className="w-full h-auto md:h-[637px] object-cover rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] select-none pointer-events-none"
              />
              {imageBlock.imageCaptions && imageBlock.imageCaptions[0] && (
                <p className={`${FONTS.body} font-light leading-[1.6] opacity-80 mt-3 text-[13px] text-black text-center w-full`}>
                  {imageBlock.imageCaptions[0]}
                </p>
              )}
            </>
          ) : (
            <div className="w-full aspect-[16/9] rounded-[24px] bg-[#f0f2f7] flex items-center justify-center border border-[#e0e4ee] w-full">
              <p className={`${FONTS.body} text-[#9098b0] text-[14px]`}>Image placeholder</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default CsContentSection;
