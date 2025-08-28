import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar always visible */}
      <Navbar />
      
      {/* Page content will render here */}
      <Outlet />
    </div>
  );
}
