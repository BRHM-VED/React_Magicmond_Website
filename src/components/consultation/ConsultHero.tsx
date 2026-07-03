import { useRotator } from '../../hooks/useRotator';
import { rotatorWords } from '../../data/consultationData';
import { CALENDLY } from '../../utils/constants';

export function ConsultHero() {
  const word = useRotator(rotatorWords, 2200);

  return (
    <section className="c-hero">
      <div className="c-hero__content">
        <h1>
          <span className="c-hero__top reveal">BUILD YOUR</span>
          <span className="c-hero__word"><span key={word}>{word}</span></span>
          <span className="c-hero__bottom reveal">BRAND FROM SCRATCH</span>
        </h1>
        <p className="c-hero__sub reveal" style={{ '--d': '.15s' } as React.CSSProperties}>Need help building an identity for your brand or a website that converts? At MagicMond, we do it all.</p>
        <a className="c-btn reveal" style={{ '--d': '.3s' } as React.CSSProperties} href={CALENDLY}>Knock! Knock!</a>
      </div>
    </section>
  );
}
export default ConsultHero;
