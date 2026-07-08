import type { CaseStudyBlock } from '../../../data/common/types';
import { FONTS } from '../../../utils/constants/fonts';

interface Props {
    blocks: CaseStudyBlock[];
    accentColor?: string;
    /** Extra images for the full-width scrolling strip (ad creatives, etc.) */
    stripImages?: string[];
}

/** Component 4 – Outcome Section
 *  Layout matches Figma node 469-3458:
 *  - First: OUTCOME block (max-w-[1062px])
 *  - Second: Advertise.png image (full width marquee strip)
 *  - Third: GROWTH PARTNERSHIP block (max-w-[1062px])
 */
export function CsOutcomeSection({ blocks, accentColor, stripImages = [] }: Props) {
    const outcomeBlock = blocks.find((b) => b.label.includes('OUTCOME') || b.label.includes('Outcome'));
    const growthBlock = blocks.find((b) => b.label.includes('GROWTH') || b.label.includes('Growth'));

    return (
        <section className="bg-white w-full">
            {/* Optional Image before Outcome text block (matching Figma node 469:4500) */}
            {outcomeBlock && outcomeBlock.layoutType === 'text-with-image' && outcomeBlock.images && outcomeBlock.images[0] && (
                <div className="max-w-[1280px] mx-auto px-5 md:px-10 pb-6 pt-10 flex flex-col items-center">
                    <img
                        src={outcomeBlock.images[0]}
                        alt="Outcome visual"
                        className="w-full h-auto md:h-[637px] object-cover rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] select-none pointer-events-none"
                    />
                    {outcomeBlock.title && (
                        <p className={`${FONTS.body} font-light leading-[1.6] opacity-80 mt-3 text-[13px] text-black text-center w-full`}>
                            {outcomeBlock.title}
                        </p>
                    )}
                </div>
            )}

            {/* 1. OUTCOME block */}
            {outcomeBlock && (
                <div className="max-w-[1062px] mx-auto px-5 md:px-10 pt-10 pb-2">
                    <div className="grid grid-cols-1 md:grid-cols-[301.76px_1fr] gap-x-6 gap-y-3 py-6 md:py-8">
                        <p
                            className={`${FONTS.body} font-semibold text-[18px] md:text-[20px] tracking-[0.08em] uppercase leading-tight pt-[2px]`}
                            style={{ color: accentColor || '#3e0078' }}
                        >
                            {outcomeBlock.label}
                        </p>
                        <div className="flex flex-col gap-5">
                            {outcomeBlock.description.map((para, i) => (
                                <p key={i} className={`${FONTS.body} text-[18px] md:text-[26px] font-light leading-[1.6] text-black`}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* 2. Full-width horizontal image strip — ad creatives banner */}
            {stripImages.length > 0 && (
                <div className="w-full overflow-hidden bg-[#f0f4fa] py-0 border-y border-[#dde4ee]">
                    {stripImages.length === 1 ? (
                        <img
                            src={stripImages[0]}
                            alt="Ad creatives banner"
                            className="w-full h-auto object-cover select-none pointer-events-none block"
                        />
                    ) : (
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
                                        <span className={`${FONTS.body} text-[12px] text-[#8098b8]`}>Ad creative {i + 1}</span>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Placeholder strip if no images */}
            {stripImages.length === 0 && (
                <div className="w-full overflow-hidden bg-[#f0f4fa] border-y border-[#dde4ee]">
                    <div className="flex gap-4 px-4 py-6 overflow-x-auto scrollbar-none">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex-none w-[200px] md:w-[260px] aspect-[4/3] rounded-[10px] bg-[#dde6f0] flex items-center justify-center"
                            >
                                <span className={`${FONTS.body} text-[12px] text-[#8098b8]`}>Ad creative {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 3. GROWTH PARTNERSHIP block */}
            {growthBlock && (
                <div className="max-w-[1062px] mx-auto px-5 md:px-10 py-4 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-[301.76px_1fr] gap-x-6 gap-y-3 py-6 md:py-8">
                        <div
                            className="font-['Stack_Sans_Text:SemiBold'] font-semibold leading-tight pt-[2px] text-[18px] md:text-[20px] tracking-[0.08em] uppercase"
                            style={{ color: accentColor || '#3e0078' }}
                        >
                            <p className="mb-0">GROWTH</p>
                            <p>PARTNERSHIP</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {growthBlock.description.map((para, i) => (
                                <p key={i} className={`${FONTS.body} text-[18px] md:text-[26px] font-light leading-[1.6] text-black`}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CsOutcomeSection;
