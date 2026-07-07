import { spChannelLogos } from '../../../data/sports/sports.data';

export function ChannelSection() {
  return (
    <section className="py-[130px] pb-[60px] md:py-[210px] md:pb-[90px] text-center">
      <div className="container px-5 md:px-10 mx-auto max-w-[1200px]">
        <h2 className="font-body font-medium text-[35px] md:text-[54px] leading-[1.15] tracking-[-1.9px] text-white words">
          <span className="w-src">Channel <span className="font-serif italic text-[#1ff9b8]">partners</span></span>
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-[30px] md:gap-[56px] mt-[54px] reveal">
          {spChannelLogos.map((l) => (
            <img className="h-[26px] md:h-[40px] w-auto" key={l.alt} src={l.image} alt={l.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChannelSection;
