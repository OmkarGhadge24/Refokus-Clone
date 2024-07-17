import { motion } from "framer-motion";
import React from "react";

function Marque({ imagesUrl, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div initial={{x: direction==="left"? "0" : "-100%"}} animate={{x: direction==="left"? "-100%" : "0"}} transition={{ease: "linear" , duration: 15 , repeat: Infinity}} className="flex flex-shrink-0 gap-20 py-6 pr-20">
        {imagesUrl.map((url, index) => (
          <img src={url} className="w-28 flex-shrink-0" key={index} />
        ))}
      </motion.div>
      <motion.div initial={{x: direction==="left"? "0" : "-100%"}} animate={{x: direction==="left"? "-100%" : "0"}} transition={{ease: "linear" , duration: 15 , repeat: Infinity}} className="flex flex-shrink-0 gap-20 py-6 pr-20">
        {imagesUrl.map((url, index) => (
          <img src={url} className="w-28 flex-shrink-0" key={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marque;
