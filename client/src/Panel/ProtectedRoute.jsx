import { Navigate } from "react-router-dom";
import { usePanelAuth } from "./PanelAuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = usePanelAuth();

  if (loading) {
    return <div className="panelLoading">Ładowanie...</div>;
  }

  if (!user) {
    return <Navigate to="/panel/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
