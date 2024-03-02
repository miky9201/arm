import React from 'react';
import rightArrow from '../assets/images/right-arrow.png';
import leftArrow from '../assets/images/left-arrow.png';


function Arrow({xDirection, yDirection, padding, onClick}) {
    const srcDirection =  xDirection === 'right' ? rightArrow : leftArrow;
    const xDir =  xDirection === 'right' ? 'right-[3%]' : 'left-[3%]';
    const yDir =  yDirection === 'bottom' ? 'bottom-[3%]' : 'top-[3%]';

    return (
        <img className={`absolute ${padding} ${xDir} ${yDir} cursor-pointer`} src={srcDirection} onClick={onClick} alt='logo-arm'/>
    )
}

export default Arrow;