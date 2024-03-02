import React from 'react';
import Text from './Text';

function NavButton({text}) {
    return (
        <div className='flex justify-center pt-7  w-[40vw]'> 
                <li><Text text={text} size='text-sm'/></li>
        </div>
    );
}

export default NavButton;