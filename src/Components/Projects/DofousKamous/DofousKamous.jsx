import imgDofous from "../../../img/icons/bgdofusNews.jpg"
import iconDofous from "../../../img/icons/dofus.png";
import './style.css';

export default function DofousKamous() {
  return (
    <div>
       
          <li className="project-dofous">
            <img className="background-dofous"
            src={imgDofous} alt="" />
            <h2 className="description-dofous">Vendez vos kamas au meilleur prix et recevez votre paiement en 5 minutes. Echange des kamas gratuitement entre serveurs dofus, dofus touch, Retro.</h2>
          <img className="icon-dof" src={iconDofous} alt="site-dofous-kamous" />
          </li>
    </div>
  )
}
