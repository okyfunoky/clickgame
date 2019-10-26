import React from 'react';
import './style.css'

function TitleBar(props){
    return (
        <h1 className="titlebar">
            {props.children}
        </h1>
    )
}

export default TitleBar;