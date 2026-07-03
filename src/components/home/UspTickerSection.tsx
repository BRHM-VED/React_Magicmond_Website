import { useTicker } from '../../hooks/useTicker';
import { uspItems } from '../../data/homeData';

export function UspTickerSection() {
  const ticker = useTicker(uspItems.length, 2000);
  const tickerItems = [...uspItems, ...uspItems, ...uspItems];

  return (
    <section className="usp">
      <div className="container">
        <div className="usp__grid">
          <h2 className="usp__heading reveal">
            <img className="usp__sparkle" src="/assets/icons/sparkle.svg" alt="" />
            Not your usual
            <span className="serif">boutique marketing agency</span>
            <img className="usp__arrow" src="/assets/icons/arrow-curly.svg" alt="" />
          </h2>
          <div className="usp__ticker" aria-label="What makes us different" ref={ticker.viewportRef}>
            <div
              className="usp__list"
              ref={ticker.listRef}
              style={{ transform: `translateY(${ticker.offset}px)`, transition: ticker.animated ? undefined : 'none' }}
            >
              {tickerItems.map((item, i) => (
                <div key={i} className={`usp__item${i === ticker.index ? ' active' : ''}`}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default UspTickerSection;
