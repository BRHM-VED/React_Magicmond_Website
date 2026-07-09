import { spServices } from '../../../data/sports/sportsData';
import { CALENDLY } from '../../../utils/constants/constants';
import { SportsButton } from '../../../common/button/SportsButton';

export function ServicesSection() {
  return (
    <section id="service" className="bg-[#010502] pb-20 md:py-28 px-5 md:px-10 text-center overflow-hidden w-full relative">
      <div className="w-full md:container mx-auto px-0 max-w-[1240px] relative z-10">
        <h2 className="font-body font-medium text-[26px] sm:text-[36px] md:text-[54px] leading-[1.25] md:leading-[1.15] tracking-[-0.8px] md:tracking-[-1.9px] text-white text-center max-w-[950px] mx-auto reveal">
          From Boundaries
          <img
            src="/assets/images/sports/leafSports.webp"
            className="h-[24px] sm:h-[34px] md:h-[42px] lg:h-[72px] w-auto inline-block align-middle mx-2.5 md:mx-3.5 select-none pointer-events-none"
            alt=""
          />
          to Brand <br className="hidden md:block" />
          Stories — We Do It All.
        </h2>

        <p className="text-white/95 md:text-[#aaaaaa] font-head font-normal text-[12px] md:text-[16.6px] leading-[1.65] text-center max-w-[690px] mx-auto mt-6 reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
          Whether you want to be seen on the field, on the screen, or on the fan's feed — we make it happen.
        </p>

        <div className="mt-8 reveal flex justify-center w-full px-5 md:px-0" style={{ '--d': '.15s' } as React.CSSProperties}>
          <SportsButton variant="small" href={CALENDLY} className="w-full md:w-auto">
            Transform my business
          </SportsButton>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.88fr] gap-6 max-w-[1240px] mx-auto mt-10 md:mt-16 text-left">
          {spServices.map((s, i) => {
            const cardClasses = `relative border-[1.5px] border-[#00ac79]/30 hover:border-[#00ac79]/60 bg-[#0e131e] bg-[radial-gradient(circle_at_bottom_right,rgba(0,172,121,0.12),transparent_65%)] p-6 md:p-6 rounded-[12px] transition-all duration-300 overflow-hidden min-h-[250px] flex flex-col justify-start reveal hover:shadow-[0_0_24px_rgba(0,172,121,0.15)] ${s.tall
              ? 'lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:h-full lg:min-h-[524px] max-w-[360px] w-full mx-auto'
              : ''
              }`;

            let imgClasses = '';
            if (s.title === "IP Creation & Content Management") {
              imgClasses = 'absolute right-[-50px] bottom-[-70px] w-[60%] md:w-[95%] max-w-[280px] pointer-events-none select-none object-contain';
            } else if (s.title === "Sports Partnerships") {
              imgClasses = 'absolute right-[-25px] bottom-[-50px] w-[60%] md:w-[80%] max-w-[180px] pointer-events-none select-none object-contain';
            } else if (s.title === "Athlete Sponsorship") {
              imgClasses = 'absolute right-[-30px] bottom-[-40px] w-[45%] md:w-[55%] max-w-[190px] pointer-events-none select-none object-contain';
            } else if (s.title === "Digital Sports Marketing") {
              imgClasses = 'absolute right-[-10px] bottom-[-30px] w-[60%] md:w-[50%] max-w-[170px] pointer-events-none select-none object-contain';
            } else if (s.title === "Activation & On-Ground") {
              imgClasses = 'absolute right-[-20px] bottom-[-50px] w-[80%] md:w-[45%] max-w-[180px] pointer-events-none select-none object-contain';
            } else {
              imgClasses = 'absolute right-[-20px] bottom-[-20px] w-[35%] md:w-[50%] pointer-events-none select-none object-contain';
            }

            return (
              <article
                key={s.title}
                className={cardClasses}
                style={{ '--d': `${(i % 3) * 0.1}s` } as React.CSSProperties}
              >
                <h3 className="text-white font-head font-bold text-[18px] md:text-[20px] leading-[1.3] relative z-10">
                  {s.title}
                </h3>
                <p className="text-white/70 font-body font-normal text-[13px] md:text-[14px] leading-[1.5] mt-2 md:mt-2.5 max-w-[240px] relative z-10">
                  {s.desc}
                </p>
                <img className={imgClasses} src={s.image} alt="" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
