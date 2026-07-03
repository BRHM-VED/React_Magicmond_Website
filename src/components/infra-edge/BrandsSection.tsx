import { BrandMarquee } from '../common/BrandMarquee';
import { ieBrands } from '../../data/infra-edge.data';

export function BrandsSection() {
  return (
    <section className="ie-brands brands">
      <div className="container">
        <div className="brands__grid">
          <h2 className="brands__title reveal">Brands we <span className="serif">grew with</span></h2>
          <div className="brands__rows">
            <BrandMarquee>
              {ieBrands.map((b) => <div className="brand-tile" key={b}><img src={b} alt="" /></div>)}
            </BrandMarquee>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BrandsSection;
