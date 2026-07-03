import { founderPills } from '../../data/homeData';

export function FoundersSection() {
  return (
    <section className="founders">
      <h2 className="founders__title reveal">
        <img className="founders__sparkle" src="/assets/icons/sparkle.svg" alt="" />
        Founders we want<br />to work with
      </h2>
      {founderPills.map((pill, i) => (
        <div key={pill} className={`founder-pill founder-pill--${i + 1} reveal-scale`} style={{ '--d': `${0.1 * (i + 1)}s` } as React.CSSProperties}>
          {pill}
        </div>
      ))}
    </section>
  );
}
export default FoundersSection;
