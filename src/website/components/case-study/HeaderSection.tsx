import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../../../data/types';

interface Props {
  study: CaseStudy;
}

export function HeaderSection({ study }: Props) {
  const b = study.brand;

  return (
    <section className="cs-header">
      <div className="cs-header__row">
        <div className={`cs-header__logo${b.tile ? ' cs-header__logo--tile' : ''} reveal`}>
          {b.image && <img src={b.image} alt={b.name ?? 'Brand'} style={b.round ? { borderRadius: '50%' } : undefined} />}
          {b.name && (
            <span>
              <span className={`cs-brand-name ${b.nameClass ?? ''}`}>{b.name}</span>
              {b.sub && <><br /><span className="cs-brand-sub">{b.sub}</span></>}
            </span>
          )}
        </div>
        <a className="cs-visit reveal" href={study.visitUrl} target="_blank" rel="noopener noreferrer">
          <ArrowUpRight size={20} strokeWidth={1.8} className="text-[#5d007e] inline-block" style={{ marginRight: '2px' }} />
          Visit
        </a>
      </div>
      <h1 className="cs-title reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
        {study.heading.split('\n').map((line, i, arr) => (
          <span key={line}>{line}{i < arr.length - 1 && <br />}</span>
        ))}
      </h1>
      {study.subheading && (
        <p className="cs-subtitle reveal" style={{ '--d': '.2s' } as React.CSSProperties}>{study.subheading}</p>
      )}
    </section>
  );
}
export default HeaderSection;
