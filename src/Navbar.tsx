import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="God's Hand Pharma Logo"
            className="w-12 h-12"
          />
          <h1 className="text-xl font-bold text-green-700">
            GOD'S HAND AK PHARMA
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
        <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4">
          <a href="#about" className="hover:text-green-600" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#services" className="hover:text-green-600" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className="hover:text-green-600" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
