import React from 'react';
import { motion } from "framer-motion";
import logo from '../assets/images/logo2.svg';

function Logo({intro, width, padding, imgIndex, contactPageState}) {

    const isIntro = intro ? { opacity: { opacity: 0 }, duration: { duration: 4 }} : { opacity: { opacity: 0 }, duration: { duration: 1 }}


    return (
        <motion.img
            initial={isIntro.opacity}
            whileInView={{ opacity: 1 }}
            transition={isIntro.duration}
            // transition={{ type: "spring", duration: 0.8, bounce: 0.1 }}
            className={`
                delay-200
                pointer-events-none 
                ${width} 
                ${padding}
                ${imgIndex > 0 || contactPageState ? `-z-10` : `z-10`}
            `} 
            src={logo} 
            alt='logo-arm'
        />
    );
}

export default Logo;