import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace={true} />;
}
