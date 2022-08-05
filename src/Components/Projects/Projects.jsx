import "./style.css";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";

export default function Projects() {
  return (
    <div className="container-search">
      <div className="container-project">
        <h1 className="title--project">List of projects</h1>
        <div className="project-intro">
          <Search />
          <button className="Idle-rpg">
            <a target="_blank" href=" http://idle-rpg.surge.sh/">
              Idle
            </a>
          </button>

          <button className="btn-morpion">
            <a target="_blank" href="https://morpion-game.surge.sh/">
              Morpion
            </a>
          </button>

          <button className="btn-dofous">
            <a target="_blank" href="https://dofous-kamous.surge.sh/">
              Kamas
            </a>
          </button>
          <button className="back-home">
            <a className="link-home" href="/">
              Home
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
