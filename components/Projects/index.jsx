import React from "react";

import projects from "./data/projects.js";

const Projects = () => {
    return (
        <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="projects">
            <h1 className="text-3xl text-teal-500 font-bold sm:text-4xl sm:leading-10">
                Notable Projects I have Worked On
            </h1>
            <div className="py-6 pt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    projects ? 
                        projects.map((project, index) => 
                            <div 
                                key={index} 
                                className="bg-cyan-900 p-4 rounded hover:bg-cyan-800 relative"
                                title={`${project.title} (${project.year})`}>
                                <b className="text-teal-500 text-sm bg-white py-1 px-2 rounded absolute left-3 -top-2 hover:bg-teal-500 hover:text-white">
                                    {project.title}
                                </b>
                                <h2 className="mt-4 mb-2 text-xl font-bold text-teal-500">
                                    {project.year}
                                </h2>
                                <p className="mt-2 leading-6 text-sm text-gray-200">
                                    {project.description}
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    <b>Technologies:</b> {project.technologies.join(', ')}
                                </p>
                                <a 
                                    href={project.link} 
                                    className="text-teal-500 mt-3 inline-block text-sm hover:text-white"
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    );
}

export default Projects;
