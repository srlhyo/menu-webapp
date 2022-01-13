import React from 'react';
import Logo from './Logo';

function Header(props) {
    const [y, setY] = React.useState(window.scrollY);
    const header = React.useRef(null);
    const menunav = React.useRef(null);

const handleNavigation = React.useCallback(
  e => {
    const window = e.currentTarget;
    if (y < window.scrollY) {
      header.current.classList.add("-translate-y-48");
      header.current.classList.remove("h-48");
    //   menunav.current.classList.remove("top-48");
    } else if(window.scrollY < 50){
        header.current.classList.remove("-translate-y-48");
        header.current.classList.add("h-48");
        // menunav.current.classList.add("top-48");
    }
    
    setY(window.scrollY);
  }, [y]
);

React.useEffect(() => {
  setY(window.scrollY);
  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);

    return (
        <header ref={header} className="fixed w-full top-0 transition-all duration-1000 z-10">
            <div style={{backgroundImage: `url(${props.img})`}} className="h-48 bg-cover bg-center flex items-end justify-center">
                <Logo />  
            </div>
            <nav ref={menunav} className="text-sm bg-[#161616] w-full">
                <ul className="list-none flex justify-evenly items-center h-12 text-golden">
                    {[
                        ['Entradas'],
                        ['Peixe'],
                        ['Carne'],
                        ['Kids'],
                        ['Vinhos'],
                        ['Saladas'],
                    ].map(([title]) => (
                        <li><a className="py-3" href="#">{title}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;