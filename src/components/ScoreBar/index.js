import React from 'react';
import './style.css'

function ScoreBar(props) {
    return (
        <div>
            <h2 className="scorebar">
                {/* High Score: {props.data.highScore} */}
            </h2>
            <h2 className="scorebar">
                {/* Current Score: {props.data.currentScore} */}
            </h2>
        </div>
    )
}

export default ScoreBar;