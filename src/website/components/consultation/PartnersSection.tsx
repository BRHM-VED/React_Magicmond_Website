
export function PartnersSection() {
  return (
    <section className="bg-[#07030f] py-[90px] text-center">
      <p className="font-bold text-[18px] tracking-[0.1em] uppercase text-[#d86cff] reveal">Our Partners</p>
      <div className="mt-11 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex items-center gap-[70px] w-max"
          style={{ animation: 'marquee-left 35s linear infinite' }}
        >
          <img className="h-[34px] w-auto" src="/assets/images/consultation/consult-partners-1.webp" alt="Our partner brands" />
          <img className="h-[34px] w-auto" src="/assets/images/consultation/consult-partners-2.webp" alt="" />
          <img className="h-[34px] w-auto" src="/assets/images/consultation/consult-partners-1.webp" alt="" />
          <img className="h-[34px] w-auto" src="/assets/images/consultation/consult-partners-2.webp" alt="" />
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
