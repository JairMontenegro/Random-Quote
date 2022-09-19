import React, { useEffect, useState } from "react";
import Share from "../components/share";
import "../sass/frame.scss";
import axios from "axios";

function Frame(props) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    axios
      .get("./local-json/quotes/quotes.json")
      .then((data) => {
        let dataQuotes = data.data.quotes;
        let getRandomNum = Math.floor(Math.random() * dataQuotes.length);
        let getRandomQuote = dataQuotes[getRandomNum];
        setQuote(getRandomQuote.quote);
        setAuthor(getRandomQuote.author);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="quote-box">
      <header>PSICOLOGIA Y CULTURA</header>
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <img
        className="img-inpsac"
        src={require(`../img/${props.image}.png`)}
        alt="img-inpsac"
      />

      <Share
        onNewQuoteClick={getQuote}
        onShareQuote={quote}
        onShareAuthor={author}
      />
    </div>
  );
}

export default Frame;
