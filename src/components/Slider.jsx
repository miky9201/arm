import React, { useState } from 'react';
import { motion, useMotionValue } from "framer-motion";
import Slides from './Slides';
import Arrow from './Arrow';

import sliderDB from '../assets/slidesArray.js';

const DRAG_BUFFER = 50;

function Slider({imgIndex, setImgIndex}) {
    // eslint-disable-next-line
    const [moving, setMoving] = useState(false); 
    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setMoving(true)
    }

    const onDragEnd = () => {
        setMoving(false)

        const x = dragX.get()

        if (x <= -DRAG_BUFFER && imgIndex < sliderDB.length-1) {
            setImgIndex((position) => position + 1)
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((position) => position - 1)
        }
    }

    return (
        <div className='absolute h-svh w-svw bg-black -z-10 overflow-hidden'>
            <motion.div 
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                style={{
                    x: dragX
                }}
                animate={{
                    translateX: `-${imgIndex * 100}%`
                }}
                transition={{ type: "spring", duration: 0.7, bounce: 0.1 }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className='flex items-center cursor-grab active:cursor-grabbing'>
                {sliderDB.map((slide) => {
                    return (    
                        <Slides 
                            key={slide.id} 
                            imageSrc={slide.source} 
                            imageTitle={slide.title} 
                            imageDesc={slide.description}
                        />
                    )
                })} 
            </motion.div>
            <Arrow xDirection='right' yDirection='bottom' padding='p-7' imgIndex={imgIndex} setImgIndex={setImgIndex}/>
            <Arrow xDirection='left' yDirection='bottom' padding='p-7' imgIndex={imgIndex} setImgIndex={setImgIndex}/>
        </div>
    );
}

export default Slider;