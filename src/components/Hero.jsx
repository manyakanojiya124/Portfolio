import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left violet line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Text Section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Manya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Passionate B.Tech student in Artificial Intelligence & Data Science. <br className='sm:block hidden' />
            Exploring Cloud, DevOps, and AI-driven innovation.
          </p>

          {/* Contact Icons */}
          <div className='flex flex-row gap-6 mt-6'>
            <a
              href='mailto:manya04092005@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='text-white hover:text-[#915EFF] transition-all duration-300 text-2xl'
              title='Email'
            >
              <MdEmail />
            </a>
            <a
              href='https://www.linkedin.com/in/manya-kanojia'
              target='_blank'
              rel='noreferrer'
              className='text-white hover:text-[#915EFF] transition-all duration-300 text-2xl'
              title='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/manya0409'
              target='_blank'
              rel='noreferrer'
              className='text-white hover:text-[#915EFF] transition-all duration-300 text-2xl'
              title='GitHub'
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Down Animation */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
