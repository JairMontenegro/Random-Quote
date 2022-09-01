import React from "react";

function Socialmedia({ isTweet, text, icon, quote }) {
  return (
    <a
      id={isTweet ? "tweet-quote" : "share-quote"}
      href={`https://twiter.com/intent/tweet?text=${quote}sigueme en @inspac`}
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
