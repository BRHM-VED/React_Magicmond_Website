import { CALENDLY } from '../../../utils/constants/constants';
import { brandTickerRows, websiteTickerRows } from '../../../data/consultation.data';

function TickerGroup({ rows, caption }: { rows: string[][]; caption?: string }) {
  return (
    <div className="c-ticker-group">
      {rows.map((row, i) => (
        <div key={i} className={`c-ticker${i % 2 ? ' c-ticker--reverse' : ''}`}>
          <div className="c-ticker__track">
            {[...row, ...row].map((item, j) => <span key={j}>{item}</span>)}
          </div>
        </div>
      ))}
      {caption && <p className="c-ticker-caption">{caption}</p>}
    </div>
  );
}

export function OfferingsSection() {
  return (
    <section className="c-offerings" id="offerings">
      <div className="c-block">
        <p className="c-block__label reveal">How to build from 0 to 1</p>
        <h2 className="c-block__title reveal" style={{ '--d': '.1s' } as React.CSSProperties}>We create a unique brand identity</h2>
        <p className="c-block__desc reveal" style={{ '--d': '.2s' } as React.CSSProperties}>
          Our approach involves a deep dive into your business <b>✔︎ Values, ✔ ︎Mission, &amp; ✔ ︎Goals</b> to create a brand identity that not only stands out in the market but also connects authentically with your customers.
        </p>
        <a className="c-btn c-btn--sm reveal" style={{ '--d': '.3s' } as React.CSSProperties} href={CALENDLY}>Let’s Create</a>
      </div>

      <TickerGroup rows={brandTickerRows} caption={'We curate every aspect of your brand to ensure\na cohesive and memorable presence.'} />

      <div className="c-block">
        <h2 className="c-block__title reveal">We build a website that converts</h2>
        <p className="c-block__desc reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
          We build digital experiences that convert visitors into customers, that go beyond aesthetics. We take a strategic approach, blending our UX expertise to create seamless journeys for your audience, be it an e-commerce store or a website for your business.
        </p>
        <a className="c-btn c-btn--sm reveal" style={{ '--d': '.2s' } as React.CSSProperties} href={CALENDLY}>Let’s build</a>
      </div>

      <TickerGroup rows={websiteTickerRows} />

      <div className="c-block" style={{ paddingBottom: 0 }}>
        <p className="c-block__label reveal">How we build an online brand</p>
      </div>
    </section>
  );
}
export default OfferingsSection;
