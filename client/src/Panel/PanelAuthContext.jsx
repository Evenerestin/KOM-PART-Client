import { createContext, useContext, useEffect, useState } from "react";
import {
  clearToken,
  fetchMe,
  getToken,
  login as apiLogin,
} from "./panelApi.js";

const PanelAuthContext = createContext(null);

export function PanelAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    fetchMe()
      .then(setUser)
      .catch(() => clearToken())
      .finally(() => setLoading(false));
  }, []);

  const login = async (identifier, password) => {
    await apiLogin(identifier, password);
    // The login response's user object doesn't include the role relation;
    // fetch the full profile so role-based UI (e.g. the delete button) is
    // correct from the very first render instead of only after a reload.
    const fullUser = await fetchMe();
    setUser(fullUser);
    return fullUser;
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return (
    <PanelAuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </PanelAuthContext.Provider>
  );
}

export function usePanelAuth() {
  const ctx = useContext(PanelAuthContext);
  if (!ctx) {
    throw new Error("usePanelAuth must be used within a PanelAuthProvider");
  }
  return ctx;
}
