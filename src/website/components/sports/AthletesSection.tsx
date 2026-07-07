import { CALENDLY } from '../../../utils/constants/constants';
import { SportsButton } from '../../../common/button/SportsButton';

export function AthletesSection() {
  return (
    <section className="py-[110px] text-center bg-[#010502]">
      <div className="container px-5 md:px-10 mx-auto max-w-[1200px]">
        <h2 className="font-body font-medium text-[35px] md:text-[54px] leading-[1.15] tracking-[-1.9px] text-white words">
          <span className="w-src">Sport <span className="font-serif italic text-[#1ff9b8]">athletes</span></span>
        </h2>
        <div className="mt-[30px] flex justify-center reveal">
          <SportsButton variant="small" href={CALENDLY}>
            Let’s grow together
          </SportsButton>
        </div>
        <img className="hidden md:block max-w-[1000px] w-full mx-auto mt-[56px] select-none pointer-events-none reveal" src="/assets/images/sports/athletes-collage-desktop.webp" alt="Sport athletes we work with: Akash Chopra, Navjot S Sidhu, Irfan Pathan, R Ashwin and more" />
        <img className="block md:hidden max-w-[1000px] w-full mx-auto mt-[56px] select-none pointer-events-none reveal" src="/assets/images/sports/athletes-collage-mobile.webp" alt="Sport athletes we work with" />
      </div>
    </section>
  );
}

export default AthletesSection;
