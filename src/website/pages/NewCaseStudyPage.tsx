import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Footer } from '../../common/Footer';
import { CsHeroSection } from '../components/case-study/CsHeroSection';
import type { NewCaseStudy, CaseStudyBlock, CaseStudyMetric } from '../../data/common/types';
import { FONTS } from '../../utils/constants/fonts';

interface Props {
  study: NewCaseStudy;
  /** Optional extra image URLs for the scrolling ad strip after OUTCOME */
  stripImages?: string[];
}

/* ─────────────────────────── Metric helpers ─────────────────────────── */

/** Parse a metric value string into prefix, number, suffix, and trailing details */
function parseMetricValue(valStr: string) {
  let details = '';
  const openParenIndex = valStr.indexOf('(');
  if (openParenIndex !== -1) {
    const detailsRaw = valStr.substring(openParenIndex).trim();
    details = detailsRaw.replace(/^\(|\)$/g, '').trim();
    valStr = valStr.substring(0, openParenIndex).trim();
  }

  const numMatch = valStr.match(/(\d+(?:\.\d+)?)/);
  if (!numMatch) {
    return { prefix: '', number: valStr, suffix: '', details, isNumeric: false };
  }

  const number = numMatch[1];
  const numberIndex = valStr.indexOf(number);
  const prefix = valStr.substring(0, numberIndex).trim();
  const suffix = valStr.substring(numberIndex + number.length).trim();

  const isNumeric =
    prefix.length === 0 ||
    /^(?:[₹$€\s]*|upto|held under the|on the top channels|across channels|approx\.?)$/i.test(prefix.trim()) ||
    prefix.trim().length <= 4;

  return { prefix, number, suffix, details, isNumeric };
}

