import linkedin from "../../img/icons/linkedin.png";
import discord from "../../img/icons/discord.png";
import gmail from "../../img/icons/gmail.png";


import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-contact">
           
      <a href="https://discord.gg/hJ6sKqkhPw" target="_blank">
      <img className="logo_discord" src={discord} alt="lien-discord" />

      </a>
      <a href="https://www.linkedin.com/in/mathias-benmansour-3618351b1/" target="_blank">
        <img className="logo_linkedin" src={linkedin} alt="lien-linkedin" />
      </a>
      <a href="mailto:mathias70250@gmail.com" >
        
        <img className="logo_gmail"  src={gmail} alt="lien-mail" />
      </a>
    </footer>
  );
}
