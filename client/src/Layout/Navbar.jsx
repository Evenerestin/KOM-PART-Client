import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { MailIcon, PhoneIcon } from "../Assets/InformationIcons";
import Logo from "../Components/Logo";
import useMobileMenu from "../Hooks/useMobileMenu";
import useScroll from "../Hooks/useScroll";
import MenuData from "./MenuData";
import "./Navbar.css";

const Navbar = () => {
  const scrolled = useScroll();
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const [menuOpen, setMenuOpen] = useState(false);
  useMobileMenu(isMobile, menuOpen, setMenuOpen);

  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    }
  };
  const closeMenu = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`${scrolled ? "scrolled" : ""}`}>
        <div className="contactInfo flex">
          <div className="flex">
            <PhoneIcon />
            <p>32 435 77 55</p>
          </div>
          <div className="flex">
            <MailIcon />
            <p>zory.kompart@gmail.com</p>
          </div>
        </div>
        <div className="navBar flex">
          <Link to="/" className="logo" onClick={closeMenu}>
            <Logo />
          </Link>
          {isMobile ? (
            <div className="hamburgerIcon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className="navigation">
              <ul className="flex">
                {MenuData.map((menu, index) => (
                  <li className="menuItem" key={index}>
                    <Link
                      to={menu.url}
                      className={location.pathname === menu.url ? "active" : ""}
                    >
                      <button>{menu.title}</button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
      {isMobile ? (
        <div className="navigationMobile">
          <ul className="flexColumn">
            <li className="menuItem" onClick={closeMenu}>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                <button>Strona główna</button>
              </Link>
            </li>
            {MenuData.map((menu, index) => (
              <li className="menuItem" onClick={closeMenu} key={index}>
                <Link
                  to={menu.url}
                  className={location.pathname === menu.url ? "active" : ""}
                >
                  <button>{menu.title}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
