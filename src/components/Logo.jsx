import React from 'react';
import logo from '../assets/images/logo.png';

function Logo({width, padding}) {
    return (
        <img className={`${width} ${padding}`} src={logo} alt='logo-arm'/>
    );
}

export default Logo;