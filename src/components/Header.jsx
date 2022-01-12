import React from 'react';
import Logo from './Logo';

function Header(props) {
    return (
        <header>
            <div style={{backgroundImage: `url(${props.img})`}} className="h-48 bg-cover bg-center flex items-end justify-center">
                <Logo />
                {console.log(props.img)};
                
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