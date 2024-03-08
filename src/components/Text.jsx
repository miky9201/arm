import React from 'react';
import { motion } from "framer-motion";

function Text({ text, size, padding, textAlign, wSpacing, imgIndex }) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`
                pointer-events-none
                drop-shadow-md
                font-goldman 
                text-white uppercase 
                ${size} 
                ${padding} 
                ${textAlign} 
                ${wSpacing}
                ${imgIndex > 0 ? `-z-10` : `z-10`}`
            }>{text}
        </motion.p>
    );
}

export default Text;