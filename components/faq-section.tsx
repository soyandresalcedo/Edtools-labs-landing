"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Do I need an API key to try it?",
    answer:
      "No. Demo mode runs canned scenes routed by text in English and Spanish, so you can preview the whole flow — voice, drawings and a sample lab — without any setup or key.",
  },
  {
    question: "What kinematics topics does it cover today?",
    answer:
      "MRU, MRUA, free fall, displacement vs distance and speed vs velocity. Each topic ships as a recipe shared by the model and the lab card, so the script and the on-screen feel stay in sync.",
  },
  {
    question: "Does it work on desktop without a phone?",
    answer:
      "Yes. When there's no device-orientation sensor or no permission, a drag simulator replaces the tilt input. The rest of the flow — predict, measure, reflect — works the same way.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "English and Spanish, in the UI, the prompts, the voice and the lab cards. The toggle lives in the sidebar and updates everything at once, including the suggested chips.",
  },
  {
    question: "Where does my data go?",
    answer:
      "Topic progress lives in your browser via localStorage. The backend only sees a small summary so the agent doesn't repeat itself like a fixed script. Nothing personal, no accounts.",
  },
  {
    question: "Can I self-host or fork it?",
    answer:
      "Yes. The repo is open source — clone it, add a Claude key in .env.local, and run pnpm dev. For sensors on mobile, an HTTPS tunnel (Cloudflare or similar) is recommended.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div id="faq" className="scroll-mt-24 w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <h2 className="w-full m-0 text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            What teachers, students and judges usually ask
            <br className="hidden md:block" />
            before opening the live app.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
