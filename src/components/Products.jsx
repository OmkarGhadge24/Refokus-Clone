import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14-p-1080.webp",
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
    },
    {
      title: "layout land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      image:
        "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10-p-1080.jpg",
    },
    {
      title: "maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
    },
    {
      title: "like magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41bfccf2d0e77e130b210_Like%20Magic%20-%20mobile-p-1080.png",
    },
    {
      title: "rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8-p-1080.jpg",
    },
    {
      title: "jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: true,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc2e2943eeaaaf5d8961a7_6-p-1080.jpg",
    },
    {
      title: "yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models.",
      live: true,
      case: true,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41cd5ec5fbe7d560d053f_Yahoo%20-%20mobile.png",
    },
    {
      title: "rocket chat",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      live: true,
      case: true,
      image:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41c24277ead62ff9b0d1f_Rocketchat%20-%20mobile-p-1080.png",
    },
  ];
  const [pos, setPos] = useState(0);
  const moveElement = (val) => {
    setPos(val * 16);
  };
  return (
    <div className="mt-24 relative">
      {products.map((elem, index) => (
        <Product val={elem} index={index} key={index} move={moveElement} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="absolute w-[22rem] h-[16rem] left-[45%] rounded-2xl overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[0].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[1].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[2].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[3].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[4].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[5].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[6].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[7].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[8].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${products[9].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
