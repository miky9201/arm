import React from "react";
import logo from "../assets/images/logo.svg";

function Logo({ width, padding, imgIndex, contactPageState }) {
  return (
    <img
      className={`
                z-10
                delay-100
                ${width} 
                ${padding}
                ${
                  imgIndex > 0 || contactPageState
                    ? "-translate-y-52 opacity-0 duration-200 transition-all"
                    : "translate-y-0 opacity-100 duration-500 transition-all"
                }
            `}
      src={logo}
      alt="logo-arm"
    />
  );
}

export default Logo;
