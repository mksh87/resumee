function CVschoolPrincipal() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingFour">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFour"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFour"
        >
          FORMACIÓN PRINCIPAL
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingFour"
      >
        <div className="accordion-body">
          <div className="experience_container bd-grid">
            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">INGENIERO INDUSTRIAL</h3>
                <span className="experience_company">
                  2006-2014 |{" "}
                  <a href="https://www.aareii.org.ar/">
                    UTN - Facultad Regional Córdoba
                  </a>
                </span>
              </div>
            </div>

            <div className="experience_content">
              <div className="experience_time">
                <span className="experience_rounder"></span>
              </div>
              <div className="experience_data bd-grid">
                <h3 className="experience_title">
                  BACHILLER EN HUMANIDADES E IDIOMAS
                </h3>
                <span className="experience_company">
                  2000-2005 |{" "}
                  <a href="https://www.aareii.org.ar/">Academia Argüello</a>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVschoolPrincipal;
