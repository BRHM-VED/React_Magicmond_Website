import { CALENDLY } from '../../utils/constants';

export function CtaSection() {
  return (
    <section className="ie-cta" id="cta">
      <div className="container">
        <div className="ie-cta__card">
          <img className="ie-cta__dots" src="/assets/images/common/cta-dots-pattern.webp" alt="" />
          <div className="ie-cta__content">
            <h2 className="ie-cta__title words">
              <span className="w-src">Take your business to</span>
              <span className="w-src serif">new heights!</span>
            </h2>
            <p className="ie-cta__text reveal">More leads. More sales. More growth. RealCons makes it happen for real traditional businesses.</p>
            <div className="ie-cta__btn reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
              <a className="btn btn--sm" href={CALENDLY}>Transform my business</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CtaSection;
