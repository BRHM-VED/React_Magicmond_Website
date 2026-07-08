import type { CaseStudyBlock, CaseStudyMetric } from '../../../data/common/types';
import { FONTS } from '../../../utils/constants/fonts';

interface Props {
  blocks: CaseStudyBlock[];
  accentColor?: string;
  studySlug?: string;
}

/** Helper to parse a metric value string into prefix, number, suffix, and trailing details */
function parseMetricValue(valStr: string) {
  let details = '';
  // Extract trailing parentheses details if any
  const parenMatch = valStr.match(/\s*\(([^)]+)\)$/);
  if (parenMatch) {
    details = `(${parenMatch[1]})`;
    valStr = valStr.replace(/\s*\(([^)]+)\)$/, '').trim();
  }

  // Find the number (digits and decimals, e.g. 7.7, 24.6, 4208, 23, 5, 1000)
  const numMatch = valStr.match(/(\d+(?:\.\d+)?)/);
  if (!numMatch) {
    return { prefix: '', number: valStr, suffix: '', details };
  }

  const number = numMatch[1];
  const numberIndex = valStr.indexOf(number);
  const prefix = valStr.substring(0, numberIndex).trim();
  const suffix = valStr.substring(numberIndex + number.length).trim();

  return { prefix, number, suffix, details };
}

