import React from "react";

// React Icons
import { 
    FaLinkedinIn, 
    FaCodepen,
    FaGithub,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-2">
            <div className="py-4 border-b border-b-gray-800 flex justify-between items-center max-w-6xl m-auto">
                <h2 className="text-md text-white font-semibold">
                    <a href="">Bivek Kasaju</a>
                </h2>
                <ul className="flex justify-center items-center gap-3">
                    <li className="text-white text-sm" title="LinkedIn">
                        <a href="https://www.linkedin.com/in/bivek-kasaju-8aba3a196" className="ease-in-out duration-150 hover:text-lime-300">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    {/* <li className="text-white text-sm" title="Codepen">
                        <a href="" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaCodepen />
                        </a>
                    </li> */}
                    <li className="text-white text-sm" title="GitHub">
                        <a href="https://github.com/kasajubivek" className="ease-in-out duration-150 hover:text-lime-300">
                            <FaGithub />
                        </a>
                    </li>
                    {/* <li className="text-white text-sm" title="Twitter">
                        <a href="" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaTwitter />
                        </a>
                    </li> */}
                </ul>
            </div>

            <div className="py-8 flex flex-col gap-4 justify-between items-center max-w-6xl m-auto sm:flex-row sm:gap-0">
                <ul className="flex justify-center items-center gap-4">
                    <li className="text-gray-400 text-sm" title="Skills">
                        <a href="#skills" className="font-bold ease-in-out duration-150 hover:text-lime-300">
                            Skills
                        </a>
                    </li>
                    <li className="text-gray-400 text-sm" title="Experience">
                        <a href="#experience" className="font-bold ease-in-out duration-150 hover:text-lime-300">
                            Experience
                        </a>
                    </li>
                    <li className="text-gray-400 text-sm" title="Timeline">
                        <a href="#timeline" className="font-bold ease-in-out duration-150 hover:text-lime-300">
                            Timeline
                        </a>
                    </li>
                    <li className="text-gray-400 text-sm" title="Projects">
                        <a href="#projects" className="font-bold ease-in-out duration-150 hover:text-lime-300">
                            Projects
                        </a>
                    </li>
                    <li className="text-gray-400 text-sm" title="Contact">
                        <a href="#contact" className="font-bold ease-in-out duration-150 hover:text-lime-300">
                            Contact
                        </a>
                    </li>
                </ul>
                {/* <h5 className="text-white font-initial text-sm">&copy; 2024 - Bivek Kasaju. All Rights Reserved.</h5> */}
            </div>
            
        </div>
    );
}

export default Footer;