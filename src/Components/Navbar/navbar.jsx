import "./index.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [homeBtn, setHomeBtn] = useState(true);
  let [home, setHome] = useState(true);

  const toogleNav = () => {
    setHomeBtn(!homeBtn);
    if (homeBtn) {
      setHome(true);
    }
  
  };
  

  return (
    <div>
      <button className="menu-modal" onClick={toogleNav}>
        {homeBtn ? (
          <div className="icone-nav"></div>
        ) : (
          <div className="close-nav">
            {" "}
            <nav className="listing-nav-res">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "nav-introduction"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "nav-menu-project"
                }
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "nav-menu-contact"
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </button>

      {home && (
        <nav className="listing-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeLink" : "nav-introduction"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "activeLink" : "nav-menu-project"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "activeLink" : "nav-menu-contact"
            }
          >
            Contact
          </NavLink>
        </nav>
      )}
    </div>
  );
}
