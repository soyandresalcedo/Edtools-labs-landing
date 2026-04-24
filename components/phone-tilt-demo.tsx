"use client"

export default function PhoneTiltDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="pt-root relative w-full h-full flex items-center justify-center">
        <div className="pt-phone relative w-[112px] h-[184px] rounded-[24px] bg-[#37322F] border border-[#2A2520] shadow-[0px_10px_28px_rgba(55,50,47,0.22)] flex items-center justify-center">
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[40px] h-[5px] bg-black rounded-full" aria-hidden="true" />

          <div className="relative w-[96px] h-[166px] rounded-[18px] bg-[#FBFAF9] overflow-hidden flex flex-col items-center pt-5 pb-3 px-2 gap-2">
            <span className="text-[7px] font-mono text-[rgba(55,50,47,0.4)] tracking-[0.18em]">
              EDTOOLS
            </span>

            <div className="relative w-[68px] h-[40px]" aria-hidden="true">
              <svg viewBox="0 0 68 40" className="w-full h-full">
                <path
                  d="M6 34 A28 28 0 0 1 62 34"
                  stroke="rgba(55,50,47,0.15)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M6 34 A28 28 0 0 1 62 34"
                  stroke="#FF8000"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  pathLength={100}
                  strokeDasharray="100"
                  strokeDashoffset={50}
                />
                <line
                  className="pt-needle"
                  x1="34"
                  y1="34"
                  x2="34"
                  y2="10"
                  stroke="#37322F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <circle cx="34" cy="34" r="2.2" fill="#37322F" />
              </svg>
            </div>

            <div className="relative h-3 w-[60px] text-[10px] font-mono text-[#37322F] font-semibold">
              <span className="pt-angle pt-angle-0 absolute inset-0 flex items-center justify-center">0°</span>
              <span className="pt-angle pt-angle-m12 absolute inset-0 flex items-center justify-center">−12°</span>
              <span className="pt-angle pt-angle-p12 absolute inset-0 flex items-center justify-center">+12°</span>
            </div>

            <div className="relative w-full h-2 mt-1 rounded-full bg-[rgba(55,50,47,0.06)]">
              <span className="pt-ball absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#FF8000] shadow-[0_0_0_2px_rgba(255,128,0,0.18)]" />
            </div>

            <div className="mt-auto text-[7px] font-mono text-[rgba(55,50,47,0.35)] tracking-[0.16em]">
              LIVE SENSOR
            </div>
          </div>
        </div>

        <style jsx>{`
          .pt-phone {
            transform-origin: 50% 78%;
            animation: ptTilt 6s ease-in-out infinite;
          }
          .pt-needle {
            transform-origin: 34px 34px;
            animation: ptNeedle 6s ease-in-out infinite;
          }
          .pt-ball {
            transform: translate(-50%, -50%);
            animation: ptBall 6s ease-in-out infinite;
          }

          .pt-angle { opacity: 0; }
          .pt-angle-0 { animation: ptA0 6s steps(1, end) infinite; }
          .pt-angle-m12 { animation: ptAm12 6s steps(1, end) infinite; }
          .pt-angle-p12 { animation: ptAp12 6s steps(1, end) infinite; }

          @keyframes ptTilt {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-12deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(12deg); }
          }
          @keyframes ptNeedle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-32deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(32deg); }
          }
          @keyframes ptBall {
            0%, 100% { transform: translate(-50%, -50%); }
            25% { transform: translate(calc(-50% - 24px), -50%); }
            50% { transform: translate(-50%, -50%); }
            75% { transform: translate(calc(-50% + 24px), -50%); }
          }
          @keyframes ptA0 {
            0%, 19% { opacity: 1; }
            20%, 32% { opacity: 0; }
            33%, 67% { opacity: 1; }
            68%, 82% { opacity: 0; }
            83%, 100% { opacity: 1; }
          }
          @keyframes ptAm12 {
            0%, 19% { opacity: 0; }
            20%, 32% { opacity: 1; }
            33%, 100% { opacity: 0; }
          }
          @keyframes ptAp12 {
            0%, 67% { opacity: 0; }
            68%, 82% { opacity: 1; }
            83%, 100% { opacity: 0; }
          }

          @media (prefers-reduced-motion: reduce) {
            .pt-phone, .pt-needle, .pt-ball,
            .pt-angle-0, .pt-angle-m12, .pt-angle-p12 {
              animation: none;
            }
            .pt-phone, .pt-needle { transform: rotate(0deg); }
            .pt-ball { transform: translate(-50%, -50%); }
            .pt-angle-0 { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  )
}
