import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0 max-w-[1100px] mx-auto px-5 my-10" >
        <div className="flex items-center gap-3.5">
          <span className="w-11 h-11 rounded-lg inline-grid place-items-center bg-gradient-to-b from-white/[0.03] to-white/[0.01] shadow-[0_6px_18px_rgba(2,6,23,0.6)] border border-white/[0.03]">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeOpacity="0.06" />
              <path d="M6 15 L10 9 L14 13 L18 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            </svg>
          </span>
          <h1 className="font-normal text-base tracking-[0.06em] m-0">DsSoft</h1>
        </div>
        <nav className="flex gap-5 items-center">
          <Link to="/" className="text-muted-foreground no-underline text-[13px] hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/capabilities" className="text-muted-foreground no-underline text-[13px] hover:text-foreground transition-colors">
            Capabilities
          </Link>
          <Link to="/work" className="text-muted-foreground no-underline text-[13px] hover:text-foreground transition-colors">
            Work
          </Link>
          <Link to="/contract" className="text-muted-foreground no-underline text-[13px] hover:text-foreground transition-colors">
            Contract
          </Link>
          <Button variant="ghost" size="sm" className="bg-transparent text-muted-foreground border-white/[0.03] hover:text-foreground hover:bg-white/[0.02]">
            Sign in
          </Button>
        </nav>
      </header >
    </>
  )
}