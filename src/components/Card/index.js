import React from 'react';
import './style.css'

function Card(props){
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.data.name} src={props.data.imgSrc} onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default Card;