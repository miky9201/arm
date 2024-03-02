import React from 'react';
import Logo from './components/Logo';
import Text from './components/Text';
import Navbar from './components/Navbar';
import BlurDiv from './components/BlurDiv';
import Slider from './components/Slider';
import Arrow from './components/Arrow';
import './App.css';

function App() {
  return (
    <BlurDiv>
      <Navbar />
      <Logo width='w-32' padding='pt-[35vh]' />
      <Text text='Agencement Bois' size='text-lg' padding='pt-[0vh]'/>
      <Text wSpacing='[word-spacing:1vw]' text='Appartement Evènementiel Restauration Retail' size='text-lg' padding='pt-[10vh]' textAlign='text-center'/>
      <Slider />
      <Arrow xDirection='right' yDirection='bottom' padding='p-7'/>
      <Arrow xDirection='left' yDirection='bottom' padding='p-7'/>
    </ BlurDiv>
  );
}

export default App;
