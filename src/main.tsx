// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Order from "./Order";
import "./index.css"; // ✅ ensure TailwindCSS styles load

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);






{/*import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Order from "./Order";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/order", element: <Order /> },
  { path: "/admin", element: <AdminLogin /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);

export default function MainApp() {
  return <RouterProvider router={router} />;
}
*/}






  
