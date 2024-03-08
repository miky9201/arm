import React from 'react';
import NavButton from './NavButton';

function Navbar() {

    return (
        <ul className=' flex justify-between w-full max-w-5xl'>
        
       
                <NavButton text='Home'/>
          
            <NavButton text='Projets'/>
         
                <NavButton text='Contact'/>
          
        </ul>
    );
}

export default Navbar;