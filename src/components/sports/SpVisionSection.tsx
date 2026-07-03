import { spStats } from '../../data/sportsData';

export function SpVisionSection() {
  return (
    <section className="sp-vision">
      <div className="container">
        <span className="sp-vision__pill reveal">Our Vision</span>
        <p className="sp-vision__statement reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
          <img className="sp-vision__laurel sp-vision__laurel--l" src="/assets/images/sports/8u3af7N28Kln2F1lZ9dQ8EUSmE.png" alt="" />
          Our mission is simple - make sports marketing accessible, data-driven and effective for every brand.
          <img className="sp-vision__laurel sp-vision__laurel--r" src="/assets/images/sports/8u3af7N28Kln2F1lZ9dQ8EUSmE.png" alt="" />
        </p>
        <div className="sp-vision__stats">
          {spStats.map((s, i) => (
            <div key={s.label} className="sp-stat reveal" style={{ '--d': `${0.15 + i * 0.1}s` } as React.CSSProperties}>
              <div className="sp-stat__num">{s.value}<sup>+</sup></div>
              <div className="sp-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
        <img className="sp-vision__photo sp-vision__photo--1 reveal" src="/assets/images/sports/gEjPQlY41KkNIIEAhVu4gom2WQI.png" alt="" />
        <img className="sp-vision__photo sp-vision__photo--2 reveal" src="/assets/images/sports/AajvBMg3mm5dOZtltwCAcaIQws.png" alt="" />
        <img className="sp-vision__photo sp-vision__photo--3 reveal" src="/assets/images/sports/mVpHKuXhsvP4LCnrIIR1sQybonM.png" alt="" />
        <img className="sp-vision__photo sp-vision__photo--4 reveal" src="/assets/images/sports/Is0Q4MczAtncL7FhKQrxkiwf7s.png" alt="" />
      </div>
    </section>
  );
}
export default SpVisionSection;
