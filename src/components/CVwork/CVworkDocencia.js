function CVworkDocencia() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          DOCENCIA
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body">
          <div className="experience_container bd-grid">
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">Docente Secundario</h3>
                <span className="experience_company">
                  2015 - A la fecha |{" "}
                  <a href="https://marktwain.edu.ar/" target="”_blank”">
                    Colegio Bilingüe Mark Twain
                  </a>
                </span>
                <p className="experience_description">
                  Docente en las materias Maths y Físcia (en castellano y en
                  inglés). Preparo estudiantes para los IGCSE de la universidad
                  de Cambridge. También entreno al equipo de Mark Twain que
                  compite en la Olimpíada Matemática Argentina
                  <a href="https://www.oma.org.ar/" target="”_blank”">
                    (OMA)
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <span className="experience_company">
                  2012 - 2019 |{" "}
                  <a href="https://aa.edu.ar/" target="”_blank”">
                    Instituto Academia Argüello
                  </a>
                </span>
                <p className="experience_description">
                  Docente en las materias Maths y Mechanics (en castellano y en
                  inglés), en la preparación de estudiantes para los IGCSE y
                  AICE de la universidad de Cambridge.
                </p>
              </div>
            </div>
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">Docente Universitario</h3>
                <span className="experience_company">
                  2016 - 2019 |{" "}
                  <a href="https://marktwain.edu.ar/" target="_blank">
                    UTN - Facultad Regional Córdoba
                  </a>
                </span>
                <p className="experience_description">
                  Ayudante de cátedra de la materia "Control de Gestión" de 5º
                  año de la carrera de Ingeniería Industrial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVworkDocencia;
