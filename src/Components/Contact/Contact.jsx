import mail from "../../img/icons/email.png";
import name from "../../img/icons/name.jpg";
import message from "../../img/icons/message.jpg";
import "./contact.css";

export default function Contact() {
  return (
    <>
    <div className="listing-contact">
      <h1 className="title-contact">Contact Me</h1>
      <h2>I'll be Glad to Answer your questions !</h2>
      </div>
<div className="container-contact">
      <div className="form-container">

        <label className="mail">
          <img className="name-icons" src={name} alt="Mail" />

          <input type="text" name="name" value="Entrez votre Nom" />
        </label>

        <label className="mail">
          <img className="mail-icons" src={mail} alt="Mail" />
          <input type="text" name="name" value="Entrez votre E-mail " />
        </label>
        <label className="message-form">
          <img className="name-icons" src={message} alt="Mail" />

          <input
            className="mail-input"
            type="text"
            name="name"
            value="Entrez votre message"
          />
        </label>

        <button className="send-message">Envoyer</button>
      </div>
      <article>message concernanfnrkfhjjrhfr</article>
    </div>
    </>
  );
}
