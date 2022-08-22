import React from "react";





function Socialmedia ({isTweet,text}){
    return(
        <a 
        id={isTweet ? 'tweet-quote' : 'share-quote' }
        href="twitter.com/intent/tweet" 
        className={isTweet? 'btn-twitter' : 'btn-instagram'}
        alt="tuitear" >{text}
        </a>
    )
}

export default Socialmedia