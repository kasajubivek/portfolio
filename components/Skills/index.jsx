import React from 'react'
import { DiRedis } from "react-icons/di"
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { AiOutlineAppstore } from 'react-icons/ai' // For Angular (or other Angular-related icon)
import { FaJava } from 'react-icons/fa'  // Java icon
import { SiOracle } from 'react-icons/si' // Oracle icon (from Si package)
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className="pb-24" id="skills">
      {/* <h2 className="my-20 text-center text-4xl text-lime-300">Skills</h2> */}
      <motion.h1
                className="text-3xl text-lime-300 font-extrabold sm:text-5xl sm:leading-tight text-center mt-14 mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Skills
            </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          transition={{ duration: 0.6 }}
          className="p-4"
        >
          <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          transition={{ duration: 0.6 }}
        >
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        {/* <motion.div
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          transition={{ duration: 0.6 }}
        >
          <TbBrandNextjs className="text-7xl"/>
        </motion.div> */}

        <motion.div
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          transition={{ duration: 0.6 }}
          className="p-4"
        >
          <FaJava className='text-7xl text-yellow-600' /> {/* Java Icon */}
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          transition={{ duration: 0.6 }}
          className="p-4"
        >
          <SiMongodb className='text-7xl text-cyan-500'/>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          transition={{ duration: 0.6 }}
          className="p-4"
        >
          <BiLogoPostgresql className='text-7xl text-sky-700'/>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          transition={{ duration: 0.6 }}
          className="p-4"
        >
          <SiOracle className='text-7xl text-orange-600' /> {/* Oracle Icon */}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
