import { useEffect } from "react";
const UpdateSidebarVisibility = () => {

    useEffect(() => {
        const updateSidebarVisibility = () => {
          const serviceSections = document.querySelectorAll(".serviceSection");
          const sideBar = document.querySelector(".sideBar");
          const sideBarIcon = document.querySelectorAll(".sideBarItem");
    
          let isAnySectionVisible = false;
    
          serviceSections.forEach((serviceSection) => {
            const rect = serviceSection.getBoundingClientRect();
    
            if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
              isAnySectionVisible = true;
    
              const currentID = serviceSection.id;
    
              sideBarIcon.forEach((link) => {
                link.classList.remove("active");
              });
    
              document
                .querySelector('a[href="#' + currentID + '"]')
                .parentNode.classList.add("active");
            }
          });
    
          if (isAnySectionVisible) {
            sideBar.classList.add("show");
          } else {
            sideBar.classList.remove("show");
          }
        };
    
        window.addEventListener("scroll", updateSidebarVisibility);
        updateSidebarVisibility();
    
        return () => {
          window.removeEventListener("scroll", updateSidebarVisibility);
        };
      }, []);
}

export default UpdateSidebarVisibility
