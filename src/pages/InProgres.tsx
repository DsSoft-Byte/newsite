import { Button } from "@/components/ui/button";

export default function InProgres() {
  return (
    <>
      <div className="min-h-screen relative">
        {/* Background Grid */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[-1]" aria-hidden="true">
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.04" />
                <stop offset="1" stopColor="#fff" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <g stroke="url(#g)" strokeWidth="1">
              <g>
                <path d="M100 0 L100 900" />
                <path d="M300 0 L300 900" />
                <path d="M500 0 L500 900" />
                <path d="M700 0 L700 900" />
                <path d="M900 0 L900 900" />
                <path d="M1100 0 L1100 900" />
                <path d="M1300 0 L1300 900" />
              </g>
              <g>
                <path d="M0 120 L1600 120" />
                <path d="M0 300 L1600 300" />
                <path d="M0 480 L1600 480" />
                <path d="M0 660 L1600 660" />
              </g>
            </g>
          </svg>
        </div>
        <div className="max-w-[1100px] mx-auto px-5">
          {/* Hero */}
          <div>
            <h2 className="font-light text-[40px] m-0 mb-[18px] text-foreground leading-[1.05]">
              This page is in development.
            </h2>
          </div>
        </div>
      </div>

    </>
  )
}