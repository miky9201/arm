import React from "react";
import { motion } from "framer-motion";
import Text from "./Text";
import Logo from "./Logo";

function Contact({ contactPageState }) {
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
        bg-slate-950 
        divide-y
        md:divide-x
        md:divide-y-0
        md:flex-row
      `}
      initial={{ y: "100%" }}
      animate={contactPageState ? { y: "0%" } : { y: "100%" }}
      transition={{ delay: 0, duration: 0.5 }}
    >
      <div className="w-9/12 h-1/2 flex flex-col justify-center items-center p-4 md:p-20">
        <Logo width="w-[25%]" padding="pt-[0vh]" />
        <Text
          text="07.78.70.08.70"
          size="text-sm"
          padding="pt-[4vh]"
          textAlign="text-center"
        />
        <Text
          text="contact@arm-paris.fr"
          size="text-sm"
          padding="pt-[4vh]"
          textAlign="text-center"
        />
        <Text
          text="79 rue Rateau 93120 La Courneuve"
          size="text-sm"
          padding="pt-[4vh]"
          textAlign="text-center"
        />
      </div>
      <div className="w-9/12 h-1/2 flex flex-col justify-center items-center p-2 md:p-20">
        <Text
          text="Appartement, Résidence, Evènementiel, Restauration, Retail"
          size="text-sm"
          padding="pt-[2vh]"
          textAlign="text-center"
        />
        <Text
          text="Réalisation des plans 2D et 3D"
          size="text-sm"
          padding="pt-[2vh]"
          textAlign="text-center"
        />
        <Text
          text="Fabrication dans notre atelier parisien suivant les règles de l’art"
          size="text-sm"
          padding="pt-[2vh]"
          textAlign="text-center"
        />
        <Text
          text="Livraison et pose chez nos clients"
          size="text-sm"
          padding="pt-[2vh]"
          textAlign="text-center"
        />
      </div>
    </motion.div>
  );
}

export default Contact;
