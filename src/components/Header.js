import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          {/* <img src="/logo_vt1.png" alt="ViziuneTech Logo" className="h-8 inline-block mr-2" /> */}
          <span className="text-gray-900">Viziune</span>
          <span className="text-indigo-600">Tech</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-indigo-600 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-indigo-600 transition">
            Projects
          </a>
          <a href="#pricing" className="hover:text-indigo-600 transition">
            Pricing
          </a>
          {/* <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a> */}

          <a
            href="#contact"
            className="ml-4 inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 transition"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <a
              href="#contact"
              className="mt-2 text-center rounded-full bg-indigo-600 py-2 text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
