import React from "react";
import Socialmedia from "./socialMedia";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "../sass/share.scss";
import Button from "./button";

function Share({ onNewQuoteClick, onShareQuote, onShareAuthor }) {
  return (
    <div className="media_container">
      <Button text="Nueva cita" onClick={onNewQuoteClick} />

      <Socialmedia
        icon={<AiFillTwitterSquare size={20} className="icon" />}
        text="Tuitear"
        isTweet={true}
        link={`https://twiter.com/intent/tweet?text=${onShareQuote} ${onShareAuthor} /sígueme @EduMontenegroF`}
      />
      <Socialmedia
        icon={<AiFillInstagram size={20} className="icon" />}
        text="Compartir"
        isTweet={false}
        link={`https://www.instagram.com/inpsac/`}
      />
    </div>
  );
}

export default Share;
