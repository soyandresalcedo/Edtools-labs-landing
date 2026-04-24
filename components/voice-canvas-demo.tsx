"use client"

export default function VoiceCanvasDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="vc-root relative w-full max-w-[360px] h-full max-h-[280px] flex flex-col gap-3">
        <div className="self-start relative inline-flex max-w-[80%] px-3 py-2 rounded-2xl rounded-tl-sm bg-white border border-[rgba(55,50,47,0.08)] shadow-[0px_1px_2px_rgba(55,50,47,0.06)]">
          <span className="invisible text-[12px] font-medium font-sans">Velocidad inicial v₀</span>
          <span className="vc-sub vc-sub-1 absolute inset-0 flex items-center px-3 text-[12px] text-[#37322F] font-medium font-sans">
            Velocidad inicial v₀
          </span>
          <span className="vc-sub vc-sub-2 absolute inset-0 flex items-center px-3 text-[12px] text-[#37322F] font-medium font-sans">
            …y aceleración a
          </span>
        </div>

        <div className="relative flex-1 rounded-lg bg-[rgba(255,255,255,0.6)] border border-[rgba(55,50,47,0.08)] overflow-hidden">
          <div className="absolute left-3 top-3 flex items-end gap-[3px] h-5">
            {[0, 0.12, 0.24, 0.06].map((d, i) => (
              <span
                key={i}
                className="vc-bar block w-[3px] h-full rounded-sm bg-[#37322F]"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 120"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <text x="40" y="98" className="vc-label vc-label-1" fontSize="9" fontFamily="ui-sans-serif, system-ui" fill="#605A57">
              v₀
            </text>
            <path
              className="vc-arrow vc-arrow-1"
              d="M40 80 L130 80 M122 74 L130 80 L122 86"
              stroke="#37322F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
            />
            <text x="40" y="42" className="vc-label vc-label-2" fontSize="9" fontFamily="ui-sans-serif, system-ui" fill="#605A57">
              a
            </text>
            <path
              className="vc-arrow vc-arrow-2"
              d="M40 50 L110 50 M102 44 L110 50 L102 56"
              stroke="#FF8000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
            />
          </svg>
        </div>

        <style jsx>{`
          .vc-sub {
            opacity: 0;
            transform: translateY(4px);
          }
          .vc-sub-1 {
            animation: vcSub1 5s ease-in-out infinite;
          }
          .vc-sub-2 {
            animation: vcSub2 5s ease-in-out infinite;
          }
          .vc-arrow {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            opacity: 0;
          }
          .vc-arrow-1 {
            animation: vcDraw1 5s ease-in-out infinite;
          }
          .vc-arrow-2 {
            animation: vcDraw2 5s ease-in-out infinite;
          }
          .vc-label {
            opacity: 0;
          }
          .vc-label-1 {
            animation: vcLabel1 5s ease-in-out infinite;
          }
          .vc-label-2 {
            animation: vcLabel2 5s ease-in-out infinite;
          }
          .vc-bar {
            transform-origin: bottom;
            animation: vcBar 0.7s ease-in-out infinite;
          }

          @keyframes vcSub1 {
            0%, 8% { opacity: 0; transform: translateY(4px); }
            14% { opacity: 1; transform: translateY(0); }
            40% { opacity: 1; }
            46%, 100% { opacity: 0; }
          }
          @keyframes vcSub2 {
            0%, 46% { opacity: 0; transform: translateY(4px); }
            52% { opacity: 1; transform: translateY(0); }
            88% { opacity: 1; }
            94%, 100% { opacity: 0; }
          }
          @keyframes vcDraw1 {
            0%, 6% { stroke-dashoffset: 100; opacity: 0; }
            8% { opacity: 1; }
            28% { stroke-dashoffset: 0; opacity: 1; }
            90% { stroke-dashoffset: 0; opacity: 1; }
            96%, 100% { stroke-dashoffset: 100; opacity: 0; }
          }
          @keyframes vcDraw2 {
            0%, 46% { stroke-dashoffset: 100; opacity: 0; }
            48% { opacity: 1; }
            68% { stroke-dashoffset: 0; opacity: 1; }
            90% { stroke-dashoffset: 0; opacity: 1; }
            96%, 100% { stroke-dashoffset: 100; opacity: 0; }
          }
          @keyframes vcLabel1 {
            0%, 22% { opacity: 0; }
            30% { opacity: 1; }
            90% { opacity: 1; }
            96%, 100% { opacity: 0; }
          }
          @keyframes vcLabel2 {
            0%, 60% { opacity: 0; }
            68% { opacity: 1; }
            90% { opacity: 1; }
            96%, 100% { opacity: 0; }
          }
          @keyframes vcBar {
            0%, 100% { transform: scaleY(0.25); }
            50% { transform: scaleY(1); }
          }

          @media (prefers-reduced-motion: reduce) {
            .vc-sub-1, .vc-sub-2, .vc-arrow-1, .vc-arrow-2, .vc-label-1, .vc-label-2, .vc-bar {
              animation: none;
            }
            .vc-sub-1 { opacity: 1; transform: none; }
            .vc-sub-2 { opacity: 0; }
            .vc-arrow { stroke-dashoffset: 0; opacity: 1; }
            .vc-label { opacity: 1; }
            .vc-bar { transform: scaleY(0.6); }
          }
        `}</style>
      </div>
    </div>
  )
}
