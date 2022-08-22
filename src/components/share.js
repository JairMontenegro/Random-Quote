import React from 'react'
import Button from './button'
import Socialmedia from './social'
import '../sass/media.scss'



function Media (){
    return(
    <div className='media_container'>
    <Button text="Nueva cita"/>
    <Socialmedia 
        text="tuitear"
        isTweet={true}/>
    </div>

    )
}


export default Media
