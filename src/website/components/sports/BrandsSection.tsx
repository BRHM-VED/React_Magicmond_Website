import { BrandMarquee } from '../../../common/BrandMarquee';
import { spBrandRows } from '../../../data/sports.data';
import { CALENDLY } from '../../../utils/constants/constants';

export function BrandsSection() {
  return (
    <section className="sp-brands">
      <div className="container">
        <h2 className="sp-heading words"><span className="w-src">Brands we <span className="serif">grew with</span></span></h2>
        <div className="sp-brands__cta reveal">
          <a className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer" href={CALENDLY}>Let’s grow together</a>
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
