import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from "../../public/src/constants";

const WorkExperience = () => {
  return (
    <div className='pb-4' id="experience">
            <motion.h1
                className="text-3xl text-lime-300 font-extrabold sm:text-5xl sm:leading-tight text-center mt-14 mb-14"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h1>

      <div>
        {EXPERIENCES.map((experience, outerIndex) => (
          <motion.div
            key={outerIndex}
            className='mb-8 flex flex-wrap lg:justify-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: outerIndex * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Year Section: Fade in from left */}
            <div className="w-fill lg:w-1/4">
              <motion.p
                className='mb-2 text-sm text-white'
                initial={{ opacity: 0, x: -50 }}  // Fade from left
                whileInView={{ opacity: 1, x: 0 }}    // Slide to normal position
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {experience.year}
              </motion.p>
            </div>

            {/* Experience Content: Fade in from right */}
            <div className='w-full max-w-xl lg:w-3/4'>
              <motion.h3
                className='mb-2 font-semibold text-lime-300'
                initial={{ opacity: 0, x: 50 }}  // Fade from right
                whileInView={{ opacity: 1, x: 0 }}   // Slide to normal position
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {experience.role}
                <br/><span className='text-sm text-gray-300'>{experience.company}</span>
              </motion.h3>

              <motion.p
                className='mb-4 text-stone-400'
                initial={{ opacity: 0, x: 50 }}  // Fade from right
                whileInView={{ opacity: 1, x: 0 }}   // Slide to normal position
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {experience.description}
              </motion.p>

              <div className='flex flex-wrap'>
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-lime-300'
                    key={techIndex}
                    initial={{ opacity: 0, x: 50 }} // Fade from right
                    whileInView={{ opacity: 1, x: 0 }}   // Slide to normal position
                    transition={{
                      duration: 0.5,
                      delay: outerIndex * 0.2 + techIndex * 0.2, // Stagger technology animations
                    }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
