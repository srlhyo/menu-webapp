import React from 'react';
import Card from './Card';
import dish1 from '../images/salmon.jpg';
import dish2 from '../images/pexels-photo-5409025.jpeg';

function Carne() {
    return(
        <section className="z-0">
                <h2 className="uppercase text-slate-200 text-lg font-acumin ml-6 mt-4">Carne</h2>
                <Card img={dish1} title="Salmon Tartare"
                    description="Fresh salmon tartare with mango, topped with fresh fennel salad,
                crispy green onion and pistachio. GF | DF | FISH"/>
                <Card img={dish2} title="Dish2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus turpis, tincidunt nec magna eget, ultrices ornare velit."
                />
                <Card img={dish1} title="Dish2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus turpis, tincidunt nec magna eget, ultrices ornare velit."
                />
            </section>
    )
}

export default Carne;