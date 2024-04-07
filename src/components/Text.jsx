import React from "react";
import { motion } from "framer-motion";

function Text({
  intro,
  text,
  size,
  padding,
  textAlign,
  wSpacing,
  imgIndex,
  contactPageState,
}) {
  const isIntro = intro
    ? { opacity: { opacity: 0 }, transition: { delay: 0, duration: 4 } }
    : { opacity: { opacity: 0 }, transition: { delay: 0.25, duration: 1 } };

  return (
    <motion.p
      initial={isIntro.opacity}
      whileInView={{ opacity: 1 }}
      transition={isIntro.transition}
      className={`
                pointer-events-none
                drop-shadow-2xl
                font-goldman 
                text-white uppercase 
                delay-200
                ${size} 
                ${padding} 
                ${textAlign} 
                ${wSpacing}
                ${imgIndex > 0 || contactPageState ? `-z-10` : `z-10`}
            `}
    >
      {text}
    </motion.p>
  );
}

export default Text;
