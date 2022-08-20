import React from 'react'
import '../sass/button.scss' 



function Button ({handleClick,text}){
    return(
        <button id="new-quote"
        onClick={handleClick}>
            {text}
        </button>


    )


}


export default Button
