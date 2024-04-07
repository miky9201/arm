import React from 'react';
import Text from './Text';

function NavButton({ text, onClick }) {


    return (
        <div onClick={onClick} className='flex justify-center pt-7 w-[40vw] cursor-pointer'> 
                <li><Text intro text={text} size='text-sm'/></li>
        </div>
    );
}

export default NavButton;