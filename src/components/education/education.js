import { useState } from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { BsX } from "react-icons/bs";
import { motion } from "framer-motion";
import { Data } from "./educationData";
import "./education.scss";

function Education() {
  var [openIndex, setOpenIndex] = useState();

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div id="education" className="education-container">
      <div className="topics">
        <h3 className="new-topic">
          My Education <IoSchoolSharp />
        </h3>
        <p className="sub-topic">Schools And Courses</p>
      </div>

      <div className="education-list">
        {Data.map((item, index) => (
          <motion.div
            className="education"
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80, // alternate left/right
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1, // stagger for elegance
            }}
          >
            <div className="list-indent">
              <IoSchoolSharp />
            </div>
            <div className="education-info">
              <small>{item.from}</small>
              <h4>{item.school}</h4>
              <h5>{item.title}</h5>

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
                    <p>
                      {item.details}
                      {item.url && (
                        <a
                          className="here"
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          here
                        </a>
                      )}
                    </p>
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

export default Education;
