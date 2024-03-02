import React, { useState, useEffect }  from 'react';

function BlurDiv({children}) {
    const [isBlur, setisBlur] = useState("blur-md")
    const [isOpacity, setisOpacity] = useState("opacity-0")

//  eslint-disable-next-line
    useEffect(() => {
        setisBlur("blur-none");  
        setisOpacity("opacity-100");  
    });

    return (
        <div className={`h-svh flex flex-col justify-start items-center ${isBlur} ${isOpacity} ease-out duration-[4000ms]`}> 
            {children}
        </div>
    );
}

export default BlurDiv;