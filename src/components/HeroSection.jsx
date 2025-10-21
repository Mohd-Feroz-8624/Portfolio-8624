import React from "react";


import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

import { TbBrandLeetcode } from "react-icons/tb";
// import resume from "../assets/resume.pdf";
import { delay, motion, transform } from "framer-motion";
function HeroSection() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col  items-center lg:items-start">
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 1 }}
              className="pb-16   text-2xl! font-thin! tracking-tight lg:text-5xl! lg:mt-16 -mb-8 lg:-mb-5 "
            >
              Mohd Feroz
            </motion.h1>{" "}
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-linear-to-r from-red-500 via-slate-500 to-purple-400 bg-clip-text  tracking-tight text-transparent text-xl lg:text-4xl mb-8"
            >
              Mern stack developer
            </motion.p>
            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="text-left text-sm -mt-5 lg:text-md1 lg:mt-0 "
            >
              MERN Stack Developer skilled in building full-stack web
              applications using MongoDB, Express.js, React, and Node.js.
              Passionate about creating efficient, scalable, and user-friendly
              digital solutions.
            </motion.p>
            <div className="flex gap-5 my-10 lg:ml-19">
              <a
                href="https://github.com/Mohd-Feroz-8624"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithubBadge
                  size={30}
                  className="text-black bg-white rounded-3xl"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-feroz-8543482a6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} className="" />
              </a>
              <a
                href="https://leetcode.com/u/mohd_Feroz-8624/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandLeetcode
                  size={30}
                  className="text-white bg-yellow-500 bg-opacity-10! rounded-3xl"
                />
              </a>
            </div>
            <div>
              <a
                href="Mohamed_Feroz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 lg:ml-15 px-7 py-2 rounded hover:bg-blue-700 text-white!"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-60 w-60   mt-10 rounded-2xl lg:ml-65 lg:mt-15"
              src="heroImg.jpeg"
              alt="heroimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
