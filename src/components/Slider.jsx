import React from 'react';
import { motion } from "framer-motion";
import Slides from './Slides';
import slidesArray from '../assets/slidesArray.js';


function Slider() {
    return (
        <div className='absolute h-svh w-svw bg-black -z-10 overflow-hidden'>
            <motion.div 
            drag="x"
            dragConstraints={{
                left: 0,
                right: 0
            }}
            animate={{
                translateX: `-${imgIndex * 100}%`
            }}
            className='flex items-center cursor-grab active:cursor-grabbing'>
                {slidesArray.map((imageSrc, index) => {
                    return (
                        <Slides key={index} imageSrc={imageSrc} />
                    )
                })} 
            </motion.div> 
        </div>
    );
}

export default Slider;