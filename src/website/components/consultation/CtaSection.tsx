import { COMPANY_EMAIL } from '../../../utils/constants/constants';

export function CtaSection() {
  return (
    <section className="bg-[#07030f] py-[60px] pb-[120px] text-center">
      <div className="container px-5 md:px-10 mx-auto max-w-[1200px]">
        <h2 className="font-bold text-[36px] md:text-[60px] leading-[1.15] tracking-[-0.01em] text-white words">
          <span className="w-src block">Have Any idea in Mind?</span>
          <span className="w-src block text-[#d86cff]">Let's Get Started</span>
        </h2>
        <p className="max-w-[560px] mx-auto mt-6 text-[18px] leading-[1.5] text-white opacity-85 reveal">Take the first step, and contact us to discuss your marketing and business goals. Send us a message, and we will get back to you soon.</p>
        <a className="inline-flex items-center justify-center mt-7 px-8 py-3.5 rounded-full bg-[#5d007e] font-inter font-medium text-[16px] text-white hover:bg-[#71009b] hover:-translate-y-0.5 transition-all duration-300 reveal" style={{ '--d': '.15s' } as React.CSSProperties} href={`mailto:${COMPANY_EMAIL}`}>Send a mail  ✉️</a>
      </div>
    </section>
  );
}

export default CtaSection;
