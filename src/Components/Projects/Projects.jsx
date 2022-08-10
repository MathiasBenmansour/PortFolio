import "./style.css";
import { useState } from "react";
import News from "../News/News";

export default function Home() {
  const [trueOver, setTrueOver] = useState(false);

  const handleHover = () => {
    setTrueOver(!trueOver);
  };
  return (
    <div className="container">
      <article className="container-news">
        <News />
      </article>
    </div>
  );
}
