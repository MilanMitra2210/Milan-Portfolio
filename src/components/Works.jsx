import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  icon,
  liveDemoLink='https://github.com/MilanMitra2210/Expense-Tracker'
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: '#1d1836', color: '#fff' }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={icon}
            alt={name}
            className='w-[100%] h-[100%] object-contain'
          />
        </div>
      }
    >
      <motion.div
        variants={fadeIn}
        className={`relative overflow-hidden rounded-lg shadow-md ${styles.projectCard}`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-5/6 h-5/6 object-contain'
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="mt-2 text-gray-400 text-sm">{description}</p>

          <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Works = () => {  
  return (
    <>
      <motion.div 
        initial="hidden"
        animate="show"
        variants={textVariant(0.1)}
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex flex-col'>
        <motion.p
          initial="initial"
          animate="animate"
          variants={fadeIn("up", "tween", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-full leading-[30px]'
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
