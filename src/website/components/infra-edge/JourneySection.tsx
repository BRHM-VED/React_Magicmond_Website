import { ieQuarters } from '../../../data/infra-edge.data';

const qLabelColors = ['text-[#6b7cff]', 'text-[#b48cf2]', 'text-[#7fb0f7]', 'text-[#e8a04c]'];

export function JourneySection() {
  return (
    <section className="py-24 md:py-[100px] text-center bg-[#0e081d]">
      <div className="w-full max-w-[1425px] mx-auto px-5 md:px-10">

        {/* Heading */}
        <h2 className="font-head font-normal text-[32px] sm:text-[42px] md:text-[54px] text-white tracking-[-1.5px] leading-[1.15]">
          Reidius{' '}
          <span className="font-serif italic text-[#7db9ff]">2024-25 Growth Journey</span>
        </h2>

        {/* Sub */}
        <p className="mt-5 mx-auto max-w-[500px] text-[16px] leading-[26px] text-white/60">
          Each milestone reflects our commitment to scaling bigger, moving faster, and building a future without limits.
        </p>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 mt-6 text-[12px] text-white">
          <span className="flex items-center gap-1.5">
            <i className="inline-block w-[9px] h-[9px] bg-white rounded-sm" />Online
          </span>
          <span className="flex items-center gap-1.5">
            <i className="inline-block w-[9px] h-[9px] bg-[#3b5bff] rounded-sm" />Offline
          </span>
        </div>

        {/* Quarters grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto mt-16 text-left">
          {ieQuarters.map((q, i) => (
            <div key={q.label}>
              {/* Donut chart */}
              <div
                className="w-[92px] h-[92px] rounded-full p-[7px] flex items-center justify-center"
                style={{ background: q.donut }}
              >
                <span className="flex items-center justify-center w-full h-full rounded-full bg-[#150f2d] font-head font-semibold text-[17px] text-white">
                  Sales
                </span>
              </div>

              {/* Quarter label */}
              <div className={`mt-6 font-head font-semibold text-[24px] ${qLabelColors[i] ?? 'text-white'}`}>
                {q.label}
              </div>

              {/* Separator */}
              <div className="my-2 h-[2px] bg-white/25" />

              {/* Title */}
              <p className="font-head font-semibold text-[16px] leading-[1.35] text-white">{q.title}</p>

              {/* Content */}
              {q.bullets ? (
                <ul className="mt-2.5 pl-4 list-disc grid gap-0.5 text-[12.5px] leading-[1.55] text-white/75">
                  {q.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              ) : (
                <p className="mt-2.5 text-[12.5px] leading-[1.55] text-white/75">{q.desc}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default JourneySection;
