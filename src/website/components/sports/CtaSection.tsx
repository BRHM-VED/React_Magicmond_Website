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
              <a className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer" href={CALENDLY}>Let’s collaborte</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CtaSection;
