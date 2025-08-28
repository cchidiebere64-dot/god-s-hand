import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
