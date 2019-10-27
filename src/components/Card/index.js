import React from 'react';
import './style.css'

function Card(props){
    function handleOnclick(){
        props.onClick(props.data.id)
    }
    
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.data.name} src={props.data.imgSrc} onClick={handleOnclick}/>
            </div>
        </div>
    )
}

export default Card;