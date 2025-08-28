// src/components/Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-green-700 text-white px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="God's Hand Pharma logo"
              className="h-12 w-12"
            />
            <span className="text-[15px] md:text-lg font-semibold tracking-tight text-green-700 leading-tight">
              GOD’S HAND AK PHARMACEUTICAL<br className="hidden md:block" />
              <span className="md:hidden"> SUPPLIES LTD</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            <a href="#about" className="hover:text-green-700">About</a>
            <a href="#services" className="hover:text-green-700">Services</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
            <a
              href="#order"
              className="inline-block rounded-xl bg-green-700 px-4 py-2 text-white hover:bg-green-800"
            >
              Order Online
            </a>
          </nav>

          {/* Mobile button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="md:hidden border-t border-gray-100 py-4 animate-in fade-in slide-in-from-top-2"
            role="navigation"
          >
            <ul className="flex flex-col items-start gap-3 text-gray-700 font-medium">
              <li><a onClick={() => setOpen(false)} className="block px-1 py-1 hover:text-green-700" href="#about">About</a></li>
              <li><a onClick={() => setOpen(false)} className="block px-1 py-1 hover:text-green-700" href="#services">Services</a></li>
              <li><a onClick={() => setOpen(false)} className="block px-1 py-1 hover:text-green-700" href="#contact">Contact</a></li>
              <li><a onClick={() => setOpen(false)} className="block rounded-xl bg-green-700 px-4 py-2 text-white hover:bg-green-800" href="#order">Order Online</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
