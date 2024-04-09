import { useEffect } from "react";

const useMobileMenu = (isMobile, menuOpen, setMenuOpen) => {
  useEffect(() => {
    const hamburgerIcon = document.querySelector(".hamburgerIcon");
    const navigationMobile = document.querySelector(".navigationMobile");

    if (hamburgerIcon && navigationMobile) {
      if (menuOpen) {
        hamburgerIcon.classList.add("open");
        navigationMobile.classList.add("open");
      } else {
        hamburgerIcon.classList.remove("open");
        navigationMobile.classList.remove("open");
      }
    }
  }, [isMobile, menuOpen]);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile, setMenuOpen]);
};

export default useMobileMenu;
