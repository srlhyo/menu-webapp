import React from 'react'
import Popup from './components/Popup'
import {useState} from 'react';
import myVideo from '../videos/menu.mp4';


export default function App() {
    const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <header className="w-custom float-right">
        <div>
            <div className="border-b-2 pl-8 pt-7 pb-3">
                <h1 className="uppercase"><a href="#">sanahotels.com</a></h1>
            </div>
            <div className="border-b-4 pl-8 py-10">
                <img src="https://www.lisboa.epic.sanahotels.com/media/2118490/epic-sana-lisboa-logo.svg" alt="logo" />
            </div>
        </div>
    </header>
    <div className="clear-both"></div>
    
    <div className="w-10/12 mx-auto pt-20">
        <div className="border-b-2 py-12">
            <div className="flex">
                <h2 className="uppercase text-2xl mb-4 flex-1 text-hotel-corn-600">uddo</h2>
                <button className="uppercase text-xs" onClick={() => setButtonPopup(true)}>ver video</button>
            </div>
            <p>O esplendor da gastronomia japonesa no Algarve</p>
        </div>
        <div className="border-b-2 py-12">
            <div className="flex">
                <h2 className="capitalize text-2xl mb-4 flex-1 text-black text-opacity-70"><a href="#"><span>al quimia</span></a></h2>
                <span className="uppercase text-xs">video</span>
            </div>
            <p>Uma redefinicao de cozinha <span className="capitalize italic">fine dining</span>.</p>
        </div>
        <div className="border-b-2 py-12">
            <div className="flex">
                <h2 className="uppercase text-2xl mb-4 flex-1 text-black text-opacity-70"><a href="#">lima <span className="capitalize">cucina & cocktails</span></a></h2>
                <span className="uppercase text-xs">video</span>
            </div>
            <p>Sabores tradicionais de conforto italiano</p>
        </div>
        <div className="border-b-2 py-12">
            <div className="flex">
                <h2 className="uppercase text-2xl mb-4 flex-1 text-black text-opacity-70"><a href="#">abyad</a></h2>
                <span className="uppercase text-xs">video</span>
            </div>
            <p>Relaxe. desfrute. repita.</p>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <video width="600" autoplay="autoplay">
                <source src={myVideo} type="video/mp4" />
            </video>
      </ Popup>
    </div>
  )
}
