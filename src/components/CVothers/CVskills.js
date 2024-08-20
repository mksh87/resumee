import { GB, ES, FR, DE } from "country-flag-icons/react/3x2";

function CVskills() {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills_content d-flex justify-content-center flex-wrap">
          <li className="skills_name">
            <span className="skills_circle"></span> Control de gestión
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span> Project Management
          </li>
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
            <span className="skills_circle"></span> React
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span> SQL
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span> PHP
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span> Laravel
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span>DATABASES
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span>ILLUSTRATOR
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span>Comunicación
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span>MS Office
          </li>
          <li className="skills_name">
            <span className="skills_circle"></span>Linux
          </li>
        </div>
      </section>
      <section className="languages section">
        <h2 className="section-title">Idiomas</h2>
        <div className="languages_container">
          <ul className="languages_content d-flex justify-content-center flex-wrap">
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
              <DE title="United States" className="langicons" /> Alemán (básico)
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
    </>
  );
}

export default CVskills;
