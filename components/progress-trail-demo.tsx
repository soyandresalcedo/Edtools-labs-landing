"use client"

const TOPICS = [
  { id: 1, name: "MRU" },
  { id: 2, name: "MRUA" },
  { id: 3, name: "Free fall" },
  { id: 4, name: "Velocity vs speed" },
]

export default function ProgressTrailDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="pg-root relative w-full max-w-[300px] flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          {TOPICS.map((topic, i) => (
            <div key={topic.id} className={`pg-row pg-row-${i + 1} flex items-center gap-2.5`}>
              <span
                className={`pg-mark pg-mark-${i + 1} relative w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0`}
              >
                {i < 3 && (
                  <svg
                    className="pg-check absolute inset-0 m-auto"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 5.6 L4.8 7.4 L8 3.6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      pathLength={100}
                    />
                  </svg>
                )}
              </span>
              <span className="text-[12px] font-sans text-[#37322F]">{topic.name}</span>
              {i === 3 && (
                <span className="pg-pill ml-auto px-2 py-[2px] rounded-full text-[9px] font-mono uppercase tracking-wider bg-[rgba(255,128,0,0.10)] text-[#B25600] border border-[rgba(255,128,0,0.30)]">
                  Next
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1 text-[9px] font-mono text-[rgba(55,50,47,0.65)] bg-[rgba(55,50,47,0.04)] rounded-md px-2 py-1.5 overflow-hidden">
          <span className="pg-ribbon overflow-hidden whitespace-nowrap inline-block">
            {`{ done: ["MRU","MRUA","Free fall"], next: "Velocity" }`}
          </span>
          <span className="pg-cursor inline-block w-[6px] h-[11px] bg-[rgba(55,50,47,0.55)] rounded-[1px] shrink-0" />
        </div>

        <style jsx>{`
          .pg-row {
            opacity: 0.4;
          }
          .pg-row-1 { animation: pgRow1 7s ease-in-out infinite; }
          .pg-row-2 { animation: pgRow2 7s ease-in-out infinite; }
          .pg-row-3 { animation: pgRow3 7s ease-in-out infinite; }
          .pg-row-4 { animation: pgRow4 7s ease-in-out infinite; }

          .pg-mark {
            border-color: rgba(55, 50, 47, 0.2);
            background: white;
            color: white;
          }
          .pg-mark-1 { animation: pgMark1 7s ease-in-out infinite; }
          .pg-mark-2 { animation: pgMark2 7s ease-in-out infinite; }
          .pg-mark-3 { animation: pgMark3 7s ease-in-out infinite; }
          .pg-mark-4 { animation: pgMark4 7s ease-in-out infinite; }

          .pg-check {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          .pg-row-1 .pg-check { animation: pgCheck1 7s ease-in-out infinite; }
          .pg-row-2 .pg-check { animation: pgCheck2 7s ease-in-out infinite; }
          .pg-row-3 .pg-check { animation: pgCheck3 7s ease-in-out infinite; }

          .pg-pill {
            opacity: 0;
            animation: pgPill 7s ease-in-out infinite;
          }

          .pg-ribbon {
            width: 0;
            animation: pgRibbon 7s ease-in-out infinite;
          }
          .pg-cursor {
            animation: pgBlink 1s linear infinite;
          }

          @keyframes pgRow1 {
            0% { opacity: 0.4; }
            8% { opacity: 1; }
            92% { opacity: 1; }
            100% { opacity: 0.4; }
          }
          @keyframes pgRow2 {
            0%, 18% { opacity: 0.4; }
            26% { opacity: 1; }
            92% { opacity: 1; }
            100% { opacity: 0.4; }
          }
          @keyframes pgRow3 {
            0%, 36% { opacity: 0.4; }
            44% { opacity: 1; }
            92% { opacity: 1; }
            100% { opacity: 0.4; }
          }
          @keyframes pgRow4 {
            0%, 54% { opacity: 0.4; }
            62% { opacity: 1; }
            92% { opacity: 1; }
            100% { opacity: 0.4; }
          }

          @keyframes pgMark1 {
            0%, 5% { background: white; border-color: rgba(55,50,47,0.20); }
            14% { background: #37322F; border-color: #37322F; }
            92% { background: #37322F; border-color: #37322F; }
            98%, 100% { background: white; border-color: rgba(55,50,47,0.20); }
          }
          @keyframes pgMark2 {
            0%, 22% { background: white; border-color: rgba(55,50,47,0.20); }
            32% { background: #37322F; border-color: #37322F; }
            92% { background: #37322F; border-color: #37322F; }
            98%, 100% { background: white; border-color: rgba(55,50,47,0.20); }
          }
          @keyframes pgMark3 {
            0%, 40% { background: white; border-color: rgba(55,50,47,0.20); }
            50% { background: #37322F; border-color: #37322F; }
            92% { background: #37322F; border-color: #37322F; }
            98%, 100% { background: white; border-color: rgba(55,50,47,0.20); }
          }
          @keyframes pgMark4 {
            0%, 60% { background: white; border-color: rgba(55,50,47,0.20); box-shadow: none; }
            64% { background: white; border-color: #FF8000; box-shadow: 0 0 0 0 rgba(255,128,0,0.40); }
            72% { box-shadow: 0 0 0 5px rgba(255,128,0,0); }
            85% { background: white; border-color: #FF8000; box-shadow: 0 0 0 0 rgba(255,128,0,0.40); }
            92% { box-shadow: 0 0 0 5px rgba(255,128,0,0); }
            98%, 100% { background: white; border-color: rgba(55,50,47,0.20); box-shadow: none; }
          }
          @keyframes pgCheck1 {
            0%, 8% { stroke-dashoffset: 100; }
            18% { stroke-dashoffset: 0; }
            92% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 100; }
          }
          @keyframes pgCheck2 {
            0%, 26% { stroke-dashoffset: 100; }
            36% { stroke-dashoffset: 0; }
            92% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 100; }
          }
          @keyframes pgCheck3 {
            0%, 44% { stroke-dashoffset: 100; }
            54% { stroke-dashoffset: 0; }
            92% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 100; }
          }
          @keyframes pgPill {
            0%, 60% { opacity: 0; transform: translateX(4px); }
            68% { opacity: 1; transform: translateX(0); }
            92% { opacity: 1; }
            98%, 100% { opacity: 0; }
          }
          @keyframes pgRibbon {
            0%, 5% { width: 0; }
            70% { width: 100%; }
            92% { width: 100%; }
            100% { width: 0; }
          }
          @keyframes pgBlink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          @media (prefers-reduced-motion: reduce) {
            .pg-row-1, .pg-row-2, .pg-row-3, .pg-row-4,
            .pg-mark-1, .pg-mark-2, .pg-mark-3, .pg-mark-4,
            .pg-row-1 .pg-check, .pg-row-2 .pg-check, .pg-row-3 .pg-check,
            .pg-pill, .pg-ribbon, .pg-cursor {
              animation: none;
            }
            .pg-row { opacity: 1; }
            .pg-mark-1, .pg-mark-2, .pg-mark-3 {
              background: #37322F;
              border-color: #37322F;
            }
            .pg-mark-4 { border-color: #FF8000; }
            .pg-row-1 .pg-check,
            .pg-row-2 .pg-check,
            .pg-row-3 .pg-check {
              stroke-dashoffset: 0;
            }
            .pg-pill { opacity: 1; transform: none; }
            .pg-ribbon { width: 100%; }
            .pg-cursor { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  )
}
