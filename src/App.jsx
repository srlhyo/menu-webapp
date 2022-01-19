import React from 'react'
import Header from './components/Header';
import Card from './components/Card';
import Logo from './components/Logo';
import dish1 from './images/salmon.jpg';
import dish2 from './images/pexels-photo-5409025.jpeg';
// import Popup from './components/Popup';
import restaurant from './images/main.jpg';
import scrollIcon from './images/Top.png';

// import {useState} from 'react';
// import myVideo from '../videos/menu.mp4';

// css
var scrollStyle = {
    "scrollbarWidth": "none"
}

export default function App() {
    const header = React.createRef();
    // const scrollTopIcon = React.createRef();
    const [scrollTopIcon,setScrollTopIcon] = React.useState(true);
    const navLinks = [
        'Entradas',
        'Peixe',
        'Carne',
        'Kids',
        'Vinhos',
        'Saladas'];
    
    function hideScrollIcon() {
        if (window.scrollY < document.body.scrollHeight/3) {
                setScrollTopIcon(false);
            } else {
                setScrollTopIcon(true);
            }
        // if (window.scrollY < document.body.scrollHeight/2) {
        //     scrollTopIcon.current.classList.add("opacity-0");
        // } else {
        //     scrollTopIcon.current.classList.remove("opacity-0");
        // }
    }
    
    // const [buttonPopup, setButtonPopup] = useState(false);
    function scrollTop(){
        header.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

    document.addEventListener('scroll', hideScrollIcon);

    return (
        <div className="relative w-full max-w-screen-xl my-0 mx-auto bg-[#161616] h-full font-segoe">
            <Header img={restaurant} ref={header} />
            <Logo />
            <nav className="text-sm bg-[#161616] w-full sticky top-0 z-[1] pt-[45px] font-bold pl-[12px]">
                <ul style={scrollStyle} className="list-none flex items-center h-12 text-golden w-full text-[16px] rounded-l-[22px] justify-start mt-[14px] py-[8px] px-[10px] bg-[#333] overflow-y-auto ovelflow-x-hidden scrollbar ">
                    {navLinks.map(title => (
                        <li key={navLinks.indexOf(title)} className="pt-[5px] pr-[8px] pb-[4px] pl-[8px] rounded-[19px] border border-[#444] bg-[#181818]"><a className="py-3" href="#">{title}</a></li>
                    ))}
                </ul>
            </nav>
            <section className="z-0">
                <h2 className="uppercase text-slate-200 text-lg font-acumin ml-6 mt-4">Peixe</h2>
                <Card img={dish1} title="Salmon Tartare"
                    description="Fresh salmon tartare with mango, topped with fresh fennel salad,
                crispy green onion and pistachio. GF | DF | FISH"/>
                <Card img={dish2} title="Dish2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus turpis, tincidunt nec magna eget, ultrices ornare velit."
                />
                <Card img={dish1} title="Salmon Tartare"
                    description="Fresh salmon tartare with mango, topped with fresh fennel salad,
                crispy green onion and pistachio. GF | DF | FISH"/>
            </section>
            <img className={"fixed bottom-4 right-4 w-10 " + (scrollTopIcon ? "opacity-1" : "opacity-0")} src={scrollIcon} alt="scroll top icon" onClick={scrollTop} />
            {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
             <video width="600" autoplay="autoplay">
                 <source src={myVideo} type="video/mp4" />
             </video>
          </ Popup> */}
        </div>
    )
    //     const [buttonPopup, setButtonPopup] = useState(false);
    //   return (
    //     <div className="App">
    //       <header className="w-custom float-right">
    //         <div>
    //             <div className="border-b-2 pl-8 pt-7 pb-3">
    //                 <h1 className="uppercase"><a href="#">sanahotels.com</a></h1>
    //             </div>
    //             <div className="border-b-4 pl-8 py-10">
    //                 <img src="https://www.lisboa.epic.sanahotels.com/media/2118490/epic-sana-lisboa-logo.svg" alt="logo" />
    //             </div>
    //         </div>
    //     </header>
    //     <div className="clear-both"></div>

    //     <div className="w-10/12 mx-auto pt-20">
    //         <div className="border-b-2 py-12">
    //             <div className="flex">
    //                 <h2 className="uppercase text-2xl mb-4 flex-1 text-hotel-corn-600">uddo</h2>
    //                 <button className="uppercase text-xs" onClick={() => setButtonPopup(true)}>ver video</button>
    //             </div>
    //             <p>O esplendor da gastronomia japonesa no Algarve</p>
    //         </div>
    //         <div className="border-b-2 py-12">
    //             <div className="flex">
    //                 <h2 className="capitalize text-2xl mb-4 flex-1 text-black text-opacity-70"><a href="#"><span>al quimia</span></a></h2>
    //                 <span className="uppercase text-xs">video</span>
    //             </div>
    //             <p>Uma redefinicao de cozinha <span className="capitalize italic">fine dining</span>.</p>
    //         </div>
    //         <div className="border-b-2 py-12">
    //             <div className="flex">
    //                 <h2 className="uppercase text-2xl mb-4 flex-1 text-black text-opacity-70"><a href="#">lima <span className="capitalize">cucina & cocktails</span></a></h2>
    //                 <span className="uppercase text-xs">video</span>
    //             </div>
    //             <p>Sabores tradicionais de conforto italiano</p>
    //         </div>
    //         <div className="border-b-2 py-12">
    //             <div className="flex">
    //                 <h2 className="uppercase text-2xl mb-4 flex-1 text-black text-opacity-70"><a href="#">abyad</a></h2>
    //                 <span className="uppercase text-xs">video</span>
    //             </div>
    //             <p>Relaxe. desfrute. repita.</p>
    //         </div>
    //       </div>
    //       <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    //             <video width="600" autoplay="autoplay">
    //                 <source src={myVideo} type="video/mp4" />
    //             </video>
    //       </ Popup>
    //     </div>

}
