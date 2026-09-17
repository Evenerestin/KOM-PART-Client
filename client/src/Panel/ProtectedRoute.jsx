import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";
import { usePanelAuth } from "./usePanelAuth.js";

const ProtectedRoute = ({ children }) => {
  const { user, loading, authError, retry } = usePanelAuth();

  if (loading) {
    return <div className="panelLoading">Ładowanie...</div>;
  }

  // A stored token exists but the profile fetch failed for a reason other
  // than an invalid token -- offer a retry instead of forcing a re-login.
  if (!user && authError) {
    return (
      <div className="panelLoading">
        <p>Nie udało się zweryfikować sesji. Sprawdź połączenie.</p>
        <button type="button" onClick={retry}>
          Spróbuj ponownie
        </button>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/panel/login" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
