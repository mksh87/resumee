import React, { useState, useEffect } from "react";
import "../assets/css/styles.css";
import html2pdf from "html2pdf.js";
import CVwork from "./CVwork";
import CVschool from "./CVschool";
import CVskills from "./CVothers/CVskills";
import CVleft from "./CVothers/CVleft";
import CVheader from "./CVheader";

import { GB, ES, FR, DE } from "country-flag-icons/react/3x2";

function CVmain() {
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

    const themeButton = document.getElementById("theme-button");
    const resumeButton = document.getElementById("resume-button");

    // Function to toggle dark/light theme
    const toggleTheme = () => {
      /* DARK LIGHT THEME */
      const themeButton = document.getElementById("theme-button");
      const darkTheme = "dark-theme";
      const iconTheme = "bx-sun";

      /* Previously selected topic (if user selected) */
      const selectedTheme = localStorage.getItem("selected-theme");
      const selectedIcon = localStorage.getItem("selected-icon");

      /* We obtain the current theme that the interface has by validating the dark-theme class */
      const getCurrentTheme = () =>
        document.body.classList.contains(darkTheme) ? "dark" : "light";
      const getCurrentIcon = () =>
        themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

      /* We validate if the user previously chose a topic */
      if (selectedTheme) {
        /* If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark */
        document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
          darkTheme
        );
        themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
          iconTheme
        );
      }

      /* Activate / deactivate the theme manually with the button */
      themeButton.addEventListener("click", () => {
        /* Add or remove the dark / icon theme */
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        /* We save the theme and the current icon that the user chose */
        localStorage.setItem("selected-theme", getCurrentTheme());
        localStorage.setItem("selected-icon", getCurrentIcon());
      });
    };

    themeButton.addEventListener("click", toggleTheme);

    // Function to generate resume
    const generateResume = () => {
      /* REDUCE THE SIZE AND PRINT ON AN A4 SHEET */
      function scaleCv() {
        document.body.classList.add("scale-cv");
      }

      /* REMOVE THE SIZE WHEN THE CV IS DOWNLOADED */
      function removeScale() {
        document.body.classList.remove("scale-cv");
      }

      /* GENERATE PDF */

      /* PDF generated area */
      let areaCv = document.getElementById("area-cv");

      let resumeButton = document.getElementById("resume-button");

      /* Html2pdf options */
      let opt = {
        margin: 0,
        filename: "Marcos-Keshishian-CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { format: "a4", orientation: "portrait" },
      };

      /* Function to call areaCv and Html2Pdf options */
      function generateResume() {
        html2pdf(areaCv, opt);
      }

      /* When the button is clicked, it executes the three functions */
      resumeButton.addEventListener("click", () => {
        /* 1. The class .scale-cv is added to the body, where it reduces the size of the elements */
        scaleCv();

        /* 2. The PDF is generated */
        generateResume();

        /* 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size. */
        setTimeout(removeScale, 5000);
      });
    };

    resumeButton.addEventListener("click", generateResume);

    // Cleanup event listeners when the component unmounts
    return () => {
      themeButton.removeEventListener("click", toggleTheme);
      resumeButton.removeEventListener("click", generateResume);
    };
  }, []);

  return (
    <>
      <CVheader />

      <div className="Main">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <CVleft />
          </div>
          <div className="resume__right">
            <CVschool />
            <CVwork />
            <CVskills />
            <section className="languages section">
              <h2 className="section-title">Idiomas</h2>
              <div className="languages_container">
                <ul className="languages_content bd-grid">
                  <li className="languages_name">
                    <ES title="United States" className="langicons" /> Español
                    (nativo)
                  </li>
                  <li className="languages_name">
                    <GB title="United States" className="langicons" /> Inglés
                    (bilingüe)
                  </li>
                  <li className="languages_name">
                    <FR title="United States" className="langicons" /> Frances
                    (intermedio)
                  </li>
                  <li className="languages_name">
                    <DE title="United States" className="langicons" /> Alemán
                    (básico)
                  </li>
                </ul>
              </div>
            </section>

            <section className="interests section">
              <h2 className="section-title">Intereses</h2>
              <div className="interests_container bd-grid">
                <div className="interests_content">
                  <i className="bx bx-code-alt interests_icon"></i>
                  <span className="interests_name">Programar</span>
                </div>
                <div className="interests_content">
                  <i className="bx bx-chalkboard interests_icon"></i>
                  <span className="interests_name">Enseñar</span>
                </div>
                <div className="interests_content">
                  <i className="bx bx-football interests_icon"></i>
                  <span className="interests_name">Deportes</span>
                </div>
                <div className="interests_content">
                  <i className="bx bx-math interests_icon"></i>
                  <span className="interests_name">Matemática</span>
                </div>
                <div className="interests_content">
                  <i className="bx bxs-plane-alt interests_icon"></i>
                  <span className="interests_name">Viajar</span>
                </div>
                <div className="interests_content">
                  <i className="bx bxs-chess interests_icon "></i>
                  <span className="interests_name">Ajedrez</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVmain;
