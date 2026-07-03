import { CALENDLY } from '../../utils/constants';

export function SpAthletesSection() {
  return (
    <section className="sp-athletes">
      <div className="container">
        <h2 className="sp-heading words"><span className="w-src">Sport <span className="serif">athletes</span></span></h2>
        <div className="sp-athletes__cta reveal">
          <a className="btn btn--sm" href={CALENDLY}>Let’s grow together</a>
        </div>
        <img className="sp-athletes__collage sp-athletes__collage--desktop reveal" src="/assets/images/sports/VNnS2MlLGYg12d4wJnlwc3yoAE.png" alt="Sport athletes we work with: Akash Chopra, Navjot S Sidhu, Irfan Pathan, R Ashwin and more" />
        <img className="sp-athletes__collage sp-athletes__collage--mobile reveal" src="/assets/images/sports/nijMT8qhbUyXZii9FgRVfFe62sA.png" alt="Sport athletes we work with" />
      </div>
    </section>
  );
}
export default SpAthletesSection;
