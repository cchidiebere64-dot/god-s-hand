import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import App from "./App";
import Order from "./Order";
import "./index.css"; // Tailwind styles

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Navbar + Footer always rendered here
    children: [
      { index: true, element: <App /> },     // Landing page
      { path: "order", element: <Order /> }, // Order page
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// src/main.tsx
{/*import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import Order from "./Order";
import './index.css'; // ✅ important

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "order", element: <Order /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
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






  
