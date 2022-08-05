import notfound from '../../img/erreur-404.webp';
import './style.css';

export default function NotFound() {
  return (
    <div className="container-notfound">
      <h1 className="title-notfound">OUPS !</h1>
      <h2 className="description-notfound"> La page que vous recherchez semble introuvable.</h2>
      <img  className="img-notfound" src={notfound} alt="image erreur" />
      <li>
        <a href="/">Page d'acceuil</a>
      </li>
    </div>
  )
}
