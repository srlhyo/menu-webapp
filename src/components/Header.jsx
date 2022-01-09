import React from 'react';
import Logo from './Logo';

function Header(props) {
    return (
        <div style={{backgroundImage: `url(${props.img})`}} className="h-48 bg-cover bg-center flex justify-center">
            <Logo />
            {console.log(props.img)};
        </div>
       
    )
}

export default Header;