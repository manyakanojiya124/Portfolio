import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Custom Projects — Based on your profile
const projects = [
  {
    name: "MEDSDB – Decentralized Medical Data Platform",
    description:
      "Created during an international hackathon, MEDSDB is a blockchain-powered platform designed to securely store and share medical data with privacy, transparency, and reliability. Recognized for innovation and global impact.",
    tags: [
      { name: "Blockchain", color: "blue-text-gradient" },
      { name: "Decentralization", color: "green-text-gradient" },
      { name: "Hackathon", color: "pink-text-gradient" },
    ],
    image: "/images/medsdb.jpg", // replace with your image path
    source_code_link: "https://github.com/manyakanojiya124",
  },
  {
    name: "IoT Smart System – Innoverse Hackathon",
    description:
      "Led Team Byte Wizards to develop a complete IoT-based automation system featuring real-time control, monitoring, and data visualization. Designed to optimize efficiency and enhance smart connectivity.",
    tags: [
      { name: "IoT", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Android", color: "pink-text-gradient" },
    ],
    image: "/images/iot.jpg", // replace with your image path
    source_code_link: "https://github.com/manyakanojiya124",
  },
  {
    name: "AI & Data Internship – Cron Systems Pvt. Ltd.",
    description:
      "Worked on AI-driven and data-centric projects under professional mentorship. Enhanced skills in machine learning, automation workflows, and cloud-based deployment while contributing to real-world development initiatives.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "MachineLearning", color: "green-text-gradient" },
      { name: "Cloud", color: "pink-text-gradient" },
    ],
    image: "/images/internship.jpg", // replace with your image path
    source_code_link: "https://www.linkedin.com/in/manya-kanojia-7a0334290/",
  },
  {
    name: "Idea Presentation – Frost Fiesta (GITM, Gurugram)",
    description:
      "Presented an innovative project recognized for creativity and impact during the Frost Fiesta event. Appreciated for originality, teamwork, and strong problem-solving approach.",
    tags: [
      { name: "Innovation", color: "blue-text-gradient" },
      { name: "Presentation", color: "green-text-gradient" },
      { name: "Hackathon", color: "pink-text-gradient" },
    ],
    image: "/images/frostfiesta.jpg", // replace with your image path
    source_code_link: "https://github.com/manyakanojiya124",
  },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

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
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Portfolio Highlights</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects & Experience.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          As a B.Tech student specializing in Artificial Intelligence and Data Science, 
          I’m passionate about building smart, scalable, and impactful technology solutions. 
          My portfolio showcases hackathon-winning innovations and professional exposure through 
          real-world AI and data projects. Each experience highlights curiosity, teamwork, 
          and a growth-oriented mindset.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
