import React from "react";
import Text from "./Text";

function Slides({ imageSrc, imageTitle, imageDesc }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="
                w-screen 
                h-screen 
                shrink-0 
                object-cover 
                bg-no-repeat 
                flex flex-col 
                justify-center 
                items-center
            "
    >
      <Text
        text={imageTitle}
        size="text-3xl"
        padding="pt-[0vh]"
        textAlign="text-center"
      />
      <Text
        text={imageDesc}
        size="text-lg"
        padding="pt-[0vh]"
        textAlign="text-center"
      />
    </div>
  );
}

export default Slides;
