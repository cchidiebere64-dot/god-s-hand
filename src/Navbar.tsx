import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="God's Hand Pharma Logo"
            className="w-12 h-12"
          />
          <h1 className="text-base md:text-lg font-semibold text-green-700 leading-tight">
            GOD'S HAND AK <br className="hidden sm:block" />
            PHARMACEUTICAL SUPPLIES LTD
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-green-600">About Us</a>
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col items-center gap-4 py-6 text-base font-medium text-gray-800">
            <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
