import { CALENDLY } from '../../../utils/constants/constants';
import { brandTickerRows, websiteTickerRows } from '../../../data/consultation.data';

function TickerGroup({ rows, caption }: { rows: string[][]; caption?: string }) {
  return (
    <div className="border-t border-b border-[#0e081d]/14 py-[26px] overflow-hidden">
      {rows.map((row, i) => (
        <div key={i} className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] mt-4 first:mt-0">
          <div
            className="flex items-center gap-[34px] w-max"
            style={{ animation: `${i % 2 ? 'marquee-right' : 'marquee-left'} 40s linear infinite` }}
          >
            {[...row, ...row].map((item, j) => (
              <span key={j} className="font-bold text-[22px] md:text-[34px] whitespace-nowrap text-[#6e0a91] flex items-center gap-[34px]">
                {item}
                <span className="text-[20px] text-[#6e0a91]/70 font-normal">✦</span>
              </span>
            ))}
          </div>
        </div>
      ))}
      {caption && <p className="pt-[22px] px-10 text-center italic font-medium text-[15px] leading-[1.4] text-[#0e081d] whitespace-pre-line">{caption}</p>}
    </div>
  );
}

export function OfferingsSection() {
  return (
    <section className="relative bg-white rounded-t-[40px] py-[110px] md:pb-[90px] text-[#0e081d]" id="offerings">
      <div className="max-w-[900px] mx-auto px-5 py-10 md:px-10 md:py-[60px]">
        <p className="flex items-center gap-2.5 font-bold text-[16px] text-[#5d007e] reveal">
          <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#5d007e] text-white text-[15px] font-normal">✦</span>
          How to build from 0 to 1
        </p>
        <h2 className="mt-5 font-bold text-[34px] md:text-[60px] leading-[1.11] tracking-[-0.02em] text-[#0e081d] reveal" style={{ '--d': '.1s' } as React.CSSProperties}>We create a unique brand identity</h2>
        <p className="mt-5 max-w-[760px] text-[18px] leading-[1.4] text-[#0e081d] reveal" style={{ '--d': '.2s' } as React.CSSProperties}>
          Our approach involves a deep dive into your business <b className="text-[#6e0a91] font-bold">✔︎ Values, ✔ ︎Mission, &amp; ✔ ︎Goals</b> to create a brand identity that not only stands out in the market but also connects authentically with your customers.
        </p>
        <a className="inline-flex items-center justify-center mt-7 px-9 py-4 rounded-full bg-[#4b0964] font-inter font-medium text-[18px] text-white hover:bg-[#5d007e] hover:-translate-y-0.5 transition-all duration-300 reveal" style={{ '--d': '.3s' } as React.CSSProperties} href={CALENDLY}>Let’s Create</a>
      </div>

      <TickerGroup rows={brandTickerRows} caption={'We curate every aspect of your brand to ensure\na cohesive and memorable presence.'} />

      <div className="max-w-[900px] mx-auto px-5 py-10 md:px-10 md:py-[60px]">
        <h2 className="mt-5 font-bold text-[34px] md:text-[60px] leading-[1.11] tracking-[-0.02em] text-[#0e081d] reveal">We build a website that converts</h2>
        <p className="mt-5 max-w-[760px] text-[18px] leading-[1.4] text-[#0e081d] reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
          We build digital experiences that convert visitors into customers, that go beyond aesthetics. We take a strategic approach, blending our UX expertise to create seamless journeys for your audience, be it an e-commerce store or a website for your business.
        </p>
        <a className="inline-flex items-center justify-center mt-7 px-9 py-4 rounded-full bg-[#4b0964] font-inter font-medium text-[18px] text-white hover:bg-[#5d007e] hover:-translate-y-0.5 transition-all duration-300 reveal" style={{ '--d': '.2s' } as React.CSSProperties} href={CALENDLY}>Let’s build</a>
      </div>

      <TickerGroup rows={websiteTickerRows} />

      <div className="max-w-[900px] mx-auto px-5 py-10 md:px-10 md:py-[60px]" style={{ paddingBottom: 0 }}>
        <p className="flex items-center gap-2.5 font-bold text-[16px] text-[#5d007e] reveal">
          <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#5d007e] text-white text-[15px] font-normal">✦</span>
          How we build an online brand
        </p>
      </div>
    </section>
  );
}

export default OfferingsSection;
