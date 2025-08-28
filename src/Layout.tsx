// src/Layout.tsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always visible */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always visible */}
      <footer className="relative bg-green-700 text-white px-6 py-10 overflow-hidden">
        <img
          src="/logo.png"
          alt="Background Logo"
          className="absolute opacity-10 w-64 h-64 -bottom-10 -right-10 pointer-events-none select-none"
        />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src="/logo.png" alt="Logo" className="w-14 h-14" />
            <h2 className="text-lg font-semibold">GOD'S HAND AK PHARMA</h2>
            <p className="text-sm text-gray-200">
              Your trusted partner in health and wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-md font-semibold mb-3">Contact</h3>
            <p className="text-sm">
              📞{" "}
              <a
                href="https://wa.me/2348021354478?text=Hello!%20I%20would%20like%20to%20make%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                +234-802-135-4478
              </a>
            </p>
            <p className="text-sm">
              📧{" "}
              <a
                href="mailto:info@godshandakpharma.com"
                className="hover:text-yellow-300"
              >
                info@godshandakpharma.com
              </a>
            </p>
            <p className="text-sm">
              📍{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Sabon+Tasha,+Kaduna,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                123 Sabon Tasha, Kaduna, Nigeria
              </a>
            </p>
          </div>
        </div>

        <div className="relative border-t border-green-500 mt-8 pt-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

