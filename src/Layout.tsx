

// src/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD. All rights reserved.</p>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page content (App.tsx or Order.tsx will render here) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
