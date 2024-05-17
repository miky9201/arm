import React from "react";
import { motion } from "framer-motion";
import Text from "./Text";

function SlideTitle({ titleValue, firstImg }) {
  return (
    <motion.div
      className={`absolute h-full flex flex-col pointer-events-none justify-center "w-8/12"`}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={firstImg ? { scale: 1 } : { scale: 0.5, y: "45vh" }}
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
