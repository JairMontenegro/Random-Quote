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
      <p id="text">"Ninguna pérdida es ajena a la problematica social." </p>
      <img
        className="img-inpsac"
        src={require(`../img/${props.image}.png`)}
        alt="img-inpsac"
      />
      <p id="author">
        Sarah Cohen <br /> La niñez cautiva
      </p>
      <Share />
    </div>
  );
}

export default Frame;
