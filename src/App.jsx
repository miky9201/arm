import React, { useState } from 'react';
import Logo from './components/Logo';
import Text from './components/Text';
import Navbar from './components/Navbar';
import BlurDiv from './components/BlurDiv';
import Slider from './components/Slider';
import Arrow from './components/Arrow';
import './App.css';

function App() {

  const [imgIndex, setImgIndex] = useState(0);

  return (
    <BlurDiv>
      <Navbar />
      <Logo 
        width='w-32' 
        padding='pt-[35vh]' 
        imgIndex={imgIndex} 
      />
      <Text 
        text='Agencement Bois' 
        size='text-lg' 
        padding='pt-[0vh]'
        imgIndex={imgIndex} 
      />
      <Text 
        text='Appartement Evènementiel Restauration Retail' 
        size='text-lg' 
        padding='pt-[10vh]' 
        wSpacing='[word-spacing:1vw]' 
        textAlign='text-center'
        imgIndex={imgIndex}
      />
      <Slider imgIndex={imgIndex} setImgIndex={setImgIndex}/>
      <Arrow xDirection='right' yDirection='bottom' padding='p-7'/>
      <Arrow xDirection='left' yDirection='bottom' padding='p-7'/>
    </ BlurDiv>
  );
}

export default App;
