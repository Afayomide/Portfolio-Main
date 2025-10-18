import { Data } from "./experienceData";
import "./experience.scss";
import { BsStar, BsX } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  var [openIndex, setOpenIndex] = useState();

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div id="experience" className="experience-container">
      <div className="topics">
        <h3 className="new-topic">Work Experience</h3>
        <p className="sub-topic">My experience as a fullstack dev</p>
      </div>

      <div className="experience-list">
        {Data.map((item, index) => (
          <motion.div
            className="experience"
            key={index}
            initial={{ opacity: 0, y: 60 }} // slide up from bottom
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1, // stagger animation
            }}
          >
            <div className="list-indent">
              <BsStar />
            </div>

            <div className="experience-info">
              <a href={item.url} target="_blank" rel="noreferrer">
                <small>
                  {item.from} – {item.to}
                </small>
                <h4>{item.company}</h4>
                <h5>{item.title}</h5>
              </a>

              {openIndex !== index && (
                <p
                  className="details-toggle"
                  onClick={() => handleToggle(index)}
                >
                  ..details
                </p>
              )}

              <div
                className={`details-container ${
                  openIndex === index ? "show" : ""
                }`}
              >
                {openIndex === index && (
                  <div className="details">
                    <small onClick={() => handleToggle(index)}>
                      <BsX className="x-icon" />
                    </small>
                    <p>{item.details}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
