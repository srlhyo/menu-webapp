import React from 'react';
import salmon from '../images/salmon.jpg';

function Card() {
    return (
        <div className="font-segoe text-slate-200 w-11/12 mx-auto">
            <img src={salmon} alt="salmon" />
            <h3 className="text-sm py-3">Salmon Tartare</h3>
            <p className="text-xs">Fresh salmon tartare with mango, topped with fresh fennel salad,
                crispy green onion and pistachio. GF | DF | FISH
            </p>
        </div>
    )
}

export default Card;