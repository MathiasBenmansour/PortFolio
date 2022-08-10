import mail from "../../img/icons/email.png";
import name from "../../img/icons/name.jpg";
import message from "../../img/icons/message.jpg";
import linkedin from "../../img/icons/linkedin.png";
import discord from "../../img/icons/discord.png";
import gmail from "../../img/icons/gmail.png";

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
      <article>
      <a href="https://discord.gg/hJ6sKqkhPw" target="_blank">
      <img className="logo_discord" src={discord} alt="lien-discord" />

      </a>
      <a href="https://www.linkedin.com/in/mathias-benmansour-3618351b1/" target="_blank">
        <img className="logo_linkedin" src={linkedin} alt="lien-linkedin" />
      </a>
      <a href="mailto:mathias70250@gmail.com" >
        
        <img className="logo_gmail"  src={gmail} alt="lien-mail" />
      </a>

      </article>
    </div>
    </>
  );
}
