import { ieGallery } from '../../data/infraedgeData';

export function IeGlimpseSection() {
  return (
    <section className="ie-glimpse">
      <div className="container">
        <h2 className="ie-glimpse__title words">
          <span className="w-src">Glimpse of <span className="serif">creativity</span>, <span className="serif">strategy</span> &amp;</span><br />
          <span className="w-src"><span className="serif">technology</span> in one hood</span>
        </h2>
        <p className="ie-glimpse__sub reveal">Real results. Real growth. See how our strategies have powered brands to scale beyond boundaries.</p>
      </div>
      <div className="ie-glimpse__marquee">
        <div className="ie-glimpse__track">
          {[...ieGallery, ...ieGallery].map((src, i) => (
            <img key={i} src={src} alt={i < ieGallery.length ? 'Work sample' : ''} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default IeGlimpseSection;
