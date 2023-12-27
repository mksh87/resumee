function CVworkDocencia() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree"
        >
          OTROS
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree"
      >
        <div className="accordion-body">
          <div className="experience_container bd-grid">
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">
                  DESARROLLO DE EMPRENDIMIENTO
                </h3>
                <span className="experience_company">
                  2014 a 2018 |{" "}
                  <a href="https://www.instagram.com/housemerchandising">
                    HOUSE MERCHANDISING
                  </a>
                </span>
                <p className="experience_description">
                  Emprendimiento de venta de merchandising personalizado por
                  sublimación. Proyecto de tesis de Ingeniería Industrial
                  orientada a desarrollo de plan de negocios. El emprendimiento
                  funcionó durante cuatro años. Socio principal, encargado de:
                </p>
                <ul>
                  <li>Viabilidad de proyecto de inversión.</li>
                  <li>Desarrollo de marca.</li>
                  <li>Análisis de costos.</li>
                  <li>Planificación de producción. </li>
                  <li>Gestión de stock.</li>
                  <li>Estados contables.</li>
                  <li>Diseño y gestión de canales de venta.</li>
                </ul>
              </div>
            </div>
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">LOGISTICA DE MATERIALES</h3>
                <span className="experience_company">
                  2010 | <a href="https://eling.com.ar/"> ELECTROINGENIERÍA</a>
                </span>
                <p className="experience_description">
                  Departamento de logística. Investigación, clasificación,
                  codificación y carga al Maestro de Materiales de la empresa.
                  Experiencia en uso de SAP.
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
