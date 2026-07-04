import * as Icons from 'lucide-react';
import { stats } from '../../../data/home.data';

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
                <div className="stat__icon">
                  {(() => {
                    const LucideIcon = s.icon ? (Icons as any)[s.icon] : null;
                    return LucideIcon ? (
                      <div
                        style={{
                          background: 'linear-gradient(180deg, #C156E6 0%, #6B3080 100%)',
                          borderRadius: '50%',
                          border: '1px solid rgba(255, 255, 255, 0.07)',
                          boxShadow: 'inset 0 4px 4px rgba(255, 255, 255, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '44px',
                          height: '44px',
                        }}
                      >
                        <LucideIcon
                          size={22}
                          strokeWidth={1.8}
                          color="white"
                          style={{
                            filter: 'drop-shadow(0px 3px 1.5px rgba(0, 0, 0, 0.25))',
                          }}
                        />
                      </div>
                    ) : null;
                  })()}
                </div>
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
