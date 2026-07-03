import { spChannelLogos } from '../../data/sportsData';

export function SpChannelSection() {
  return (
    <section className="sp-channel">
      <div className="container">
        <h2 className="sp-heading words"><span className="w-src">Channel <span className="serif">partners</span></span></h2>
        <div className="sp-channel__logos reveal">
          {spChannelLogos.map((l) => <img key={l.alt} src={l.image} alt={l.alt} />)}
        </div>
      </div>
    </section>
  );
}
export default SpChannelSection;
