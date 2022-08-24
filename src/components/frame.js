import React from "react";
import Share from "../components/share";
import { useState, useEffect } from "react";
import "../sass/frame.scss";
import quotes from "../quotes/quotes.json";

function Frame(props) {
  const [quote, setQuote] = useState(quotes);

  useEffect(() => {
    console.log(quote);
  }, []);

  return (
    <div id="quote-box">
      <header>PSICOLOGIA Y CULTURA</header>
      <p id="text">
        Las redes sociales son una trampa 'El diálogo real no es hablar con
        gente que piensa lo mismo que tú. Las redes sociales no enseñan a
        dialogar porque es tan fácil evitar la controversia… Mucha gente usa las
        redes sociales no para unir, no para ampliar sus horizontes, sino al
        contrario, para encerrarse en lo que llamo zonas de confort, donde el
        único sonido que oyen es el eco de su voz, donde lo único que ven son
        los reflejos de su propia cara. Las redes son muy útiles, dan servicios
        muy placenteros, pero son una trampa'
      </p>
      <img
        className="img-inpsac"
        src={require(`../img/${props.image}.png`)}
        alt="img-inpsac"
      />
      <p id="author">Zygmunt Bauman Filósofo polaco</p>
      <Share />
    </div>
  );
}

export default Frame;
