import { motion } from "framer-motion";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function Card({ width, part1, part2, hover="false" }) {
  const data = [
    { title: "Up Next: News", heading: "Insights and behind the scenes" },
    { title: "Get In Touch", heading: "Let's get to it together." },
  ];
  return (
    <motion.div
    whileHover={{backgroundColor: hover==="true" ? "#7443FF" : "#3E3E46", padding: "20px"}}
      className={`bg-zinc-900 p-4 rounded-xl ${width} min-h-[24rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex flex-col">
          {part1 === false ? (
            <>
              <div className="w-full flex items-center justify-between">
                <h3 className="text-sm text-zinc-400">{data[0].title}</h3>
                <HiArrowLongRight className="text-white" />
              </div>
              <h1 className="text-2xl font-medium mt-6">{data[0].heading}</h1>
            </>
          ) : (
            <>
              <div className="w-full flex justify-between">
                <h3 className="text-sm text-zinc-400">{data[1].title}</h3>
                <HiArrowLongRight className="text-white" />
              </div>
              <h1 className="text-2xl font-medium mt-6">{data[1].heading}</h1>
            </>
          )}
        </div>
      </div>
      <div className="w-full">
        {part1 && (
          <>
            <h1 className="text-7xl font-semibold tracking-tight">
              Start a Project
            </h1>
            <button className="rounded-full py-1 px-4 mt-4 border-[1px] border-zinc-400">
              Contact us
            </button>
          </>
        )}
        {part2 && (
          <p className="text-[12px] text-zinc-500">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
