import React from "react";

function Button({ onClick, text }) {
  return (
    <button id="new-quote" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
