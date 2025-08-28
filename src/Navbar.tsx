

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 md:px-6 py-3">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="God's Hand Pharma Logo"
            className="w-12 h-12 md:w-14 md:h-14"
          />
          <h1 className="text-base md:text-lg font-semibold text-green-700">
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
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center gap-4 py-6"
          >
            {["About Us", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="w-40 text-center border border-green-600 text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-600 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
