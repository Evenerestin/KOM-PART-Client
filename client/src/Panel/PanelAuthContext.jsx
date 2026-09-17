import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PropTypes } from "prop-types";
import {
  clearToken,
  fetchMe,
  getToken,
  login as apiLogin,
} from "./panelApi.js";

export const PanelAuthContext = createContext(null);

export function PanelAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // True when a stored token exists but the profile fetch failed for a
  // reason other than an invalid token (network error, server hiccup) --
  // distinct from "not logged in" so ProtectedRoute can offer a retry
  // instead of bouncing straight to the login form.
  const [authError, setAuthError] = useState(false);

  const loadUser = useCallback(() => {
    const token = getToken();
    if (!token) {
      setUser(null);
      setAuthError(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    setAuthError(false);
    fetchMe()
      .then(setUser)
      .catch((err) => {
        // Only a confirmed-invalid token should sign the admin out; a
        // transient network error or server hiccup here shouldn't destroy
        // an otherwise-valid session.
        if (err.response?.status === 401) {
          clearToken();
        } else {
          setAuthError(true);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = useCallback(async (identifier, password) => {
    await apiLogin(identifier, password);
    // The login response's user object doesn't include the role relation;
    // fetch the full profile so role-based UI (e.g. the delete button) is
    // correct from the very first render instead of only after a reload.
    let fullUser;
    try {
      fullUser = await fetchMe();
    } catch (err) {
      // Credentials were already accepted and the token is stored -- this
      // failure is unrelated to whether the password was correct, so tag it
      // for the login form to show an accurate message.
      err.duringProfileFetch = true;
      throw err;
    }
    setUser(fullUser);
    return fullUser;
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setUser(null);
    setAuthError(false);
  }, []);

  const value = useMemo(
    () => ({ user, loading, authError, retry: loadUser, login, logout }),
    [user, loading, authError, loadUser, login, logout],
  );

  return (
    <PanelAuthContext.Provider value={value}>
      {children}
    </PanelAuthContext.Provider>
  );
}

PanelAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
