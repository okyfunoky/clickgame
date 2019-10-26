import React from 'react';
import './style.css'
import { exportSpecifier } from '@babel/types';

function Wrapper(props){
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;