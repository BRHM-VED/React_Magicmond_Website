const franchiseLogos = [
  { name: 'UP Warriorz', src: '/assets/images/sports/up-warriorz.webp' },
  { name: 'Sharjah Warriorz', src: '/assets/images/sports/sharjah-warriorz.webp' },
  { name: 'Gujarat Giants', src: '/assets/images/sports/gujarat-giants.webp' },
  { name: 'Gulf Giants', src: '/assets/images/sports/gulf-giants.webp' },
];

const athletesList = [
  { name: 'Akash Chopra', image: '/assets/images/sports/akash-chopra.webp' },
  { name: 'Navjot S Sidhu', image: '/assets/images/sports/navjot-sidhu.webp' },
  { name: 'Irfan Pathan', image: '/assets/images/sports/irfan-pathan.webp' },
  { name: 'R Ashwin', image: '/assets/images/sports/r-ashwin.webp' },
  { name: 'Dhruv Jurel', image: '/assets/images/sports/dhruv-jurel.webp' },
  { name: 'Vimal Kumar', image: '/assets/images/sports/vimal-kumar.webp' },
  { name: 'Shardul Thakur', image: '/assets/images/sports/shardul-thakur.webp' },
  { name: 'Harmanpreet Kaur', image: '/assets/images/sports/harmanpreet-kaur.webp' },
];

function AthleteCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="bg-[#0e131e] border-[1.45px] border-[#00ac79]/30 h-[310px] w-[240px] rounded-[16px] relative overflow-hidden transition-all duration-300 hover:border-[#00ac79]/60 hover:shadow-[0_0_24px_rgba(0,172,121,0.25)] group shrink-0">
      {/* Photo Container */}
      <div className="w-[218px] h-[218px] bg-[#044136] rounded-[12px] absolute top-[8.5px] left-[11px] overflow-hidden flex items-end justify-center">
        {/* Glow */}
        <div className="absolute w-[250px] h-[250px] bg-[#00ac79] opacity-35 blur-[45px] rounded-full -bottom-[70px] -right-[70px] pointer-events-none" />

        {/* Photo */}
        <img
          src={image}
          alt={name}
          className="h-[105%] w-auto max-w-none object-contain object-bottom relative z-10 transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
        />
      </div>

      {/* Name */}
      <p className="font-manrope font-semibold text-[17px] md:text-[22px] leading-[1.4] text-center text-white absolute top-[240px] md:top-[248px] w-full left-0 px-3 tracking-tight">
        {name}
      </p>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="bg-[#0d0817] pt-16 pb-20 md:py-24 overflow-hidden w-full relative border-t border-white/5">
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,172,121,0.04),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-5 md:px-10 relative z-10 flex flex-col gap-20 md:gap-28">

        {/* 1. Franchise Partners */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-head font-semibold text-[28px] sm:text-[36px] md:text-[48px] text-white leading-tight mb-8 md:mb-12 reveal">
            Franchise <span className="font-serif italic text-[#00ac79]">partners</span>
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 justify-items-center items-center md:flex md:flex-wrap md:justify-center md:gap-16 lg:gap-20 reveal">
            {franchiseLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-[60px] sm:h-[80px] md:h-[110px] w-auto object-contain brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Channel Partners */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-head font-semibold text-[28px] sm:text-[36px] md:text-[48px] text-white leading-tight mb-8 md:mb-12 reveal">
            Channel <span className="font-serif italic text-[#00ac79]">partners</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-7 md:flex-nowrap md:gap-12 lg:gap-14 reveal w-full max-w-[340px] sm:max-w-[480px] md:max-w-none mx-auto px-4">
            {/* JioHoststar */}
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/sports/jioHoststar.webp"
                alt="JioHoststar"
                className="h-[26px] sm:h-[30px] md:h-[58px] w-auto object-contain brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-300 shrink-0"
              />
            </div>

            {/* Cricket Guru */}
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/sports/cricketGuru.webp"
                alt="Cricket Guru"
                className="h-[26px] sm:h-[30px] md:h-[43px] w-auto object-contain brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-300 shrink-0"
              />
            </div>

            {/* Sony Liv */}
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/sports/sonyLiv.webp"
                alt="Sony Liv"
                className="h-[14px] sm:h-[16px] md:h-[28px] w-auto object-contain brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-300 shrink-0"
              />
            </div>

            {/* FanCode */}
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/sports/fancode.webp"
                alt="FanCode"
                className="h-[24px] sm:h-[28px] md:h-[56px] w-auto object-contain brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-300 shrink-0"
              />
            </div>

            {/* Star Sports */}
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/sports/starSports.webp"
                alt="Star Sports"
                className="h-[22px] sm:h-[24px] md:h-[46px] w-auto object-contain brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-300 shrink-0"
              />
            </div>
          </div>
        </div>

        {/* 3. Athletes Grid */}
        <div className="flex flex-col items-stretch md:items-center text-center">
          <h2 className="font-head font-semibold text-[28px] sm:text-[36px] md:text-[48px] text-white leading-tight mb-10 md:mb-16 reveal">
            Athletes
          </h2>

          {/* Scrollable Container on Mobile, Grid on Desktop */}
          <div className="w-full flex items-stretch overflow-x-auto gap-4 scrollbar-none pb-12 -mx-5 pl-5 pr-0 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-3 md:overflow-x-visible md:pb-0 snap-x snap-mandatory justify-items-center max-w-[996px] mx-auto">
            {athletesList.map((athlete) => (
              <div key={athlete.name} className="shrink-0 snap-start flex justify-center">
                <AthleteCard name={athlete.name} image={athlete.image} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default PartnersSection;
