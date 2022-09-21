import React from "react";
import CV from "../../assets/cv.pdf";

function Cta() {
  return (
    <div className="cta">
      <a className="btn" href={CV}>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
}

export default Cta;
