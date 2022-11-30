import React from "react";

function SocialMedia({ isTweet, text, icon, link }) {
  return (
    <a
      id={isTweet ? "tweet-quote" : "share-quote"}
      href={link}
      target="_top"
      rel="noreferrer"
      className={isTweet ? "btn-twitter" : "btn-instagram"}
      alt="tuitear"
    >
      {icon}
      {text}
    </a>
  );
}

export default SocialMedia;
