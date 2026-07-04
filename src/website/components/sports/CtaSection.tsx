import { CALENDLY } from '../../../utils/constants/constants';

export function CtaSection() {
  return (
    <section className="sp-cta" id="cta">
      <div className="container">
        <div className="sp-cta__card">
          <img className="sp-cta__dots" src="/assets/images/common/cta-dots-pattern.webp" alt="" />
          <div className="sp-cta__content">
            <h2 className="sp-cta__title words">
              <span className="w-src">Let’s bring your brand</span><br />
              <span className="w-src">to <span className="serif">cricket’s biggest moments.</span></span>
            </h2>
            <p className="sp-cta__text reveal">Partner with us to make your brand a lasting part of the game — in cricket’s biggest moments.</p>
            <div className="sp-cta__btn reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
              <a className="btn btn--sm" href={CALENDLY}>Let’s collaborte</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CtaSection;
