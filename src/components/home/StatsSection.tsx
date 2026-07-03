import { stats } from '../../data/homeData';

export function StatsSection() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={s.label} className="stat reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
              {s.avatars ? (
                <div className="stat__icon stat__avatars">
                  {s.avatars.map((a) => <img key={a} src={a} alt="" />)}
                </div>
              ) : (
                <div className="stat__icon"><img src={s.icon} alt="" /></div>
              )}
              <div className="stat__num">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default StatsSection;
