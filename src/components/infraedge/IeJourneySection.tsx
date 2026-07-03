import { ieQuarters } from '../../data/infraedgeData';

export function IeJourneySection() {
  return (
    <section className="ie-journey">
      <div className="container">
        <h2 className="ie-journey__title words"><span className="w-src">Reidius Infra's <span className="serif">2024-25 Journey</span></span></h2>
        <p className="ie-journey__sub reveal">Each milestone reflects our commitment to scaling bigger, moving faster.</p>

        <div className="ie-journey__grid">
          <div className="ie-journey__legend">
            <span><i style={{ background: '#fff' }}></i>Online</span>
            <span><i style={{ background: '#3b5bff' }}></i>Offline</span>
          </div>
          {ieQuarters.map((q, i) => (
            <div key={q.label} className={`ie-q ie-q--${i + 1} reveal`} style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
              <div className="ie-donut" style={{ background: q.donut }}><span>Sales</span></div>
              <div className="ie-q__label">{q.label}</div>
              <div className="ie-q__sep"></div>
              <p className="ie-q__title">{q.title}</p>
              {q.bullets ? (
                <div className="ie-q__desc"><ul>{q.bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>
              ) : (
                <p className="ie-q__desc">{q.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default IeJourneySection;
