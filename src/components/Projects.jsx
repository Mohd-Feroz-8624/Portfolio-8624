import Tilt from "react-parallax-tilt";
import { DiGithubBadge } from "react-icons/di";
import { motion } from "framer-motion";

function Projects() {
  const iconsVariant = (delay) => ({
    hidden: {
      x: -100,
      y: -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
        delay: delay,
      },
    },
  });
  const iconsVariantright = (delay) => ({
    hidden: {
      x: 100,
      y: -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
        delay: delay,
      },
    },
  });

  return (
    <div id="projects" className="my-20">
      <h1 className="font-bold text-white text-3xl">Projects</h1>
      <div className="flex flex-wrap gap-5 items-center justify-center my-10">
        
        
        <motion.div
          variants={iconsVariantright(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <Tilt
            className=" h-80 w-65 border-0 border-white rounded-2xl p-1 bg-neutral-800 shadow-md shadow-white"
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1}
          >
            <motion.div className=" ml-0  m-0 bg-transparent    rounded-xl shadow-xl  text-left text-black mb-0 ">
              <div>
                <img src="Chat-App.png" className="rounded-md lg:h-40" />
                <a href="https://github.com/Mohd-Feroz-8624/Chat-App">
                  <DiGithubBadge
                    size={30}
                    className="z-10 text-black absolute top-3 right-3 bg-white rounded-2xl "
                  />
                </a>
              </div>
              <div className=" rounded-xl  ">
                <p className="text-white font-bold m-1">Chat app</p>
                <p className="text-[11px] text-white ">
                  web chat application that enables users to connect and chat, app
                  offers real-time messaging  &
                  responsive interface. 💬🎥
                  <br></br>
                  <span className="text-red-200">Tech:</span>
                  <span className="font-bold m-2">
                    React,MongoDb,nodeJs express js and Stream ApI
                  </span>
                </p>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>{" "}
        <motion.div
          variants={iconsVariantright(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <Tilt
            className=" h-80 w-65 border-0 border-white rounded-2xl p-1 bg-neutral-800 shadow-md shadow-white"
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1}
          >
            <motion.div className=" ml-0  m-0 bg-transparent    rounded-xl shadow-xl  text-left text-black mb-0 ">
              <div>
                <img src="clock.png" className="rounded-md h-40 w-full" />
                <a href="https://github.com/Mohd-Feroz-8624/Analog-Clock">
                  <DiGithubBadge
                    size={30}
                    className="z-10 text-black absolute top-3 right-3 bg-white rounded-2xl "
                  />
                </a>
              </div>
              <div className=" rounded-xl  ">
                <p className="text-white font-bold m-1">
                  Mini Projects Collection: 🚀
                </p>
                <p className="text-[11px] text-white ">
                  🌤️ Weather app ,🧮 Calculator, ⏰ Clock, 💱
                  Currency Converter, 💰 Expense Tracker, 📝 Note App, 🧠 password Generator,
                   ✊🖐✌ Rock Paper Scissors, ❌⭕ Tic Tac
                  Toe.
                  <br></br>
                  <span className="text-red-200">Tech:</span>
                  <span className="font-bold m-2">
                    Html,Css,javascript,React js&API's
                  </span>
                </p>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
