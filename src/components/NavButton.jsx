import React from 'react';
import Text from './Text';

function NavButton({text, onClick}) {

    const handleClick = () => {
        console.log("clicked")
    }

    return (
        <div onClick={handleClick} className='flex justify-center pt-7 w-[40vw] cursor-pointer'> 
                <li><Text text={text} size='text-sm'/></li>
        </div>
    );
}

export default NavButton;