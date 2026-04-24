"use client"

export default function PredictMeasureReflectDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="pmr-root relative w-full max-w-[440px]">
        <div className="absolute top-[15px] left-[12%] right-[12%] h-[2px] bg-[rgba(55,50,47,0.12)] rounded" aria-hidden="true" />
        <div className="pmr-fill absolute top-[15px] left-[12%] h-[2px] bg-[#37322F] rounded origin-left" aria-hidden="true" />

        <div className="relative grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center gap-3">
            <div className="pmr-chip pmr-chip-1 relative z-10 px-3 py-1 rounded-full text-[11px] font-medium font-sans border bg-white whitespace-nowrap">
              Predict
            </div>
            <span className="pmr-detail pmr-detail-1 text-[10px] text-[#605A57] font-mono whitespace-nowrap">
              v = v₀ + a · t
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="pmr-chip pmr-chip-2 relative z-10 px-3 py-1 rounded-full text-[11px] font-medium font-sans border bg-white whitespace-nowrap">
              Measure
            </div>
            <svg width="40" height="22" viewBox="0 0 40 22" aria-hidden="true">
              <path
                d="M4 20 A16 16 0 0 1 36 20"
                stroke="rgba(55,50,47,0.15)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                className="pmr-gauge-fill"
                d="M4 20 A16 16 0 0 1 36 20"
                stroke="#FF8000"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                pathLength={100}
              />
            </svg>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="pmr-chip pmr-chip-3 relative z-10 px-3 py-1 rounded-full text-[11px] font-medium font-sans border bg-white whitespace-nowrap">
              Reflect
            </div>
            <div className="pmr-result flex items-center gap-1 text-[10px] text-[#605A57]">
              <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true">
                <path
                  className="pmr-check"
                  d="M2 5.5 L4.6 8 L9 3"
                  stroke="#37322F"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  pathLength={100}
                />
              </svg>
              <span className="pmr-result-text font-mono whitespace-nowrap">9.8 m/s²</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          .pmr-chip {
            border-color: rgba(55, 50, 47, 0.12);
            color: rgba(55, 50, 47, 0.55);
          }
          .pmr-chip-1 {
            animation: pmrChip1 6s ease-in-out infinite;
          }
          .pmr-chip-2 {
            animation: pmrChip2 6s ease-in-out infinite;
          }
          .pmr-chip-3 {
            animation: pmrChip3 6s ease-in-out infinite;
          }

          .pmr-fill {
            width: 0;
            animation: pmrFill 6s ease-in-out infinite;
          }

          .pmr-detail-1 {
            opacity: 0.45;
            animation: pmrDetail1 6s ease-in-out infinite;
          }

          .pmr-gauge-fill {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: pmrGauge 6s ease-in-out infinite;
          }

          .pmr-result {
            opacity: 0;
            animation: pmrResult 6s ease-in-out infinite;
          }
          .pmr-check {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: pmrCheckDraw 6s ease-in-out infinite;
          }

          @keyframes pmrFill {
            0%, 5% { width: 0; }
            30% { width: 50%; }
            65% { width: 76%; }
            96% { width: 76%; }
            100% { width: 0; }
          }
          @keyframes pmrChip1 {
            0%, 5% { color: rgba(55,50,47,0.55); border-color: rgba(55,50,47,0.12); box-shadow: none; }
            15%, 30% { color: #37322F; border-color: #37322F; box-shadow: 0 0 0 3px rgba(55,50,47,0.06); }
            45%, 100% { color: rgba(55,50,47,0.55); border-color: rgba(55,50,47,0.12); box-shadow: none; }
          }
          @keyframes pmrChip2 {
            0%, 30% { color: rgba(55,50,47,0.55); border-color: rgba(55,50,47,0.12); box-shadow: none; }
            42%, 60% { color: #37322F; border-color: #FF8000; box-shadow: 0 0 0 3px rgba(255,128,0,0.10); }
            72%, 100% { color: rgba(55,50,47,0.55); border-color: rgba(55,50,47,0.12); box-shadow: none; }
          }
          @keyframes pmrChip3 {
            0%, 60% { color: rgba(55,50,47,0.55); border-color: rgba(55,50,47,0.12); box-shadow: none; }
            72%, 92% { color: #37322F; border-color: #37322F; box-shadow: 0 0 0 3px rgba(55,50,47,0.08); }
            98%, 100% { color: rgba(55,50,47,0.55); border-color: rgba(55,50,47,0.12); box-shadow: none; }
          }
          @keyframes pmrDetail1 {
            0%, 8% { opacity: 0.25; }
            18%, 38% { opacity: 1; }
            50%, 100% { opacity: 0.45; }
          }
          @keyframes pmrGauge {
            0%, 32% { stroke-dashoffset: 100; }
            58% { stroke-dashoffset: 0; }
            92% { stroke-dashoffset: 0; }
            98%, 100% { stroke-dashoffset: 100; }
          }
          @keyframes pmrResult {
            0%, 65% { opacity: 0; transform: translateY(2px); }
            74% { opacity: 1; transform: translateY(0); }
            92% { opacity: 1; }
            98%, 100% { opacity: 0; transform: translateY(2px); }
          }
          @keyframes pmrCheckDraw {
            0%, 70% { stroke-dashoffset: 100; }
            82% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 0; }
          }

          @media (prefers-reduced-motion: reduce) {
            .pmr-chip-1, .pmr-chip-2, .pmr-chip-3,
            .pmr-fill, .pmr-detail-1,
            .pmr-gauge-fill, .pmr-result, .pmr-check {
              animation: none;
            }
            .pmr-fill { width: 76%; }
            .pmr-gauge-fill, .pmr-check { stroke-dashoffset: 0; }
            .pmr-result, .pmr-detail-1 { opacity: 1; transform: none; }
          }
        `}</style>
      </div>
    </div>
  )
}
