import { spServices } from '../../../data/sports.data';
import { CALENDLY } from '../../../utils/constants/constants';

export function ServicesSection() {
  return (
    <section className="sp-services">
      <div className="container">
        <h2 className="sp-heading words">
          <span className="w-src">From <span className="serif">boundaries</span> to <span className="serif">brand</span></span><br />
          <span className="w-src"><span className="serif">stories</span> – we do it all.</span>
        </h2>
        <p className="sp-services__sub reveal">Whether you want to be seen on the field, on the screen, or on the fan’s feed — we make it happen.</p>
        <div className="sp-services__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
          <a className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer" href={CALENDLY}>Let’s collaborte</a>
        </div>

        <div className="sp-services__grid">
          {spServices.map((s, i) => (
            <article key={s.title} className={`sp-svc${s.tall ? ' sp-svc--tall' : ''} reveal`} style={{ '--d': `${(i % 3) * 0.1}s` } as React.CSSProperties}>
              <h3 className="sp-svc__title">{s.title}</h3>
              <p className="sp-svc__desc">{s.desc}</p>
              <img className="sp-svc__img" src={s.image} alt="" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
