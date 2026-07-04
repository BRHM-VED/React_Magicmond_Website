import { CALENDLY } from '../../../utils/constants/constants';

function OfferCard() {
  return (
    <div className="ie-offer__visual reveal-scale">
      <p className="ie-offer__visual-label">Flagship Growth Offer</p>
      <div className="ie-offer__visual-num">100</div>
      <p className="ie-offer__visual-sub">
        <span className="dim">Sales-Ready Meetings for</span>
        <span className="strong">For builders, developers, and construction founders seeking predictable growth.</span>
      </p>
      <img src="/assets/images/infraedge/offer-handshake.webp" alt="Handshake" />
    </div>
  );
}

interface OfferSectionProps {
  end?: boolean;
}

export function OfferSection({ end }: OfferSectionProps) {
  return (
    <section className={`ie-offer${end ? ' ie-offer--end' : ''}`}>
      <div className="container">
        <div className={end ? 'ie-offer__card' : 'ie-offer__card reveal'}>
          <div>
            <h2 className="ie-offer__title">100 Qualified<br />Meetings in <span className="serif">90 Days</span></h2>
            <p className="ie-offer__text">InfraEdge is not a marketing service. It is a 90-day qualified meeting engine for construction and real estate businesses that cannot afford random lead flow anymore.</p>
            <div className="ie-offer__cta">
              <a className="btn btn--sm" href={CALENDLY}>{end ? 'Explore InfraEdge' : 'Explore Offer'}</a>
            </div>
          </div>
          <OfferCard />
        </div>
      </div>
    </section>
  );
}
export default OfferSection;
