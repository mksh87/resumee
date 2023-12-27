import CVworkDocencia from "./CVwork/CVworkDocencia";
import CVworkAareii from "./CVwork/CVworkAareii";
import CVworkOtros from "./CVwork/CVworkOtros";

function CVwork() {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <CVworkDocencia />
      <CVworkAareii />
      <CVworkOtros />
    </div>
  );
}

export default CVwork;
