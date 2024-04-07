import React from 'react';

function BlurDiv({children}) {

    return (
        <>
            <div className='absolute h-full w-svw flex flex-col justify-start items-center overflow-y-hidden'> 
                {children}
            </div>
            
        </>
     
    );
}

export default BlurDiv;