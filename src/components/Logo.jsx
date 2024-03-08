import React from 'react';
import { motion } from "framer-motion";
import logo from '../assets/images/logo.png';

function Logo({width, padding, imgIndex}) {
    const animateValues = imgIndex > 0 ? { y: "54vh", scale: 0.6 } : { y: 0, scale: 1 }

    return (
        <motion.img
            animate={animateValues}
            transition={{ type: "spring", duration: 0.8, bounce: 0.1 }}
            className={`pointer-events-none ${width} ${padding}`} 
            src={logo} 
            alt='logo-arm'
            
        />
    );
}

export default Logo;