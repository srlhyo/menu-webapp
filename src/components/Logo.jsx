import React from 'react';
import applogo from '../images/logo.png';

function Logo() {
    return (
        <img className="w-28 my-0 mx-auto sticky z-[3] top-0 pt-[13px] mb-[-30px]" src={applogo} alt="logo" />
    )
}

export default Logo;