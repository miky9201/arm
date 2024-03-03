import React, { useState } from 'react';
import { motion, useMotionValue } from "framer-motion";
import Slides from './Slides';
import sliderDB from '../assets/slidesArray.js';

const DRAG_BUFFER = 50;

function Slider({imgIndex, setImgIndex}) {

    const [dragging, setDragging] = useState(false); 
    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true)
        console.log(dragging)
    }

    const onDragEnd = () => {
        setDragging(false)

        const x = dragX.get()

        if (x <= -DRAG_BUFFER && imgIndex < sliderDB.length-1) {
            setImgIndex((pv) => pv + 1)
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1)
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
        </div>
    );
}

export default Slider;