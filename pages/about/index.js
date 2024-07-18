import React, { useState } from "react";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";

import {
  SiNextdotjs,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiSqlite,
  SiMysql,
} from "react-icons/si";

import { LiaNode } from "react-icons/lia";

//  data
const aboutData = [
  {
    title: "Front-end",
    info: [
      {
        icons: [
          { icon: <FaHtml5 />, name: "HTML" },
          { icon: <FaCss3 />, name: "CSS3" },
          { icon: <FaJs />, name: "JavaScript" },
          { icon: <FaReact />, name: "React" },
          { icon: <SiNextdotjs />, name: "Next.js" },
          { icon: <FaBootstrap />, name: "Bootstrap" },
        ],
      },
    ],
  },
  {
    title: "Back-end",
    info: [
      {
        icons: [
          { icon: <LiaNode />, name: "Node JS" },
          { icon: <SiCsharp />, name: "C-sharp" },
        ],
      },
    ],
  },
  {
    title: "Database",
    info: [
      {
        icons: [
          { icon: <SiMicrosoftsqlserver />, name: "MS SQL Server" },
          { icon: <SiSqlite />, name: "SQLite" },
          { icon: <SiMysql />, name: "MySQL" },
        ],
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* {text} */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-10"
          >
            Empowering<br /> Businesses Through Custom <span className="text-accent">Web Development.</span>  
           
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Proficient in frontend innovation, backend development, and dynamic database integration to deliver seamless technological solutions.
          </motion.p>

          {/* {counter} */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          ></motion.div>
        </div>

        {/* {info} */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-20"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* {title} */}
                  <div className="flex flex-col gap-y-4">
                    {/* {icons} */}
                    {item.icons?.map((iconItem, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="text-3xl text-white flex items-center mb-2 hover:text-accent transition-colors duration-300"
                      >
                        {iconItem.icon}
                        <span className="ml-2 text-lg">{iconItem.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
