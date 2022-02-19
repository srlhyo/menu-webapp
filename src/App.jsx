import React from 'react'
import Header from './components/Header';
import Logo from './components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import restaurant from './images/main.jpg';
import scrollIcon from './images/Top.png';
import Section from './components/Section';

// css
var scrollStyle = {
    "scrollbarWidth": "none"
}

export default function App() {

    const [section, setSection] = React.useState("Entradas");

    const header = React.createRef();
    // const scrollTopIcon = React.createRef();
    const [scrollTopIcon,setScrollTopIcon] = React.useState(false);
    const navLinks = [
        'Entradas',
        'Peixe',
        'Carne',
        'Kids',
        'Vinhos',
        'Saladas'];

        function getSectionName(title) {
            setSection(title);
        }
    
    function hideScrollIcon() {
        if (window.pageYOffset > window.innerHeight/2) {
                setScrollTopIcon(true);
            } else {
                setScrollTopIcon(false);
            }
    }
    
    // const [buttonPopup, setButtonPopup] = useState(false);
    function scrollTop(){
        header.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

    function scrollNav() {
        const ele = document.getElementById('nav');
        ele.scrollTo({
            left: 1000,
            behavior: 'smooth'
          });
    }

    React.useEffect(() => {
        window.addEventListener('scroll', hideScrollIcon);
      }, []);
    // document.addEventListener('scroll', hideScrollIcon);

    return (
        <div className="relative w-full max-w-screen-xl my-0 mx-auto bg-[#161616] h-full font-segoe">
            <Header img={restaurant} ref={header} />
            <Logo />
            <nav className="relative text-sm bg-[#161616] w-full sticky top-0 z-[1] pt-[45px] font-bold pl-[12px]" >
                <ul style={scrollStyle} className="w-95% list-none flex items-center h-12 text-golden w-full text-[16px] rounded-[150px] justify-start mt-[14px] py-[8px] pl-[10px] pr-[1px] overflow-y-auto ovelflow-x-hidden scrollbar " id="nav">
                    {navLinks.map(title => (
                        <li key={navLinks.indexOf(title)} className="pt-[1px] pr-[12px] pb-[1px] pl-[12px] rounded-[19px] border border-[#333] bg-[#333] mr-[2px]"><a className="py-3" onClick={() => getSectionName(title)} >{title}</a></li>
                    ))}
                     <FontAwesomeIcon icon={faAnglesRight} className="text-golden absolute right-2 bottom-4 mr-[2px]" onClick={scrollNav} />
                </ul>
            </nav>
            <Section section={section} />
            <div className="border border-transparent rounded-full fixed bottom-4 right-4 w-[50px] h-[50px] overflow-y-hidden flex items-center justify-center">
            <img className={"w-full backdrop-blur " + (scrollTopIcon ? "opacity-1" : "opacity-0")} src={scrollIcon} alt="scroll top icon" onClick={scrollTop} />
            </div>
        </div>
    )
}
