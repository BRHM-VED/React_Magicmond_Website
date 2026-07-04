import { BrandMarquee } from '../../../common/BrandMarquee';
import { spBrandRows } from '../../../data/sports.data';
import { CALENDLY } from '../../../utils/constants/constants';

export function BrandsSection() {
  return (
    <section className="sp-brands">
      <div className="container">
        <h2 className="sp-heading words"><span className="w-src">Brands we <span className="serif">grew with</span></span></h2>
        <div className="sp-brands__cta reveal">
          <a className="btn btn--sm" href={CALENDLY}>Let’s grow together</a>
        </div>
      </div>
      <div className="container">
        <div className="sp-brands__rows">
          {spBrandRows.map((row, r) => (
            <BrandMarquee key={r} reverse={r === 1}>
              {row.map((tile, i) => (
                <div className="brand-tile" key={i}><img src={tile.image} alt={tile.alt} /></div>
              ))}
            </BrandMarquee>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BrandsSection;
