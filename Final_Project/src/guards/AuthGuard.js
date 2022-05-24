import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ROUTES from "../config/routes";

function AuthGuard({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to={`/${ROUTES.SIGN_IN}`} />;
  }
  return <>{children}</>;
}

export default AuthGuard;
