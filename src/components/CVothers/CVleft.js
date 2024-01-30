import React, { useState } from "react";
import profpic from "../../assets/img/profile.jpg";
import profgif from "../../assets/img/profile.gif";

function CVleft() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <>
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
            <i className="bx bxl-linkedin-square social_icon"></i> @mkeshishian
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
          Soy una persona dedicada con habilidades transversales: comunicación,
          flexibilidad, lógica, gestión y proactividad.
        </p>
      </section>
    </>
  );
}

export default CVleft;
