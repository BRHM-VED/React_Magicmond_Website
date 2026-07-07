import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../../../data/types';

interface Props {
  study: CaseStudy;
}

export function HeaderSection({ study }: Props) {
  const b = study.brand;

  return (
    <section className="relative max-w-[1220px] mx-auto px-5 md:px-10 py-[60px] pb-5 md:py-[90px] md:pb-10 overflow-hidden after:content-[''] after:absolute after:top-[-120px] after:right-[-80px] after:w-[640px] after:h-[420px] after:bg-[radial-gradient(closest-side,rgba(160,80,220,0.18),transparent)] after:pointer-events-none">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div className={`flex items-center gap-3${b.tile ? ' bg-[#5c1f33] rounded-[10px] px-[18px] py-2.5' : ''} reveal`}>
          {b.image && (
            <img
              className={b.tile ? 'h-[30px] w-auto' : 'h-11 w-auto'}
              src={b.image}
              alt={b.name ?? 'Brand'}
              style={b.round ? { borderRadius: '50%' } : undefined}
            />
          )}
          {b.name && (
            <span>
              <span className={`font-bold text-[24px] text-[#0e081d] ${b.nameClass ?? ''}`}>{b.name}</span>
              {b.sub && <><br /><span className="text-[14px] text-[#0e081d]/60">{b.sub}</span></>}
            </span>
          )}
        </div>
        <a className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-[30px] sm:py-4 rounded-full border-[1.5px] border-[#6e0a91]/35 font-semibold text-[16px] sm:text-[20px] text-[#0e081d] hover:bg-[#6e0a91]/[0.06] hover:border-[#6e0a91]/60 transition-all duration-250 reveal" href={study.visitUrl} target="_blank" rel="noopener noreferrer">
          <ArrowUpRight size={20} strokeWidth={1.8} className="text-[#5d007e] inline-block mr-0.5" />
          Visit
        </a>
      </div>
      <h1 className="relative mt-14 max-w-[980px] font-semibold text-[30px] md:text-[44px] leading-[1.25] tracking-[-0.5px] text-[#0e081d] reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
        {study.heading.split('\n').map((line, i, arr) => (
          <span key={line}>{line}{i < arr.length - 1 && <br />}</span>
        ))}
      </h1>
      {study.subheading && (
        <p className="mt-[18px] max-w-[800px] text-[17px] md:text-[20px] leading-6 md:leading-[1.5] text-[#0e081d]/70 reveal" style={{ '--d': '.2s' } as React.CSSProperties}>{study.subheading}</p>
      )}
    </section>
  );
}

export default HeaderSection;
