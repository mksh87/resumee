function CVworkDocencia() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          INGENIERÍA INDUSTRIAL
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div className="accordion-body">
          <div className="experience_container bd-grid">
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">PRESIDENTE AArEII</h3>
                <span className="experience_company">
                  2013 | <a href="https://www.aareii.org.ar/">AArEII</a>{" "}
                </span>
                <p className="experience_description">
                  Luego de cuatro años trabajando en AArEII y un año como vocal
                  de la Comisión Directiva en agosto del año 2012 fui elegido{" "}
                  <strong>Presidente</strong> para la gestión 2013.
                </p>
              </div>
            </div>

            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">VOCAL: DIFUSIÓN Y WEB</h3>
                <span className="experience_company">
                  2012 | <a href="https://www.aareii.org.ar/">AArEII</a>{" "}
                </span>
                <p className="experience_description">
                  En agosto de 2011 fui elegido vocal de la comisión directiva
                  para la gestión 2012. Estuve encargado del posicionamiento de
                  la marca AArEII, gestión de información, desarrollo en redes
                  sociales, y de la gestión, programación y diseño web.
                </p>
              </div>
            </div>

            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">DELEGADO UTN CÓRDOBA</h3>
                <span className="experience_company">
                  2011 | <a href="https://www.aareii.org.ar/">AArEII</a>{" "}
                </span>
                <p className="experience_description">
                  Organización de las XII Jornadas Simultáneas de Estudiantes de
                  Ingeniería Industrial y carreras afines. Gestión de la
                  delegación UTN Córdoba al XI Congreso Argentino de Estudiantes
                  de Ingeniería Industrial y carreras afines Mendoza 2011.{" "}
                </p>
              </div>
            </div>
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">SemEII: DIFUSIÓN Y WEB</h3>
                <span className="experience_company">
                  2011 | <a href="https://www.semeii.com.ar/">SemEII</a>{" "}
                </span>
                <p className="experience_description">
                  Proyecto de organización del 3° Seminario de Estudiantes de
                  Ingeniería Industrial y carreras afines, bajo la temática
                  "Agregando valor a los productos primarios de exportación".
                  Coordinador del área de Difusión. Desarrollo de imagen del
                  evento. Programación y diseño web. Desarrollo de branding del
                  evento y de la temática.{" "}
                </p>
              </div>
            </div>
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">CAEII: DIFUSIÓN Y WEB</h3>
                <span className="experience_company">
                  2009 | <a href="https://www.caeii.com.ar/">CAEII</a>{" "}
                </span>
                <p className="experience_description">
                  Proyecto de organización del 7° Congreso Argentino de
                  Estudiantes de Ingeniería Industrial y carreras afines, bajo
                  la temática "Desarrollando una visión competitiva para el
                  posicionamiento en el mercado global". Participante del área
                  de Difusión. Desarrollo de imagen del evento. Programación y
                  diseño web. Desarrollo de branding del evento y de la
                  temática.{" "}
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
