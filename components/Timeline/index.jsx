import React from 'react'
// import "./timeline.css";
// import { ReactComponent as WorkIcon } from "../../public/src/assets/work.svg";
// import { ReactComponent as SchoolIcon } from "../../public/src/assets/school.svg";

import timelineElements from "../../public/src/constants/timelineElements";
import { motion } from 'framer-motion'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
    let workIconStyles = { background: "#BEF264" };
    let schoolIconStyles = { background: "#BEF264" };
    return (
        <div id="timeline">
            <motion.h1
                className="text-3xl text-lime-300 font-extrabold sm:text-5xl sm:leading-tight text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Timeline
            </motion.h1>
          <VerticalTimeline>
            {timelineElements.map((element) => {
              let isWorkIcon = element.icon === "work";
              let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";
    
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={<span style={{ color: "#ffffff", fontSize: "1.2em" }}>{element.date}</span>}
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                //   icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  {/* <p id="description">{element.description}</p>
                  {showButton && (
                    <a
                      className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                      }`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )} */}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      );
}

export default Timeline