import React from 'react';
import Logo from './Logo';

function Header(props) {
    const [y, setY] = React.useState(window.scrollY);
    const header = React.useRef(null);

const handleNavigation = React.useCallback(
  e => {
    const window = e.currentTarget;
    if (y < window.scrollY) {
      header.current.classList.remove("h-48");
      header.current.classList.add("h-0");
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
        <header>
            <div ref={header} style={{backgroundImage: `url(${props.img})`}} className="h-48 bg-cover bg-center flex items-end justify-center transition-all duration-1000">
                <Logo />  
            </div>
            <nav className="text-sm">
                <ul className="list-none flex justify-evenly text-golden">
                    {[
                        ['Entradas'],
                        ['Peixe'],
                        ['Carne'],
                        ['Kids'],
                        ['Vinhos'],
                        ['Saladas'],
                    ].map(([title]) => (
                        <li className="mt-3 mb-6"><a className="py-3" href="#">{title}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;