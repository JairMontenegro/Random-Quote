import React from "react";
import Socialmedia from "./socialMedia";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "../sass/share.scss";
import Button from "./button";

function Share({ onNewQuoteClick }) {
  return (
    <div className="media_container">
      <Button text="Nueva cita" onClick={onNewQuoteClick} />

      <Socialmedia
        icon={<AiFillTwitterSquare size={20} className="icon" />}
        text="Tuitear"
        isTweet={true}
        link={`https://twiter.com/intent/tweet?text${onNewQuoteClick}`}
      />
      <Socialmedia
        icon={<AiFillInstagram size={20} className="icon" />}
        text="Compartir"
        isTweet={false}
      />
    </div>
  );
}

export default Share;
