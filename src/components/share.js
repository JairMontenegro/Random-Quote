import React from "react";
import Button from "./button";
import Socialmedia from "./social";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "../sass/share.scss";

function Share() {
  return (
    <div className="media_container">
      <Button text="Nueva cita" />
      <Socialmedia
        icon={<AiFillTwitterSquare size={20} className="icon" />}
        text="Tuitear"
        isTweet={true}
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

// componenetes en mayuscula y nombre del componente el mismo que del archivo
// con f2 cambio el nombre en todos lados.
