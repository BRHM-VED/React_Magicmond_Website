import { COMPANY_EMAIL } from '../../utils/constants';

export function CtaSection() {
  return (
    <section className="c-cta">
      <div className="container">
        <h2 className="c-cta__title words">
          <span className="w-src">Have Any idea in Mind?</span>
          <span className="w-src" style={{ color: '#d86cff' }}>Let's Get Started</span>
        </h2>
        <p className="c-cta__text reveal">Take the first step, and contact us to discuss your marketing and business goals. Send us a message, and we will get back to you soon.</p>
        <a className="c-btn c-btn--sm reveal" style={{ '--d': '.15s' } as React.CSSProperties} href={`mailto:${COMPANY_EMAIL}`}>Send a mail  ✉️</a>
      </div>
    </section>
  );
}
export default CtaSection;
