import Morpion from "../..=/../../../img/jeu-morpion.jpg";
import './style.css';

export default function MorpionGames() {
  return (
    <div className="project-morpion">
        <article>
          <li className="article-morpion">
          <img className="img-morpion" src={Morpion} alt="Jeu du Morpion" />
          <h2 className="description-morpion">Qui ne connaît pas le jeu du morpion ( aussi appelé Tic Tac Toe ) Il se joue partout et facilement. </h2>
          </li>
        </article>
    </div>
  )
}
