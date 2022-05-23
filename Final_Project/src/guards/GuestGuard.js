import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ROUTES from "../config/routes";

function GuestGuard({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return <Navigate to={ROUTES.MAIN} />;
  }
  return <>{children}</>;
}

export default GuestGuard;
