import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../Components/Logo.jsx";
import { usePanelAuth } from "./PanelAuthContext.jsx";
import "./Panel.css";

const Login = () => {
  const { user, loading, login } = usePanelAuth();
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user) {
    return <Navigate to="/panel" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(identifier, password);
      navigate("/panel");
    } catch {
      setError("Nieprawidłowa nazwa użytkownika lub hasło.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="panel">
      <div className="panelLoginPage">
        <form className="panelLoginCard" onSubmit={handleSubmit}>
          <div className="panelLoginBrand">
            <Logo />
            <p>Panel zarządzania blogiem</p>
          </div>

          {error && <div className="panelError">{error}</div>}

          <div className="panelField">
            <label htmlFor="identifier">Nazwa użytkownika</label>
            <input
              id="identifier"
              type="text"
              autoComplete="username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <div className="panelField">
            <label htmlFor="password">Hasło</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="panelPrimaryBtn panelLoginSubmit" disabled={submitting}>
            {submitting ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
