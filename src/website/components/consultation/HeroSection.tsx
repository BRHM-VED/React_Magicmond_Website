import { useRotator } from '../../../hooks/useRotator';
import { rotatorWords } from '../../../data/consultation.data';
import { CALENDLY } from '../../../utils/constants/constants';

export function HeroSection() {
  const word = useRotator(rotatorWords, 2200);

  return (
    <section className="relative min-h-[96vh] flex flex-col items-center justify-center text-center overflow-hidden px-5 py-[140px] md:py-[120px] bg-[#07030f] bg-[radial-gradient(700px_420px_at_82%_8%,rgba(90,30,140,0.55),transparent_70%),radial-gradient(560px_400px_at_8%_78%,rgba(70,20,110,0.45),transparent_70%)]">
      <style>{`
        @keyframes c-word-in {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>

      {/* Subtle Star Field */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40 select-none"
        style={{
          backgroundImage: 'radial-gradient(1.5px 1.5px at 12% 30%, rgba(255,255,255,.5), transparent), radial-gradient(1px 1px at 28% 68%, rgba(255,255,255,.35), transparent), radial-gradient(1.5px 1.5px at 44% 18%, rgba(255,255,255,.4), transparent), radial-gradient(1px 1px at 58% 82%, rgba(255,255,255,.3), transparent), radial-gradient(2px 2px at 72% 40%, rgba(220,180,255,.4), transparent), radial-gradient(1px 1px at 86% 64%, rgba(255,255,255,.35), transparent), radial-gradient(1.5px 1.5px at 92% 22%, rgba(255,255,255,.4), transparent), radial-gradient(1px 1px at 6% 84%, rgba(220,180,255,.35), transparent)'
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto">
        <h1>
          <span className="font-bold text-[22px] md:text-[36px] leading-[1.2] tracking-[0.04em] text-[#d9d9d9] block reveal">BUILD YOUR</span>
          <span className="block my-1.5 font-bold text-[44px] md:text-[80px] leading-[0.99] tracking-[0.02em] text-[#f5f5f5] min-h-[48px] md:min-h-[84px]">
            <span key={word} style={{ display: 'inline-block', animation: 'c-word-in .5s cubic-bezier(.2,.6,.3,1)' }}>{word}</span>
          </span>
          <span className="font-bold text-[22px] md:text-[36px] leading-[1.3] tracking-[0.06em] text-[#f0f0f0] block reveal">BRAND FROM SCRATCH</span>
        </h1>
        <p className="max-w-[640px] mx-auto mt-[34px] font-inter text-[17px] md:text-[24px] leading-[1.5] text-white/60 reveal" style={{ '--d': '.15s' } as React.CSSProperties}>Need help building an identity for your brand or a website that converts? At MagicMond, we do it all.</p>
        <a className="inline-flex items-center justify-center mt-10 px-8 py-3.5 md:px-[40px] md:py-[18px] rounded-full bg-[#5d007e] font-inter font-medium text-[18px] md:text-[24px] text-white hover:bg-[#71009b] hover:-translate-y-0.5 transition-all duration-300 reveal" style={{ '--d': '.3s' } as React.CSSProperties} href={CALENDLY}>Knock! Knock!</a>
      </div>
    </section>
  );
}

export default HeroSection;
