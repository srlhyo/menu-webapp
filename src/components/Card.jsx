import React from 'react';
import playButton from '../images/Play2.png';

function Card(props) {
    return (
        <div className="relative font-segoe text-slate-200 w-11/12 mx-auto">
            <div onClick={props.thumbneilClicked}>
                <img src={props.img} alt="salmon" />
                <img className="absolute top-3 right-3 w-8" src={playButton} alt="playbutton" />
            </div>
            <h3 className="text-sm py-3">{props.title}</h3>
            <p className="text-xs pb-12">{props.description}</p>
        </div>
    )
}

export default Card;