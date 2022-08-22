import React from 'react'



function Button ({handleClick, text}){
    return(
        <button id="new-quote"
        onClick={handleClick}>
        {text}
        </button>
    )


}


export default Button
