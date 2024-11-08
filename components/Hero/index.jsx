import React from 'react';

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
        <h2 className="flex justify-start items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
          <span>Hello there,</span><span>I am</span>
        </h2>
        <h1 className="text-6xl font-bold text-white sm:text-7xl">
          Bivek Kasaju
        </h1>
        <p className="text-md text-gray-400 leading-7 my-4 sm:text-lg sm:leading-8">
        I’m a Software Engineer with 2.5 years of experience and a Master’s in Applied Computing, currently enhancing my skills through a co-op at Utilismart Corporation. I specialize in full-stack development, database management, and system optimization, with a strong focus on building efficient, scalable solutions.
        </p>
        <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
          <button className="bg-teal-500 py-2 px-4 font-bold text-white border-2 border-teal-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="View Resume">
          <a href="/Bivek'sResume.pdf" download className="flex justify-start items-center gap-1">
              <span>Download Resume</span>
              <RiProfileLine />
            </a>
          </button>
          <button className="bg-white py-2 px-4 font-bold text-teal-500 border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="Get in touch">
            <a href="#contact" className="flex justify-start items-center gap-1">
              <span>Get in touch</span>
              <RiContactsBookLine />
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h4 className="text-xl text-white font-bold">Find me on :</h4>
          <ul className="flex justify-start items-center flex-wrap gap-4">
          <li title="LinkedIn">
              <a href="https://www.linkedin.com/in/bivek-kasaju-8aba3a196/" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiLinkedin />
              </a>
            </li>
            <li title="GitHub">
              <a href="https://github.com/kasajubivek" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiGithub />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hero;