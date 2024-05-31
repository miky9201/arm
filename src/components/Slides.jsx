import React from "react";

function Slides({ imageSrc, firstImage }) {
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
    ></div>
  );
}

export default Slides;
