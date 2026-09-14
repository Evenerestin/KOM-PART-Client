import Logo from "../Components/Logo.jsx";
import { usePanelAuth } from "./PanelAuthContext.jsx";
import "./Panel.css";

const PanelLayout = ({ children }) => {
  const { user, logout } = usePanelAuth();

  return (
    <div className="panel">
      <div className="panelTopBar">
        <div className="panelTopBarLogo">
          <Logo />
        </div>
        <div className="panelUser">
          {user && <span>{user.email}</span>}
          <button className="panelLogoutBtn" onClick={logout}>
            Wyloguj
          </button>
        </div>
      </div>
      <div className="panelContent">{children}</div>
    </div>
  );
};

export default PanelLayout;
