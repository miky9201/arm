import React from 'react';
import { motion } from "framer-motion";
import logo from '../assets/images/logo.png';

function Logo({width, padding, imgIndex}) {
    return (
        <motion.img
            className={`${width} ${padding} ${imgIndex > 0 ? `-z-10` : `z-10`}`} 
            src={logo} 
            alt='logo-arm'
            
        />
    );
}

export default Logo;