import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Text from "./components/Text";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import SlideTitle from "./components/SlideTitle.jsx";

import sliderDB from "./assets/slidesArray.js";

function App() {
  const [imgIndex, setImgIndex] = useState(0);
  const [contactPageState, setContactPageState] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [firstImg, setFirstImg] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setTitleValue(sliderDB[imgIndex].title);
    setFirstImg(sliderDB[imgIndex].firstImage);
  }, [imgIndex]);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  return (
    <div className="absolute h-full w-svw flex flex-col justify-start items-center overflow-y-hidden">
      <Slider imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <Navbar
        contactPageState={contactPageState}
        setContactPageState={setContactPageState}
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
      />
      <div
        className={`${
          firstRender ? `opacity-0` : `opacity-100`
        } duration-[6000ms] flex flex-col justify-start items-center pointer-events-none`}
      >
        <Logo
          intro
          width="w-40"
          padding="pt-[35vh]"
          imgIndex={imgIndex}
          contactPageState={contactPageState}
        />
        <Text
          intro
          text="Agencement Bois"
          size="text-lg"
          padding="pt-[0vh]"
          imgIndex={imgIndex}
          contactPageState={contactPageState}
        />
        <Text
          intro
          text="Appartement Evènementiel Restauration Retail"
          size="text-lg"
          padding="pt-[10vh]"
          wSpacing="[word-spacing:1vw]"
          textAlign="text-center"
          imgIndex={imgIndex}
          contactPageState={contactPageState}
        />
      </div>
      <SlideTitle titleValue={titleValue} firstImg={firstImg} />
      <Contact contactPageState={contactPageState} />
    </div>
  );
}

export default App;
