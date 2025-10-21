import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiHtml5, DiPython } from "react-icons/di";
import { RiJavascriptLine } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { motion } from "framer-motion";
function Technologies() {
  const iconsvariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      id="technologies"
      className="border-b-2 border-neutral-800 lg:h-70 my-25!"
    >
      <h2 className="text-4xl">
        Technolo<span className="text-neutral-400 text-3xl">gies</span>
      </h2>
      <div className=" my-10 flex flex-wrap items-center justify-center gap-4 ">
        <motion.div
          variants={iconsvariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiHtml5 className="text-5xl text-red-500 " />
        </motion.div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-5xl text-blue-600" />
        </div>

        <motion.div
          variants={iconsvariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconsvariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-5xl " />
        </motion.div>
        <motion.div
          variants={iconsvariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-5xl text-green-400 " />
        </motion.div>
        <motion.div
          variants={iconsvariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className="text-5xl text-cyan-600 " />
        </motion.div>
        <motion.div
          variants={iconsvariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsvariant(1.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiPython className="text-5xl " />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Technologies;
