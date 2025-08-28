import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";   // Landing page
import Order from "./Order"; // Order page
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Navbar + Footer wrap children
    children: [
      { index: true, element: <App /> },   // Landing page
      { path: "order", element: <Order /> } // Order page
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
