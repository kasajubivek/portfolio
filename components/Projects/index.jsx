import React from "react";
import { motion } from "framer-motion";
import projects from "./data/projects.js";
import { 
    FaLinkedinIn, 
    FaCodepen,
    FaGithub,
    FaTwitter
} from "react-icons/fa";

const Projects = () => {
    return (
        <div
            className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2"
            id="projects"
            style={{
                color: "#f1f5f9",
            }}
        >
            {/* Section Title */}
            <motion.h1
                className="text-3xl text-lime-300 font-extrabold sm:text-5xl sm:leading-tight text-center mt-16 mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Recent Projects
            </motion.h1>

            {/* Projects Grid */}
            <div className="py-12 grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
                {projects ? (
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-6 from-lime-300 to-green-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative rounded-md"
                            title={`${project.title} (${project.year})`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Project Title */}
                            <motion.h2
                                className="text-xl font-bold text-gray-800 bg-lime-300 px-4 py-2 absolute -top-4 left-4 shadow rounded-md"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {project.title}
                            </motion.h2>

                            {/* Project Year */}
                            <motion.p
                                className="mt-8 text-lg font-semibold"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {project.year}
                            </motion.p>

                            {/* Project Description */}
                            <motion.p
                                className="mt-4 leading-7 text-sm"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {project.description}
                            </motion.p>

                            {/* Project Technologies */}
                            <motion.div
                                className="mt-4 flex flex-wrap"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <b className="block text-sm text-gray-400 w-full mb-2">Skills:</b>
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        className="mr-2 mt-4 bg-stone-900 px-2 py-1 text-sm font-medium text-lime-300 rounded-md"
                                        key={techIndex}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.2 + techIndex * 0.2,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* Project Link */}
                            <motion.a
    href={project.link}
    className="text-lime-300 font-bold mt-6 inline-block bg-black px-4 py-2 shadow-lg hover:bg-lime-300 hover:text-gray-800 hover:border-lime-300 transition-all rounded-md border-2 border-white flex items-center gap-2 max-w-max"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
>
    GitHub Link <FaGithub />
</motion.a>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-center text-gray-400">No projects to display.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
