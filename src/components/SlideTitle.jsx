import React from "react";
import { animate, motion } from "framer-motion";
import Text from "./Text";

function SlideTitle({ titleValue, firstImg }) {
  const isFirst = firstImg
    ? {
        justify: "justify-center",
        size: "text-3xl",
        width: "w-11/12",
        padding: "pt-[0vh] pb-[0vh]",
      }
    : {
        justify: "justify-end",
        size: "text-md",
        width: "w-8/12",
        padding: "pt-[0vh] pb-[6vh]",
      };
  return (
    <motion.div
      className={`absolute h-full flex flex-col pointer-events-none justify-center "w-8/12"`}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={firstImg ? { scale: 1 } : { scale: 0.5, y: "41.5vh" }}
        transition={{ delay: 0, duration: 0.3 }}
      >
        <Text
          text={titleValue}
          size="text-3xl"
          padding="pt-[0vh] pb-[0vh]"
          textAlign="text-center"
        />
      </motion.div>
    </motion.div>
  );
}

export default SlideTitle;
