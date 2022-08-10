import robot from "../../img/robot.gif";
import cv from "./cv/cv-Mat.pdf";
import { useState } from "react";

import "./footer.css";

export default function Footer() {
  const [trueOver, setTrueOver] = useState(false);

  const handleHover = () => {
    setTrueOver(!trueOver);
  };
  return (
    <footer className="footer-cv">
      <img className="img-robot" src={robot} alt="robot" />
      <h2 className="footer--description">
        Hello !! , My name is Mathias and I am a junior web developer. I present
        you today my first one which will gather all my future projects.
        <button className="document--cv">
          <a onMouseOver={handleHover} href={cv} download="cv-Mathias">
            <i className="title-cv"> Download CV</i>

            {trueOver ? <h1 className="tooltip">Cv Mathias</h1> : ""}
          </a>
        </button>
      </h2>
    </footer>
  );
}
