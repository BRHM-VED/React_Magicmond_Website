import { BrandMarquee } from '../common/BrandMarquee';
import { brandRows } from '../../data/homeData';

export function BrandsSection() {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands__grid">
          <h2 className="brands__title reveal">Brands we <span className="serif">grew with</span></h2>
          <div className="brands__rows">
            {brandRows.map((row, r) => (
              <BrandMarquee key={r} reverse={r === 1}>
                {row.map((tile, i) =>
                  tile.meta ? (
                    <div className="brand-tile brand-tile--meta" key={i}>
                      <img src={tile.image} alt={tile.alt} />
                      <span>Meta</span>
                    </div>
                  ) : (
                    <div className="brand-tile" key={i}><img src={tile.image} alt={tile.alt} /></div>
                  )
                )}
              </BrandMarquee>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default BrandsSection;
