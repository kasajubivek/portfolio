import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="py-8 pb-0 px-2 max-w-6xl m-auto sm:py-20" id="contact">
            <motion.h1
                className="text-3xl text-lime-300 font-bold sm:text-5xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Connect with me, <br />
            </motion.h1>

            <div className="my-10 grid grid-cols-2 gap-0 lg:grid-cols-5 sm:grid-cols-3 sm:gap-4">
                {/* Social Links */}
                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <li className="mb-4 text-gray-300 text-md w-max" title="LinkedIn">
                        <a href="https://www.linkedin.com/in/bivek-kasaju-8aba3a196" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-lime-300">
                            <FaLinkedinIn />
                            <span className="text-sm font-initial">in/bivek-kasaju</span>
                        </a>
                    </li>
                    <li className="mb-4 text-gray-300 text-md w-max" title="GitHub">
                        <a href="https://github.com/kasajubivek" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-lime-300">
                            <FaGithub />
                            <span className="text-sm font-initial">/kasajubivek</span>
                        </a>
                    </li>
                    {/* <li className="mb-4 text-gray-300 text-md w-max" title="Twitter">
                        <a href="https://twitter.com/kasajubivek" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaTwitter />
                            <span className="text-sm font-initial">/kasajubivek</span>
                        </a>
                    </li> */}
                </motion.ul>

                {/* Contact Info */}
                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <li className="mb-4 text-gray-300 text-md w-max" title="Email">
                        <a href="mailto:kasaju@uwindsor.ca" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-lime-300">
                            <span className="text-sm font-initial">kasaju@uwindsor.ca</span>
                        </a>
                    </li>
                    <li className="mb-4 text-gray-300 text-md w-max" title="Phone">
                        <a href="tel:+12269758382" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-lime-300">
                            <span className="text-sm font-initial">226-975-8382</span>
                        </a>
                    </li>
                </motion.ul>

                {/* Start Project Section */}
                {/* <motion.div
                    className="mt-10 sm:mt-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl text-teal-500 font-bold mb-2 sm:text-3xl">Start a project?</h2>
                    <h3 className="text-md text-gray-400 sm:text-xl">hello@bivek.com</h3>
                </motion.div> */}
            </div>
        </div>
    );
}

export default Contact;
