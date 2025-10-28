import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Service cards content from your resume
const services = [
  {
    title: "AI & Data Science Enthusiast",
    icon: "/icons/ai.png", // replace with your icon path or image
  },
  {
    title: "Cloud & DevOps Learner",
    icon: "/icons/cloud.png",
  },
  {
    title: "Machine Learning Practitioner",
    icon: "/icons/ml.png",
  },
  {
    title: "Hackathon Innovator",
    icon: "/icons/hackathon.png",
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Intro Section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* Professional Summary */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm <span className='text-white font-semibold'>Manya Kanojia</span>, a passionate and inquisitive 
        B.Tech student in <span className='text-white font-semibold'>Artificial Intelligence and Data Science</span> 
        at Gurugram University (2023–2027). Currently, I’m exploring the 
        <span className='text-white font-semibold'> Cloud and DevOps</span> domain while strengthening 
        my expertise in <span className='text-white font-semibold'>Python, Machine Learning, and Cloud Fundamentals.</span>
        <br /><br />
        I love building intelligent systems that merge automation and analytics to solve real-world challenges.
        My learning journey focuses on innovation, adaptability, and collaboration — aiming to create solutions
        that are efficient, impactful, and user-centered.
      </motion.p>

      {/* Cards */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Experience Section */}
      <div className='mt-20'>
        <motion.h3
          variants={fadeIn("", "", 0.2, 1)}
          className='text-[24px] font-semibold text-[#915EFF]'
        >
          Experience
        </motion.h3>
        <p className='mt-4 text-secondary text-[17px] leading-[30px]'>
          <b>Cron Systems Pvt. Ltd.</b> — New Delhi, India <br />
          <i>Intern – AI & Data Project Trainee (June 2024 – July 2024)</i>
        </p>
        <ul className='list-disc ml-6 mt-3 text-gray-300 leading-[28px]'>
          <li>Collaborated with the engineering team under the mentorship of <b>Mr. Alankrit Mathur</b>.</li>
          <li>Enhanced AI-driven and data-centric project workflows, boosting data accuracy and performance.</li>
          <li>Worked with machine learning models, automation workflows, and cloud deployment processes.</li>
          <li>Built strong problem-solving, teamwork, and debugging skills during live project development.</li>
        </ul>
      </div>

      {/* Achievements Section */}
      <div className='mt-20'>
        <motion.h3
          variants={fadeIn("", "", 0.2, 1)}
          className='text-[24px] font-semibold text-[#915EFF]'
        >
          Achievements & Recognitions
        </motion.h3>
        <ul className='list-disc ml-6 mt-4 text-gray-300 leading-[28px]'>
          <li>
            🏆 <b>Winner – The Glitter Idea Hackathon (International Level)</b>: 
            Developed <b>MEDSDB</b>, a decentralized medical data platform recognized for innovation and global impact.
          </li>
          <li>
            🥇 <b>1st Place – Innoverse’36 Hackathon (SGT University)</b>: 
            Led <b>Team Byte Wizards</b> to create a full-stack IoT solution within 36 hours.
          </li>
          <li>
            🥈 <b>2nd Place – Intra-Institutional Idea Competition (GITM, Gurugram)</b>: 
            Recognized for innovation during <b>Frost Fiesta 2024</b> by institute leadership.
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
