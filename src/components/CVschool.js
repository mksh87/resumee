import CVschoolPrincipal from "./CVschool/CVschoolPrincipal";
import CVschoolComplement from "./CVschool/CVschoolComplement";

function CVschool() {
  return (
    <section className="certificate section" id="certificate">
      <h2 className="section-title">Certificados</h2>
      <div className="certificate_container bd-grid">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <CVschoolPrincipal />
          <CVschoolComplement />
        </div>
      </div>
    </section>
  );
}

export default CVschool;
