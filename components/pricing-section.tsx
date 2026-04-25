"use client"

type Plan = {
  name: string
  description: string
  badge: string
  bullets: string[]
  ctaLabel: string
  variant: "light" | "dark"
}

const plans: Plan[] = [
  {
    name: "Demo mode",
    description: "Try it in your browser, right now. No API key, no setup.",
    badge: "No key needed",
    bullets: [
      "Pre-cooked scenes routed by text",
      "EN and ES out of the box",
      "Great for classroom previews",
      "Built-in voice with Web Speech",
      "Drag simulator on desktop",
    ],
    ctaLabel: "Try the demo",
    variant: "light",
  },
  {
    name: "Bring your own key",
    description: "Plug in your Claude API key and unlock the live tutor.",
    badge: "BYO Claude key",
    bullets: [
      "Live tutoring with voice + drawings",
      "All topic recipes unlocked",
      "Inline mini-labs with sensors",
      "Bilingual prompts and TTS",
      "Predict, measure, reflect loop",
      "Session metrics for the agent",
      "Focus mode on large screens",
      "Mobile sheet for the agent panel",
    ],
    ctaLabel: "Read the setup",
    variant: "dark",
  },
  {
    name: "Self-host",
    description: "Clone, fork or remix it for your school or course.",
    badge: "Open source",
    bullets: [
      "GPL-3.0 license",
      "Built on Next.js + Vitest",
      "Vendor TTS assets under public/",
      "HTTPS-friendly for sensors",
      "Demo mode for offline classes",
      "Topic recipe catalog included",
      "Sensor handoff context shared",
      "No vendor lock-in",
    ],
    ctaLabel: "Open on GitHub",
    variant: "light",
  },
]

function CheckIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 3L4.5 8.5L2 6"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const isDark = plan.variant === "dark"

  return (
    <div
      className={`flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 border overflow-hidden flex flex-col justify-start items-start gap-12 ${
        isDark
          ? "bg-[#37322F] border-[rgba(55,50,47,0.12)]"
          : "bg-white border-[#E0DEDB]"
      }`}
    >
      <div className="self-stretch flex flex-col justify-start items-center gap-9">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div
            className={`text-lg font-medium leading-7 font-sans ${
              isDark ? "text-[#FBFAF9]" : "text-[rgba(55,50,47,0.90)]"
            }`}
          >
            {plan.name}
          </div>
          <div
            className={`w-full max-w-[242px] text-sm font-normal leading-5 font-sans ${
              isDark ? "text-[#B2AEA9]" : "text-[rgba(41,37,35,0.70)]"
            }`}
          >
            {plan.description}
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div
            className={`flex items-center text-5xl font-medium leading-[60px] font-serif ${
              isDark ? "text-[#F0EFEE]" : "text-[#37322F]"
            }`}
          >
            Free
          </div>
          <div
            className={`text-sm font-medium font-sans ${
              isDark ? "text-[#D2C6BF]" : "text-[#847971]"
            }`}
          >
            {plan.badge}
          </div>
        </div>

        <div
          className={`self-stretch px-4 py-[10px] relative shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer ${
            isDark ? "bg-[#FBFAF9]" : "bg-[#37322F]"
          }`}
        >
          <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply" />
          <div
            className={`flex justify-center flex-col text-[13px] font-medium leading-5 font-sans ${
              isDark ? "text-[#37322F]" : "text-[#FBFAF9]"
            }`}
          >
            {plan.ctaLabel}
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        {plan.bullets.map((feature, index) => (
          <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
            <div className="w-4 h-4 relative flex items-center justify-center">
              <CheckIcon stroke={isDark ? "#FF8000" : "#9CA3AF"} />
            </div>
            <div
              className={`flex-1 text-[12.5px] font-normal leading-5 font-sans ${
                isDark ? "text-[#F0EFEE]" : "text-[rgba(55,50,47,0.80)]"
              }`}
            >
              {feature}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PricingSection() {
  return (
    <div id="get-started" className="scroll-mt-24 w-full flex flex-col justify-center items-center gap-2">
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#37322F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              Open source
            </div>
          </div>

          <h2 className="self-stretch m-0 text-center text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Free to learn. Yours to host.
          </h2>

          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Edtools Labs is open source. Try it without an API key,
            <br />
            plug yours in for full features, or fork it for your school.
          </div>
        </div>
      </div>

      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col md:flex-row justify-center items-stretch gap-6 py-12 md:py-0">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>

          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
