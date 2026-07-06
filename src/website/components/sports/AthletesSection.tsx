import { CALENDLY } from '../../../utils/constants/constants';

export function AthletesSection() {
  return (
    <section className="sp-athletes">
      <div className="container">
        <h2 className="sp-heading words"><span className="w-src">Sport <span className="serif">athletes</span></span></h2>
        <div className="sp-athletes__cta reveal">
          <a className="inline-flex items-center justify-center h-[45px] md:h-[46px] px-5 rounded-lg bg-[#692083] hover:bg-[#7d279c] text-white font-head font-medium text-[14px] md:text-[15.9px] tracking-[-0.5px] transition-all duration-300 shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_0_1px_rgba(255,255,255,0.14)] hover:shadow-[inset_0_0_35px_1px_rgba(18,24,33,0.2),0_0_24px_rgba(192,85,229,0.45),0_0_0_1px_rgba(255,255,255,0.2)] cursor-pointer" href={CALENDLY}>Let’s grow together</a>
        </div>
        <img className="sp-athletes__collage sp-athletes__collage--desktop reveal" src="/assets/images/sports/athletes-collage-desktop.webp" alt="Sport athletes we work with: Akash Chopra, Navjot S Sidhu, Irfan Pathan, R Ashwin and more" />
        <img className="sp-athletes__collage sp-athletes__collage--mobile reveal" src="/assets/images/sports/athletes-collage-mobile.webp" alt="Sport athletes we work with" />
      </div>
    </section>
  );
}
export default AthletesSection;
