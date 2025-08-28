// src/main.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import Order from "./Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // ✅ Layout wraps all pages
    children: [
      { path: "/", element: <App /> },
      { path: "/order", element: <Order /> },
    ],
  },
]);

export default function MainApp() {
  return <RouterProvider router={router} />;
}





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






  
