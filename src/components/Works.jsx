import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Manya Kanojia — 3 Real Projects
const projects = [
  {
    name: "Portfolio — Personal Developer Website",
    description:
      "A fully responsive, animated 3D developer portfolio built with React, Three.js, and Framer Motion. Features a custom starfield background, interactive 3D tech globe, smooth section transitions, and a working contact form. Deployed live on Vercel.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    // Represents a modern portfolio/code editor aesthetic
    image: "/project/2.png",
    source_code_link: "https://github.com/manyakanojiya124/Portfolio",
    live_link: "https://manya-kanojia.vercel.app/",
  },
  {
    name: "CyberSentinel — AI Phishing & Malware Detector",
    description:
      "A real-time cybersecurity platform that scans URLs for phishing and malware threats using advanced machine learning. Features sandbox script execution, dark web intelligence correlated against 50+ global threat feeds, and a live community reporter feed. Built as a group project.",
    tags: [
      { name: "MachineLearning", color: "blue-text-gradient" },
      { name: "Cybersecurity", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    // Cybersecurity / threat detection aesthetic
    image: "/project/1.png",
    source_code_link: "https://github.com/manyakanojiya124/CyberSentinal",
    live_link: "https://cybersentinel-pearl.vercel.app/",
  },
  {
    name: "End-to-End Medical Chatbot — Generative AI",
    description:
      "An intelligent medical chatbot powered by Generative AI that answers health-related queries using a RAG (Retrieval-Augmented Generation) pipeline. Combines LLMs with a medical knowledge base for accurate, context-aware responses. Built end-to-end with Python, LangChain, and Pinecone vector DB.",
    tags: [
      { name: "GenAI", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    // Medical / AI chatbot aesthetic
    image: "/project/3.png",
    source_code_link: "https://github.com/manyakanojiya124/End-to-End-Medical-Chatbot-Generative-AI",
    live_link: null,
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {/* GitHub icon */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="View Source Code"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {/* Live demo icon — only if live_link exists */}
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="View Live Demo"
              >
                {/* External link icon using SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/2 h-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
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
        <p className={`${styles.sectionSubText}`}>What I've Built</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a B.Tech student specializing in Artificial Intelligence and Data
          Science, passionate about building smart, impactful technology. The
          following projects reflect my hands-on experience — from a live
          AI-powered cybersecurity tool and a generative AI medical chatbot, to
          a fully animated 3D personal portfolio. Each one was built with
          curiosity, attention to detail, and a focus on real-world impact.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");