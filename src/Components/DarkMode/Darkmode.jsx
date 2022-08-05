import "./style.css";
import { useState } from "react";
import DarkMode from "../../img/icons/half-moon.png";
import LightMode from "../../img/icons/soleil.png";

export default function Darkmode() {
  const [theme, setTheme] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const [lightmode, setLightmode] = useState(true);

  const toogleTheme = () => {
    setTheme(!theme);
  };

  const darkHover = () => {
    setDarkmode(!darkmode);
  };

  const LightHover = () => {
    setLightmode(!lightmode);
  };

  if (theme) {
    document.body.classList.add("bodydark");
  } else {
    document.body.classList.remove("bodydark");
  }

  return (
    <div>
      <button
        onClick={toogleTheme}
        className={theme ? "btn-toggle godark" : "btn-toggle golight"}
      >
        {theme ? (
          <img
            className="dark-mode"
            onMouseOver={darkHover}
            src={LightMode}
            alt="Dark Mode"
          />
        ) : (
          <img
            className="light-mode"
            onMouseOver={LightHover}
            src={DarkMode}
            alt="Light Mode"
          />
        )}

        {darkmode ? <h1 className="dark-tooltip">Dark-mode</h1> : ""}

        {lightmode ? <h1 className="light-tooltip">Light-Mode</h1> : ""}
      </button>
    </div>
  );
}
