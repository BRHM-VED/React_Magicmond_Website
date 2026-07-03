import { CheckCircle } from 'lucide-react';
import { CALENDLY } from '../../utils/constants';

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <img className="about__photo reveal" src="/assets/images/home/about-team-award.webp" alt="The MagicMond team receiving an award" />
          <div>
            <h2 className="about__title reveal">
              We’re one of India’s top<br />
              <span className="hl">Digital growth teams, driven<br />by Marketing, Design and Tech.</span>
            </h2>
            <ul className="about__list">
              {['8 yrs+ experience in scaling brands digitally', 'Acquired 10 Cr+ customers', 'Generated 500 Cr+ in revenue.'].map((item, i) => (
                <li key={item} className="reveal" style={{ '--d': `${0.1 * (i + 1)}s` } as React.CSSProperties}>
                  <CheckCircle size={22} className="text-[#692083] fill-white shrink-0" />{item}
                </li>
              ))}
            </ul>
            <div className="about__cta reveal" style={{ '--d': '.4s' } as React.CSSProperties}>
              <a className="btn btn--sm" href={CALENDLY}>Know more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