/** Metrics table row */
function MetricRow({ metric, isLast }: { metric: CaseStudyMetric; isLast: boolean }) {
  const { prefix, number, suffix } = parseMetricValue(metric.value);

  // Gradient text for unit suffix if it is '%' or 'M' or 'Cr'
  const isGradientSuffix = suffix === '%' || suffix === 'M' || suffix === 'Cr';

  return (
    <div className={`grid grid-cols-[1fr_auto] items-center py-5 md:py-7 ${!isLast ? 'border-b border-[#b8cfe0]' : ''}`}>
      <span className={`${FONTS.body} text-[18px] md:text-[26px] font-light text-black`}>{metric.label}</span>
      <div className="flex items-start gap-2.5 md:gap-[18px] text-right">
        {prefix && (
          <div className="flex flex-col items-end pt-[4px] md:pt-[10px]">
            <span className={`${FONTS.body} text-[12px] md:text-[18px] text-black opacity-60 leading-none`}>
              {prefix}
            </span>
          </div>
        )}
        <div className="flex items-start gap-1">
          <span className={`${FONTS.serif} text-[40px] md:text-[80px] font-normal text-black leading-none`}>
            {number}
          </span>
          {suffix && (
            <span
              className={`${FONTS.body} text-[16px] md:text-[32px] font-semibold pt-[4px] md:pt-[12px] leading-none ${isGradientSuffix
                ? 'bg-gradient-to-br from-[#49bfb5] to-[#4ea7e6] bg-clip-text text-transparent'
                : 'text-black'
                }`}
            >
              {suffix}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/** Left-label / right-text block */
function LabelTextBlock({ block }: { block: CaseStudyBlock }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[301.76px_1fr] gap-x-6 gap-y-3 py-6 md:py-8">
      <p
        className={`${FONTS.body} font-semibold text-[18px] md:text-[20px] tracking-[0.08em] uppercase leading-tight pt-[2px] text-[#3e0078]`}
      >
        {block.label}
      </p>
      <div className="flex flex-col gap-5">
        {block.description.map((para, i) => (
          <p key={i} className={`${FONTS.body} text-[18px] md:text-[26px] font-light leading-[1.6] text-black`}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

/** Component 3 – Metrics Section
 *  Layout matches Figma node 469-3414:
 *  - First: TAILORED SOLUTION + RESEARCH & EXECUTION text blocks (max-w-[1062px])
 *  - Second: AppStoreListing.png card (max-w-[1280px])
 *  - Third: Results intro + stats table (on light blue bg-e0f2ff w-full)
 */
export function CsMetricsSection({ blocks, studySlug }: Props) {
  const metricsBlock = blocks.find((b) => b.layoutType === 'metrics-grid');
  const pairBlock = blocks.find((b) => b.layoutType === 'text-with-image-pair');
  const tailoredBlock = blocks.find((b) => b.label.includes('SOLUTION') || b.label.includes('TAILORED'));
  const researchBlock = blocks.find((b) => b.label.includes('RESEARCH') || b.label.includes('EXECUTION'));

  return (
    <section className="bg-white w-full">
      {/* 1. TAILORED SOLUTION + RESEARCH & EXECUTION text blocks */}
      <div className="max-w-[1062px] mx-auto px-5 md:px-10 py-4 md:py-8">
        <div className="flex flex-col gap-4">
          {tailoredBlock && <LabelTextBlock block={tailoredBlock} />}
          {researchBlock && <LabelTextBlock block={researchBlock} />}
        </div>
      </div>

      {/* 2. Image card — pairBlock image (AppStoreListing.png) */}
      {pairBlock && pairBlock.images && pairBlock.images.length > 0 && (
        <div className="w-full px-5 md:px-10 pb-16">
          <div className="max-w-[1280px] mx-auto">
            {pairBlock.images.length === 1 ? (
              <div className="flex flex-col items-center">
                <img
                  src={pairBlock.images[0]}
                  alt="App store listings"
                  className="w-full h-auto md:h-[706px] object-cover rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] select-none pointer-events-none"
                />
                {pairBlock.imageCaptions && pairBlock.imageCaptions[0] && (
                  <p className={`${FONTS.body} font-light leading-[1.6] opacity-80 mt-3 text-[13px] text-black text-center w-full`}>
                    {pairBlock.imageCaptions[0]}
                  </p>
                )}
              </div>
            ) : studySlug === 'case-study-astrovedansh' ? (
              <div className="bg-[#fde8e4] rounded-[24px] p-4 overflow-hidden">
                <div className="flex gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-1">
                  {pairBlock.images.map((src, i) =>
                    src ? (
                      <img
                        key={i}
                        src={src}
                        alt={`Reel ${i + 1}`}
                        className="flex-none w-[130px] md:w-[160px] aspect-[9/16] object-cover rounded-[10px] snap-start"
                      />
                    ) : (
                      <div
                        key={i}
                        className="flex-none w-[130px] md:w-[160px] aspect-[9/16] rounded-[10px] bg-[#f5c0b0] flex items-center justify-center snap-start"
                      >
                        <span className={`${FONTS.body} text-[11px] text-[#c07060]`}>Reel {i + 1}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6 md:gap-10">
                {pairBlock.images.map((src, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-auto md:h-[637px] object-cover rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] select-none pointer-events-none"
                    />
                    {pairBlock.imageCaptions && pairBlock.imageCaptions[i] && (
                      <p className={`${FONTS.body} font-light leading-[1.6] opacity-80 mt-3 text-[13px] text-black text-center w-full`}>
                        {pairBlock.imageCaptions[i]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Stats table — full screen width with light blue #e0f2ff background */}
      {metricsBlock && (
        <div className="bg-[#e0f2ff] w-full py-16 md:py-24">
          <div className="max-w-[1062px] mx-auto px-5 md:px-10">
            {/* Intro paragraph */}
            {metricsBlock.description.length > 0 && (
              <div className="pb-10 md:pb-14">
                {metricsBlock.description.map((para, i) => (
                  <p
                    key={i}
                    className={`${FONTS.body} text-[20px] md:text-[32px] font-light leading-[1.5] text-[#181818]/80`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}

            {metricsBlock.metrics && metricsBlock.metrics.length > 0 && (
              <div className="w-full">
                {/* Table header */}
                <div className="grid grid-cols-[1fr_auto] pb-4 border-b-2 border-[#b8cfe0]">
                  <span className={`${FONTS.body} font-semibold text-[18px] md:text-[26px] tracking-[0.06em] uppercase text-[#49a7eb]`}>
                    What we tracked
                  </span>
                  <span className={`${FONTS.body} font-semibold text-[18px] md:text-[26px] tracking-[0.06em] uppercase text-[#49a7eb]`}>
                    RESULTS
                  </span>
                </div>
                {/* Rows */}
                {metricsBlock.metrics.map((metric, i) => (
                  <MetricRow
                    key={i}
                    metric={metric}
                    isLast={i === metricsBlock.metrics!.length - 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default CsMetricsSection;
