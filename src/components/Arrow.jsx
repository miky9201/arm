import React, { useEffect } from "react";
import rightArrow from "../assets/images/right-arrow.png";
import leftArrow from "../assets/images/left-arrow.png";
import sliderDB from "../assets/slidesArray.js";

function Arrow({
  xDirection,
  yDirection,
  imgIndex,
  setImgIndex,
  contactPageState,
  setContactPageState,
}) {
  const srcDirection = xDirection === "right" ? rightArrow : leftArrow;
  const xDir = xDirection === "right" ? "right-[4%]" : "left-[4%]";
  const yDir = yDirection === "bottom" ? "bottom-[4%]" : "top-[4%]";
  const displayCondition =
    (xDirection === "left" && imgIndex === 0) ||
    (xDirection === "right" && imgIndex === sliderDB.length - 1)
      ? "hidden"
      : "";

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event);
      if (event.key === "ArrowLeft" && imgIndex > 0) {
        // Appel de la fonction pour la touche gauche
        setImgIndex((position) => position - 1);
      } else if (event.key === "ArrowRight" && imgIndex < sliderDB.length - 1) {
        // Appel de la fonction pour la touche droite
        setImgIndex((position) => position + 1);
      } else if (event.key === "ArrowDown" && contactPageState === false) {
        // Appel de la fonction pour la touche bas
        setContactPageState(true);
      } else if (event.key === "ArrowUp" && contactPageState === true) {
        // Appel de la fonction pour la touche haute
        setContactPageState(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = (e) => {
    console.log(e);
    if (xDirection === "right" && imgIndex < sliderDB.length - 1) {
      setImgIndex((position) => position + 1);
    } else if (xDirection === "left" && imgIndex > 0) {
      setImgIndex((position) => position - 1);
    }
  };

  return (
    <img
      className={`absolute h-4 cursor-pointer pl-5 pr-5 ${xDir} ${yDir} ${displayCondition}`}
      src={srcDirection}
      alt="logo-arm"
      onClick={handleClick}
    />
  );
}

export default Arrow;
