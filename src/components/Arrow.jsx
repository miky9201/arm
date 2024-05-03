import React from "react";
import rightArrow from "../assets/images/right-arrow.png";
import leftArrow from "../assets/images/left-arrow.png";
import sliderDB from "../assets/slidesArray.js";

function Arrow({ xDirection, yDirection, padding, imgIndex, setImgIndex }) {
  const srcDirection = xDirection === "right" ? rightArrow : leftArrow;
  const xDir = xDirection === "right" ? "right-[4%]" : "left-[4%]";
  const yDir = yDirection === "bottom" ? "bottom-[4%]" : "top-[4%]";
  const displayCondition =
    (xDirection === "left" && imgIndex === 0) ||
    (xDirection === "right" && imgIndex === sliderDB.length - 1)
      ? "hidden"
      : "";

  const handleClick = () => {
    if (xDirection === "right" && imgIndex < sliderDB.length - 1) {
      setImgIndex((position) => position + 1);
    } else if (xDirection === "left" && imgIndex > 0) {
      setImgIndex((position) => position - 1);
    }
  };

  return (
    <img
      className={`absolute
                cursor-pointer
                ${padding} 
                ${xDir} 
                ${yDir}  
                ${displayCondition}`}
      src={srcDirection}
      alt="logo-arm"
      onClick={handleClick}
    />
  );
}

export default Arrow;
