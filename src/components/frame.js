import React, { useEffect, useState } from "react";
import Share from "../components/share";
import "../sass/frame.scss";

function Frame(props) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((resolve) => resolve.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let getRandomNum = Math.floor(Math.random() * dataQuotes.length);
        let getRandomQuote = dataQuotes[getRandomNum];
        setQuote(getRandomQuote.quote);
        setAuthor(getRandomQuote.author);
      });
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

      <Share onNewQuoteClick={getQuote} />
    </div>
  );
}

export default Frame;
