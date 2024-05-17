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
  // const isIntro = intro
  //   ? {
  //       initial: { opacity: 0 },
  //       animate: { opacity: 1 },
  //       duration: { delay: 0, duration: 4 },
  //     }
  //   : {
  //       initial: { opacity: 1 },
  //       animate: { opacity: 1 },
  //       duration: { delay: 0.25, duration: 1 },
  //     };

  return (
    <motion.div
      // initial={isIntro.initial}
      // animate={isIntro.animate}
      // transition={isIntro.duration}
      className={`
                z-10
                drop-shadow-2xl
                font-goldman 
                text-white uppercase 
                delay-100
                ${size} 
                ${padding} 
                ${textAlign} 
                ${wSpacing}
                ${
                  imgIndex > 0 || contactPageState
                    ? `-translate-y-52 opacity-0 duration-200 transition-all`
                    : `translate-y-0 opacity-100 duration-500 transition-all`
                }
            `}
    >
      {text}
    </motion.div>
  );
}

export default Text;
