import React from 'react';
import './style.css'

function Card(props){
    return(
        <div>
            <p>{props.word}</p>
        </div>
    )
}

export default Card;