import React from "react";
import Text from "./Text";

function Slides({ imageSrc, imageTitle, imageDesc, firstImage }) {
  const isFirst = firstImage
    ? { justify: "justify-center", size: "text-3xl" }
    : { justify: "justify-end", size: "text-md" };
  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-screen h-screen shrink-0 object-cover bg-no-repeat flex flex-col ${isFirst.justify} items-center`}
    >
      {/* <Text
        text={imageTitle}
        size={isFirst.size}
        padding="pt-[0vh] pb-[6vh]"
        textAlign="text-center"
      />
      <Text
        text={imageDesc}
        size="text-lg"
        padding="pt-[0vh]"
        textAlign="text-center"
      /> */}
    </div>
  );
}

export default Slides;
