import CVworkDocencia from "./CVwork/CVworkDocencia";
import CVworkAareii from "./CVwork/CVworkAareii";
import CVworkOtros from "./CVwork/CVworkOtros";

function CVwork() {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">EXPERIENCIA LABORAL</h2>
      <div className="experience_container bd-grid">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <CVworkDocencia />
          <CVworkAareii />
          <CVworkOtros />
        </div>
      </div>
    </section>
  );
}

export default CVwork;
