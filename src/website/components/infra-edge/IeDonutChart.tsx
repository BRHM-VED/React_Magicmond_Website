// Reusable Donut Chart component

interface IeDonutChartProps {
  progress: number; // 0 to 1 (e.g. 0.08 for Q2)
  label?: string;   // text in the center, defaults to "Sales"
}

export function IeDonutChart({ progress, label = 'Sales' }: IeDonutChartProps) {
  const size = 92;
  const strokeWidth = 7;
  const cx = size / 2;
  const cy = size / 2;
  const r = (size - strokeWidth) / 2; // (92 - 7) / 2 = 42.5
  const circumference = 2 * Math.PI * r; // ~267.03
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative w-[92px] h-[92px] flex items-center justify-center shrink-0 select-none">
      {/* SVG Donut */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 -rotate-90">
        {/* Blue Base Circle (always full border) */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="transparent"
          stroke="#3b5bff"
          strokeWidth={strokeWidth}
        />
        {/* White Progress Overlay (drawn clockwise starting from top) */}
        {progress > 0 && (
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="transparent"
            stroke="#ffffff"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
          />
        )}
      </svg>

      {/* Center content */}
      <div className="relative z-10 w-[78px] h-[78px] rounded-full bg-[#150f2d] flex items-center justify-center shadow-inner">
        <span className="font-head font-semibold text-[15px] sm:text-[17px] text-white tracking-tight">
          {label}
        </span>
      </div>
    </div>
  );
}

export default IeDonutChart;
