import React from 'react'
import '../sass/frame.scss'



function Frame (props) {
    return(
        <div id="quote-box">
            <header>PSICOLOGIA Y CULTURA</header>
        <p id="text">"Todas las formas habituales del ser pierden súbitamente su atractivo, 
        están anuladas. Y ahora, en el pequeño agujero, la muela habita. El mundo simbólico de las cotizaciones
        de la bolsa y de la tabla de multiplicar se halla enteramente cargado en el dolor"</p>
        <img
        className='img-inpsac'
        src={require(`../img/${props.image}.png`)} alt="img-inpsac"/>
        <p id="author">Jaques Lacan,
        los escritos tecnicos de Freud</p>
        <button id="new-quote">Nueva cita</button>
    </div>
    )
}


export default Frame