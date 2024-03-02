import React from 'react';

function Slides({imageSrc}) { 
    return (
        <div 
        style={{
            backgroundImage: `url(${imageSrc})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center"
        }} 
        className='w-screen h-screen shrink-0 object-cover bg-no-repeat'>
        </div>
    )
}

export default Slides;