{/*import { Navigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/admin" replace />;

  return <>{children}</>;
}
*/}

