import React from "react";
import { motion } from "framer-motion";
function AboutMe() {
  return (
    <div id="about" className="my-10">
      <h1>
        About <span className="text-neutral-500">me</span>
      </h1>
      <div className="flex  flex-col mt-10 lg:flex-row border-b-2 border-neutral-900 pb-10 ">
        <div className=" flex  w-full lg:w-1/2 lg:-ml-50 mt-0">
          <motion.img
            whileInView={{ x: 1, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="  h-60 w-90 ml-0 rounded-2xl lg:ml-65 lg:mt-15 "
            src="heroImg2.jpeg"
            alt="heroimg"
          />
        </div>
        <motion.div
          whileInView={{ x: 1, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full lg:w-1/2 mt-15"
        >
          <p className="text-left -mt-4 lg:mt-0  lg:w-180 lg:ml-17">
            I am currently pursuing a Bachelor of Technology (B.Tech) in
            Computer Science and Engineering (CSE), where I am building a strong
            foundation in programming, problem-solving, and both frontend and
            backend technologies to shape a successful career in the tech
            industry. I have completed advanced courses in HTML, CSS, and
            JavaScript, and I am proficient in full-stack development using
            modern frameworks like React. Currently, I’m applying this knowledge
            by working on real-world projects such as a Sticky Notes App with
            CRUD operations and local storage integration to enhance my
            practical skills.
          </p>
          <div className="lg:ml-19 text-left lg:w-180">
            In addition, I am expanding my knowledge in Database Management
            Systems (DBMS), Operating Systems, and Computer Organization, while
            also exploring Data Science, Machine Learning, and DevOps for future
            growth. I am passionate about creating impactful web applications
            and continuously improving myself through consistent learning and
            real-world application of technology.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
