import React from "react";

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
  return (
    <div
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
    </div>
  );
}

export default Text;
