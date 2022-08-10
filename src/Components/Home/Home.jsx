import robot from "../../img/robot.gif";
import cv from "./cv/cv-Mat.pdf";

import "./style.css";
import { useState } from "react";
import News from "../News/News";

export default function Home() {
  const [trueOver, setTrueOver] = useState(false);

  const handleHover = () => {
    setTrueOver(!trueOver);
  };
  return (
    <>
      <div className="container-home">
        <h1 className="welcome">
         Le Portfolio est en cours de construction merci de patienter...
        </h1>
      </div>
      <footer className="footer-cv">
        <img className="img-robot" src={robot} alt="robot" />
        <h2 className="introduction--description">
          Hello !! , My name is Mathias and I am a junior web developer. I
          present you today my first one which will gather all my future
          projects.
          <button className="document--cv">
            <a onMouseOver={handleHover} href={cv} download="cv-Mathias">
              <i className="title-cv"> Download CV</i>

              {trueOver ? <h1 className="tooltip">Cv Mathias</h1> : ""}
            </a>
          </button>
        </h2>
      </footer>
    </>
  );
}
