import { InfraEdgeButton } from '../../../common/button/InfraEdgeButton';

function OfferCard() {
  return (
    <div className="relative w-full md:w-[368px] border-t border-x border-[#4ea7e6] border-b-0 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] reveal-scale">
      <img
        className="w-full h-auto object-cover pointer-events-none block"
        src="/assets/images/infraedge/offer-image.webp"
        alt="100 Qualified Meetings in 90 Days Flagship Growth Offer"
      />
    </div>
  );
}

export function OfferSection() {
  return (
    <section className="py-16 md:py-24 px-0 md:px-10">
      <div className="w-full md:container px-0 md:px-10 mx-auto max-w-[1240px]">
        {/* Card container — rounded on desktop, edge-to-edge on mobile */}
        <div className="relative flex flex-col md:flex-row md:items-stretch md:justify-between rounded-none md:rounded-[20px] bg-gradient-to-b from-[#1f2840] to-[#101626] border-y md:border border-[#49405a]/60 border-x-0 md:border-x overflow-hidden shadow-2xl reveal">

          {/* Left: text content */}
          <div className="flex flex-col items-start text-left gap-10 px-5 md:px-12 py-10 md:py-10 md:self-center">
            {/* Heading */}
            <div className="flex flex-col gap-[5px]">
              <h2 className="font-head font-bold text-[32px] md:text-[52px] leading-none text-white whitespace-nowrap">
                100 Qualified&nbsp;
              </h2>
              <div className="flex gap-[11px] items-start">
                <h2 className="font-head font-bold text-[32px] md:text-[52px] leading-none text-white">
                  Meetings in&nbsp;
                </h2>
                <h2 className="font-serif italic text-[32px] md:text-[52px] leading-none text-[#7ebaff] tracking-[1.04px]">
                  90 Days
                </h2>
              </div>
            </div>

            {/* Body */}
            <p className="font-inter text-[14px] md:text-[16px] leading-[1.6] text-white/80 max-w-[441px] md:max-w-[580px]">
              InfraEdge is not a marketing service. It is a 90-day qualified meeting engine for construction and real estate businesses that cannot afford random lead flow anymore.
            </p>

            {/* CTA */}
            <InfraEdgeButton variant="small" href="https://infraedgelp.magicmond.com/" className="w-full md:w-auto px-5">
              Explore this offer
            </InfraEdgeButton>
          </div>

          {/* Right: image card — pinned to bottom of container */}
          <div className="relative md:w-[500px] md:h-[504px] flex-shrink-0 flex items-end justify-center px-5 md:px-0">
            {/* On mobile: normal flow image, no extra height */}
            <div className="w-full md:absolute md:bottom-[-25.5px] md:left-1/2 md:-translate-x-1/2 md:w-[368px] md:h-[451px]">
              <OfferCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OfferSection;
