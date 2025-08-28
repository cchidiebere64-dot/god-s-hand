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
          <h1 className="text-sm md:text-lg font-semibold text-green-700 leading-tight">
            GOD'S HAND AK <br className="hidden sm:block" />
            PHARMACEUTICAL SUPPLIES LTD
          </h1>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
  <a href="/#about" className="hover:text-green-600">About Us</a>
  <a href="/#services" className="hover:text-green-600">Services</a>
  <a
    href="https://wa.me/2348021354478?text=Hello!%20I%20would%20like%20to%20make%20an%20inquiry."
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-600"
  >
    Contact
  </a>
</nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
{/* Mobile Nav */}
{isOpen && (
  <nav className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
    <a href="/#about" className="block hover:text-green-600">About Us</a>
    <a href="/#services" className="block hover:text-green-600">Services</a>
    <a
      href="/order"
      className="block hover:text-green-600"
    >
      Order Online
    </a>
    <a
      href="https://wa.me/2348021354478?text=Hello!%20I%20would%20like%20to%20make%20an%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:text-green-600"
    >
      Contact
    </a>
  </nav>
)}

    </header>
  );
}


