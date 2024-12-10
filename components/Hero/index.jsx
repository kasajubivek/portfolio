import React from 'react';
import { motion } from 'framer-motion';  // Import framer-motion for animation

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
      <motion.h2 
        className="flex justify-start items-center gap-2 text-xl font-bold text-gray-300 mb-4 sm:text-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>Hello there,</span><span>I am</span>
      </motion.h2>

      <motion.h1 
        className="text-7xl font-bold text-lime-300 sm:text-8xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bivek Kasaju
      </motion.h1>

      <motion.p 
        className="text-md text-gray-300 leading-7 my-4 sm:text-lg sm:leading-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I’m a Software Engineer with almost 3 years of experience and a Master’s degree in Applied Computing from University of Windsor, currently enhancing my skills through a co-op at Utilismart Corporation. I specialize in full-stack development, database management, and system optimization, with a strong focus on building efficient, scalable solutions.
      </motion.p>

      <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
        <motion.button
          className="bg-lime-300 py-2 px-4 font-bold text-white border-2 border-lime-300 rounded-md ease-in-out duration-150 hover:text-white hover:bg-lime-390 hover:border-white"
          title="View Resume"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/Bivek'sResume.pdf" download className="flex justify-start items-center gap-1">
            <span className='text-black'>Download Resume</span>
            <RiProfileLine  className='text-black'/>
          </a>
        </motion.button>

        <motion.button
          className="bg-transparent py-2 px-4 font-bold text-lime-300 border-2 border-white rounded-md ease-in-out duration-150 hover:text-lime-300 hover:bg-white hover:border-lime-300"
          title="Get in touch"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#contact" className="flex justify-start items-center gap-1">
            <span>Get in touch</span>
            <RiContactsBookLine />
          </a>
        </motion.button>
      </div>

      <motion.div
        className="flex flex-col justify-start items-start gap-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-xl text-gray-300 font-bold">Find me on :</h4>
        <ul className="flex justify-start items-center flex-wrap gap-4">
          <motion.li
            title="LinkedIn"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/bivek-kasaju-8aba3a196/" className="text-lime-300 text-md ease-in-out duration-150 hover:text-white">
              <FiLinkedin />
            </a>
          </motion.li>

          <motion.li
            title="GitHub"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="https://github.com/kasajubivek" className="text-lime-300 text-md ease-in-out duration-150 hover:text-white">
              <FiGithub />
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Hero;