/** Metrics table row */
function MetricRow({ metric, isLast }: { metric: CaseStudyMetric; isLast: boolean }) {
  // If pre-parsed fields are present, use them. Otherwise, run parseMetricValue
  const prefix = metric.prefix !== undefined ? metric.prefix : null;
  const number = metric.number !== undefined ? metric.number : null;
  const suffix = metric.suffix !== undefined ? metric.suffix : null;
  const details = metric.details !== undefined ? metric.details : null;
  const isNumericConfig = metric.isNumeric;

  let parsed = { prefix: '', number: '', suffix: '', details: '', isNumeric: false };
  if (number !== null) {
    parsed = {
      prefix: prefix || '',
      number: number || '',
      suffix: suffix || '',
      details: details || '',
      isNumeric: isNumericConfig !== false,
    };
  } else {
    parsed = parseMetricValue(metric.value);
  }

  const { prefix: finalPrefix, number: finalNumber, suffix: finalSuffix, details: finalDetails, isNumeric } = parsed;

  if (!isNumeric) {
    return (
      <div className={`grid grid-cols-[1fr_auto] gap-x-4 items-center py-5 md:py-7 ${!isLast ? 'border-b border-[#b8cfe0]' : ''}`}>
        <span className={`${FONTS.inter} text-[12px] md:text-[24px] font-light text-black`}>{metric.label}</span>
        <span className={`${FONTS.inter} text-[12px] md:text-[24px] font-light text-black text-right max-w-[280px] md:max-w-[600px]`}>
          {metric.value}
        </span>
      </div>
    );
  }

  const isGradientSuffix = finalSuffix === '%' || finalSuffix === 'M' || finalSuffix.toUpperCase() === 'CR';
  const isLongSuffix = finalSuffix.length > 4;

  return (
    <div className={`grid grid-cols-[1fr_auto] items-center py-5 md:py-7 ${!isLast ? 'border-b border-[#b8cfe0]' : ''}`}>
      <span className={`${FONTS.inter} text-[15px] md:text-[26px] font-light text-black`}>{metric.label}</span>
      <div className="flex items-start gap-2.5 md:gap-[18px] text-right">
        {(finalPrefix || finalDetails) && (
          <div className="flex flex-col items-end pt-[4px] md:pt-[10px] gap-1 md:gap-1.5">
            {finalPrefix && (
              <span className={`${FONTS.inter} text-[12px] md:text-[18px] text-black opacity-60 leading-none`}>
                {finalPrefix}
              </span>
            )}
            {finalDetails && (
              <span className={`${FONTS.inter} text-[12px] md:text-[22px] font-light text-black/60 leading-tight`}>
                {finalDetails}
              </span>
            )}
          </div>
        )}
        <div className="flex items-start gap-1">
          <span className={`${FONTS.head} text-[40px] md:text-[80px] font-normal text-black leading-none`}>
            {finalNumber}
          </span>
          {finalSuffix && (
            <span
              className={isLongSuffix
                ? `${FONTS.inter} text-[14px] md:text-[22px] font-light text-black/70 pl-1 leading-tight`
                : `${FONTS.head} text-[16px] md:text-[32px] font-normal pt-[4px] md:pt-[12px] leading-none ${isGradientSuffix
                  ? 'bg-gradient-to-br from-[#49bfb5] to-[#4ea7e6] bg-clip-text text-transparent'
                  : 'text-black'
                }`
              }
            >
              {finalSuffix}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Block renderers ─────────────────────────── */

/** Text-only block: accent label on left, paragraphs on right */
function TextBlock({ block }: { block: CaseStudyBlock }) {
  const renderLabel = (label: string) => {
    const words = label.trim().split(/\s+/);
    if (words.length <= 1) {
      return <p className="mb-0">{label}</p>;
    }
    const lastWord = words.pop();
    const firstLine = words.join(' ');
    return (
      <>
        <p className="mb-0">{firstLine}</p>
        <p className="mb-0">{lastWord}</p>
      </>
    );
  };

  return (
    <div className="max-w-[1062px] mx-auto px-5 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-[301.76px_1fr] gap-x-6 gap-y-3 py-4 md:py-8">
        {/* Label */}
        <div
          className={`${FONTS.inter} font-semibold text-[14px] md:text-[20px] tracking-[0.08em] uppercase leading-tight pt-[2px]`}
          style={{ color: '#3e0078' }}
        >
          {renderLabel(block.label)}
        </div>
        {/* Text */}
        <div className="flex flex-col gap-5">
          {block.description.map((para, i) => (
            <p
              key={i}
              className={`${FONTS.inter} text-[15px] md:text-[26px] font-light leading-[1.6] text-black`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Full-width image block */
function ImageBlock({ block }: { block: CaseStudyBlock }) {
  if (!block.images || block.images.length === 0) return null;

  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-6 md:py-8 flex flex-col items-center">
      <img
        src={block.images[0]}
        alt={block.imageCaptions?.[0] || 'Case study visual'}
        className="w-full h-auto md:h-[637px] object-cover rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] select-none pointer-events-none"
      />
      {block.imageCaptions?.[0] && (
        <p className={`${FONTS.inter} font-light leading-[1.6] opacity-80 mt-3 text-[13px] text-black text-center w-full`}>
          {block.imageCaptions[0]}
        </p>
      )}
    </div>
  );
}

/** Metrics grid block (blue background) */
function MetricsBlock({ block }: { block: CaseStudyBlock }) {
  return (
    <div className="bg-[#e0f2ff] w-full py-16 md:py-24">
      <div className="max-w-[1062px] mx-auto px-5 md:px-10">
        {/* Intro paragraph */}
        {block.description.length > 0 && (
          <div className="pb-10 md:pb-14">
            {block.description.map((para, i) => (
              <p
                key={i}
                className={`${FONTS.inter} text-[16px] md:text-[32px] font-light leading-[1.5] text-[#181818]/80`}
              >
                {para}
              </p>
            ))}
          </div>
        )}

        {block.metrics && block.metrics.length > 0 && (
          <div className="w-full">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_auto] pb-4 border-b-2 border-[#b8cfe0]">
              <span className={`${FONTS.inter} font-semibold text-[14px] md:text-[26px] tracking-[0.06em] uppercase text-[#49a7eb]`}>
                What we tracked
              </span>
              <span className={`${FONTS.inter} font-semibold text-[14px] md:text-[26px] tracking-[0.06em] uppercase text-[#49a7eb]`}>
                RESULTS
              </span>
            </div>
            {/* Rows */}
            {block.metrics.map((metric, i) => (
              <MetricRow
                key={i}
                metric={metric}
                isLast={i === block.metrics!.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Scrolling strip of ad creative images */
function StripSection({ stripImages }: { stripImages: string[] }) {
  if (stripImages.length === 0) {
    return (
      <div className="w-full overflow-hidden bg-[#f0f4fa] border-y border-[#dde4ee]">
        <div className="flex gap-4 px-4 py-6 overflow-x-auto scrollbar-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex-none w-[200px] md:w-[260px] aspect-[4/3] rounded-[10px] bg-[#dde6f0] flex items-center justify-center"
            >
              <span className={`${FONTS.inter} text-[12px] text-[#8098b8]`}>Ad creative {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (stripImages.length === 1) {
    return (
      <div className="w-full overflow-hidden bg-[#f0f4fa] py-0 border-y border-[#dde4ee]">
        <img
          src={stripImages[0]}
          alt="Ad creatives banner"
          className="w-full h-auto object-cover select-none pointer-events-none block"
        />
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-[#f0f4fa] py-0 border-y border-[#dde4ee]">
      <div className="flex gap-4 px-4 py-6 overflow-x-auto scrollbar-none snap-x snap-mandatory">
        {stripImages.map((src, i) =>
          src ? (
            <img
              key={i}
              src={src}
              alt={`Ad creative ${i + 1}`}
              className="flex-none w-[200px] md:w-[260px] aspect-[4/3] object-cover rounded-[10px] snap-start shadow-sm border border-white/60"
            />
          ) : (
            <div
              key={i}
              className="flex-none w-[200px] md:w-[260px] aspect-[4/3] rounded-[10px] bg-[#dde6f0] flex items-center justify-center snap-start"
            >
              <span className={`${FONTS.inter} text-[12px] text-[#8098b8]`}>Ad creative {i + 1}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────── Page component ─────────────────────────── */

export default function NewCaseStudyPage({ study, stripImages = [] }: Props) {
  usePageMeta(study.title, study.metaDescription);
  useReveal();


  // Find the OUTCOME/TAILORED SOLUTION block index (sectionNumber '06') so we know where to insert the strip
  const outcomeIndex = study.blocks.findIndex(
    (b) => b.sectionNumber === '06' || b.label.includes('OUTCOME') || b.label.includes('Outcome')
  );

  return (
    <div className="bg-white text-[#0e1628] min-h-screen relative w-full overflow-hidden">
      <main>
        {/* Component 1: Hero — full-width screenshot with gradient fade + text overlay */}
        <CsHeroSection study={study} heroImage={study.brand.logo} />

        {/* Optional Top Image (e.g. Sales landing page before Highlights) */}
        {study.topImage && (
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 md:pt-14 flex flex-col items-center">
            <img
              src={study.topImage}
              alt="Intro visual"
              className="w-full h-auto md:h-[637px] object-cover rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] select-none pointer-events-none"
            />
            {study.topImageCaption && (
              <p className={`${FONTS.inter} font-light leading-[1.6] opacity-80 mt-3 text-[13px] text-black text-center w-full`}>
                {study.topImageCaption}
              </p>
            )}
          </div>
        )}

        {/* Sequential block renderer — renders each block in array order */}
        <section className="bg-white w-full">
          {study.blocks.map((block, i) => {
            // Render the strip AFTER the OUTCOME block
            const showStripAfter = i === outcomeIndex;

            return (
              <div key={i}>
                {block.layoutType === 'text-only' && (
                  <TextBlock block={block} />
                )}
                {block.layoutType === 'full-width-image' && (
                  <ImageBlock block={block} />
                )}
                {block.layoutType === 'metrics-grid' && (
                  <MetricsBlock block={block} />
                )}

                {/* Strip images render after OUTCOME */}
                {showStripAfter && (
                  <StripSection stripImages={stripImages} />
                )}
              </div>
            );
          })}
        </section>
      </main>
      <Footer
        gradientColor="rgba(0, 85, 200, 0.35)"
        wordmarkColor="#3366cc"
        backgroundColor="#0e1628"
      />
    </div>
  );
}
