import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#181c2f]/90 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="w-full flex items-center justify-between px-4 md:px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 select-none">
          {/* SVG Logo */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-blue-500 shadow-md">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="url(#paint0_linear)" />
              <path d="M10 21C13 13 19 13 22 21" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="16" cy="16" r="5" fill="#fff" fillOpacity="0.15" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06b6d4" />
                  <stop offset="0.5" stopColor="#a21caf" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">ViziuneTech</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-base font-medium text-gray-200">
          <a href="#services" className="hover:text-cyan-400 transition">Services</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          <a
            href="#contact"
            className="ml-4 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2 text-[#181c2f] font-bold shadow-md hover:from-fuchsia-500 hover:to-cyan-400 transition"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#181c2f]/95 shadow-lg border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-3 text-gray-200">
            <a href="#services" className="hover:text-cyan-400 transition" onClick={() => setOpen(false)}>Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition" onClick={() => setOpen(false)}>Projects</a>
            <a href="#pricing" className="hover:text-cyan-400 transition" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#contact" className="hover:text-cyan-400 transition" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="#contact"
              className="mt-2 text-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 py-2 text-[#181c2f] font-bold shadow-md hover:from-fuchsia-500 hover:to-cyan-400 transition"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
