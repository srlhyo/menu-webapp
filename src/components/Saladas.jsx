import React from 'react';
import Card from './Card';
import dish1 from '../images/salmon.jpg';
import dish2 from '../images/pexels-photo-5409025.jpeg';
import soup from '../images/soup.jpg';
import fishSoup from '../images/fish-soup.jpg';
import peasSoup from '../images/peas-soup.jpg';
import vegMeal from '../images/veg-meal.jpg';
import baconSoup from '../images/bacon-soup.jpg';
import videoDish from '/videos/menu.mp4';

function Saladas() {
    return(
        <section className="z-0">
                <h2 className="uppercase text-slate-200 text-lg font-acumin ml-6 mt-4">Saladas</h2>
                <Card img1={fishSoup} img2={soup} img3={peasSoup} img4={vegMeal} img5={baconSoup} video={null} videoPreview={dish2} title="Salmon Tartare"
                    description="Fresh salmon tartare with mango, topped with fresh fennel salad,
                crispy green onion and pistachio. GF | DF | FISH"/>
                <Card img1={soup} img2={fishSoup} img3={vegMeal} img4={peasSoup} img5={baconSoup} video={videoDish} videoPreview={dish1} title="Dish2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus turpis, tincidunt nec magna eget, ultrices ornare velit."
                />
                <Card img1={fishSoup} img2={soup} img3={peasSoup} img4={vegMeal} img5={baconSoup} video={null} videoPreview={dish2} title="Dish2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus turpis, tincidunt nec magna eget, ultrices ornare velit."
                />
                 <Card img1={peasSoup} img2={fishSoup} img3={vegMeal} img4={soup} img5={baconSoup} video={videoDish} videoPreview={dish1} title="Dish2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus turpis, tincidunt nec magna eget, ultrices ornare velit."
                />
                 <Card img1={fishSoup} img2={soup} img3={peasSoup} img4={vegMeal} img5={baconSoup} video={null} videoPreview={dish2} title="Dish2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus turpis, tincidunt nec magna eget, ultrices ornare velit."
                />
                <Card img1={baconSoup} img2={fishSoup} img3={vegMeal} img4={peasSoup} img5={soup} video={videoDish} videoPreview={dish1} title="Salmon Tartare"
                    description="Fresh salmon tartare with mango, topped with fresh fennel salad,
                crispy green onion and pistachio. GF | DF | FISH"/>
            </section>
    )
}

export default Saladas;