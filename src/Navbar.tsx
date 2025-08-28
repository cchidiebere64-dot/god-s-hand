import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 md:px-6 py-3">
        {/* Logo + Short Title */}
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

        {/* Mobile Menu Button with Animation */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* 3 bars animate into X */}
          <motion.span
            className="block h-1 bg-gray-800 rounded"
            animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-1 bg-gray-800 rounded"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-1 bg-gray-800 rounded"
            animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-6"
          >
            <a
              href="#about"
              className="w-40 text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#services"
              className="w-40 text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="w-40 text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
