import React from "react";

function Socialmedia({ isTweet, text, icon }) {
  return (
    <a
      id={isTweet ? "tweet-quote" : "share-quote"}
      href={`https://twiter.com/intent/tweet?text=hello`}
      target="_blank"
      rel="noopener noreferrer"
      className={isTweet ? "btn-twitter" : "btn-instagram"}
      alt="tuitear"
    >
      {icon}
      {text}
    </a>
  );
}

export default Socialmedia;
