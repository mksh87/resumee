import React, { useEffect } from "react";

function CVheader() {
  useEffect(() => {
    // Function to show/hide menu
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show-menu");
        });
      }
    };

    // Call showMenu function
    showMenu("nav-toggle", "nav-menu");
  }, []);
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav_logo">
          Marcos Keshishian
        </a>
        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="bx bx-home nav_icon"></i>Inicio
              </a>
            </li>
            <li className="nav_item">
              <a href="#profile" className="nav_link">
                <i className="bx bx-user nav_icon"></i>Perfil
              </a>
            </li>
            <li className="nav_item">
              <a href="#education" className="nav_link">
                <i className="bx bx-book nav_icon"></i>Educación
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="bx bx-receipt nav_icon"></i>Habilidades
              </a>
            </li>
            <li className="nav_item">
              <a href="#experience" className="nav_link">
                <i className="bx bx-briefcase-alt nav_icon"></i>Experiencia
              </a>
            </li>
            <li className="nav_item">
              <a href="#certificate" className="nav_link">
                <i className="bx bx-award nav_icon"></i>Certificados
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
}

export default CVheader;
