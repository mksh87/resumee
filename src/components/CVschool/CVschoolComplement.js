function CVschoolComplement() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingFive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFive"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFive"
        >
          FORMACIÓN COMPLEMENTARIA
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingFive"
      >
        <div className="accordion-body">
          <div className="experience_container bd-grid">
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">Laravel</h3>
                <span className="experience_company">2024 | Autodidacta </span>
                <p className="experience_description">
                  Proyectos personales basado en Laravel (en proceso).
                </p>
              </div>
            </div>

            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">
                  Programación Imperativa en JavaScript
                </h3>
                <span className="experience_company">
                  2023 |{" "}
                  <a href="https://www.argentina.gob.ar/economia/conocimiento/argentina-programa">
                    Argentina Programa 4.0
                  </a>{" "}
                </span>
                <p className="experience_description">
                  Curso con tres etapas, modalidad sincrónica full stack
                  front-end: JS, HTML, CSS y React.
                </p>
              </div>
            </div>

            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">Full Stack PHP</h3>
                <span className="experience_company">
                  2023 |{" "}
                  <a href="http://buenosaires.gob.ar/educacion/codo-codo-40">
                    Codo a Codo
                  </a>{" "}
                </span>
                <p className="experience_description">
                  Curso modalidad sincrónica full stack: HTML, CSS, JS, SQL y
                  PHP.
                </p>
              </div>
            </div>

            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">
                  Diplomatura en Gestión de Emprendimientos
                </h3>
                <span className="experience_company">
                  2016 | <a href="https://21.edu.ar/">Universidad Siglo 21</a>{" "}
                </span>
              </div>
            </div>
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">
                  Diplomatura en Project Management
                </h3>
                <span className="experience_company">
                  2015 |{" "}
                  <a href="https://www.semeii.com.ar/">UTN Buenos Aires</a>{" "}
                </span>
              </div>
            </div>
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">IGCSE - AICE</h3>
                <span className="experience_company">
                  2003-2005 |{" "}
                  <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-aice-diploma/">
                    Cambridge
                  </a>{" "}
                </span>
                <p className="experience_description">
                  Examenes internacionales de bachillerato de la Universidad de
                  Cambridge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVschoolComplement;
