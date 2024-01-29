import React, { useState } from "react";
import "../assets/css/styles.css";
import CVwork from "./CVwork";
import CVschool from "./CVschool";
import profpic from "../assets/img/profile.jpg";
import profgif from "../assets/img/profile.gif";

import { GB, ES, FR, DE } from "country-flag-icons/react/3x2";

function CVmain() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="Main">
      <div className="resume" id="area-cv">
        <div className="resume__left">
          <section className="home" id="home">
            <div className="home_containter section bd-grid">
              <div className="home_data bd-grid">
                <img
                  src={isHovered ? profgif : profpic}
                  alt=""
                  className="home_img center"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                />
                <small>
                  <i>Hover </i>&#9757;
                </small>
                <h1 className="home_title">
                  Marcos <b>KESHISHIAN</b>
                </h1>
                <div>
                  <a
                    download=""
                    href="assets/pdf/keshishian-cv.pdf"
                    className="home_button-movil"
                  >
                    Descargar
                  </a>
                </div>
              </div>
              <div className="home_address bd-grid">
                <span className="home_information">
                  <i className="bx bx-map"> &nbsp; </i> Córdoba, Argentina
                </span>
                <span className="home_information">
                  <i className="bx bx-envelope"> &nbsp; </i>{" "}
                  keshishian.marcos@gmail.com
                </span>
                <span className="home_information">
                  <i className="bx bx-phone"> &nbsp; </i> +54 (351) 5915216
                </span>
              </div>
            </div>

            <i
              className="bx bx-moon change-theme"
              title="Theme"
              id="theme-button"
            ></i>
            <i
              className="bx bx-download generate-pdf"
              title="Generate PDF"
              id="resume-button"
            ></i>
          </section>

          <section className="social section">
            <h2 className="section-title">SOCIAL</h2>
            <div className="social_container bd-grid">
              <a
                href="https://www.linkedin.com/in/mkeshishian/"
                target="_blank"
                className="social_link"
              >
                <i className="bx bxl-linkedin-square social_icon"></i>{" "}
                @mkeshishian
              </a>
              <a
                href="https://github.com/mksh87/"
                target="_blank"
                className="social_link"
              >
                <i className="bx bxl-github social_icon"></i> @mksh87
              </a>
              <a
                href="https://twitter.com/kechi99"
                target="_blank"
                className="social_link"
              >
                <i className="bx bxl-twitter social_icon"></i> @kechi99
              </a>
            </div>
          </section>
          <section className="profile section" id="profile">
            <h2 className="section-title">PERFIL</h2>
            <p className="profile_description">
              Soy una persona dedicada con habilidades transversales:
              comunicación, flexibilidad, lógica, gestión y proactividad.
            </p>
          </section>
        </div>
        <div className="resume__right">
          <CVschool />
          <CVwork />
          <section className="skills section" id="skills">
            <h2 className="section-title">Habilidades</h2>
            <div className="skills_content bd-grid">
              <li className="skills_name">
                <span className="skills_circle"></span> HTML
              </li>
              <li className="skills_name">
                <span className="skills_circle"></span> CSS
              </li>
              <li className="skills_name">
                <span className="skills_circle"></span> BOOTSTRAP
              </li>
              <li className="skills_name">
                <span className="skills_circle"></span> JAVASCRIPT
              </li>

              <li className="skills_name">
                <span className="skills_circle"></span>DATABASES
              </li>
              <li className="skills_name">
                <span className="skills_circle"></span>ILLUSTRATOR
              </li>
              <li className="skills_name">
                <span className="skills_circle"></span>COMUNICATION SKILLS
              </li>
              <li className="skills_name">
                <span className="skills_circle"></span>OFFICE
              </li>
            </div>
          </section>
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
  );
}

export default CVmain;
