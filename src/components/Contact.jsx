import React from 'react';
import { motion } from "framer-motion";
import Text from './Text';
import Logo from './Logo';

function Contact({contactPageState}) {



  return (
    <motion.div 
      className={`
        absolute 
        h-svh 
        w-svw 
        flex 
        flex-col 
        justify-center 
        items-center 
        bg-gray-950 
        
      `}
      initial={{y:"100%"}}
      animate={contactPageState ? {y:"0%"} : {y:"100%"}}
      transition={{delay: 0, duration: .5 }}
    >
       <Logo 
        width='w-36' 
        padding='pt-[0vh]'
      />
      <Text
        text='07.78.70.08.70' 
        size='text-md' 
        padding='pt-[5vh]' 
        textAlign='text-center'
      />
      <Text
        text='contact@arm-paris.fr' 
        size='text-md' 
        padding='pt-[5vh]' 
        textAlign='text-center'
      />
      <Text
        text='2 avenue du chateau, 95000 Argenteuil' 
        size='text-md' 
        padding='pt-[5vh]' 
        textAlign='text-center'
      />
    </motion.div>
  );
}

export default Contact;
