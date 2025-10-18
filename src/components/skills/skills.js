import React, { useEffect, useRef } from "react";
import "./skills.scss";
import { FaReact, FaAws, FaVuejs, FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNestjs } from "react-icons/si";
import { BiLogoPostgresql, BiMusic } from "react-icons/bi";
import { GiMedicinePills, GiMuscleUp, GiSpaceship } from "react-icons/gi";
import { CiPen } from "react-icons/ci";

function Skills() {
  var sectionRef = useRef(null);

 useEffect(() => {
  var observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        var target = entry.target ;
        if (entry.isIntersecting) {
          target.classList.add("visible");
          observer.unobserve(target); // stop observing once animated
        }
      });
    },
    { threshold: 0.2 }
  );

  var cards = sectionRef.current?.querySelectorAll(".skills-card");
 cards?.forEach((card, i) => {
  (card).style.animationDelay = `${i * 0.15}s`;
  observer.observe(card);
});

  return () => observer.disconnect();
}, []);


  return (
    <div id="skills" className="skills-section" ref={sectionRef}>
      <div className="topics">
        <h3 className="new-topic">My Skills</h3>
        <p className="sub-topic">What I Have To Offer</p>
      </div>

      <div className="skills-wrapper">
        {/* Frontend */}
        <div className="skills-card">
          <h4>Frontend</h4>
          <div className="skills-container">
            <div className="skills-list">
              <FaReact className="icon react" />
              <h5>React</h5>
            </div>
            <div className="skills-list">
              <TbBrandReactNative className="icon rn" />
              <h5>React Native</h5>
            </div>
            <div className="skills-list">
              <RiNextjsFill className="icon next" />
              <h5>Next.js</h5>
            </div>
            <div className="skills-list">
              <FaVuejs className="icon vue" />
              <h5>Vue.js</h5>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="skills-card">
          <h4>Backend</h4>
          <div className="skills-container">
            <div className="skills-list">
              <FaNodeJs className="icon node" />
              <h5>Node.js</h5>
            </div>
            <div className="skills-list">
              <SiExpress className="icon express" />
              <h5>Express</h5>
            </div>
            <div className="skills-list">
              <SiNestjs className="icon nest" />
              <h5>Nest.js</h5>
            </div>
            <div className="skills-list">
              <BiLogoPostgresql className="icon postgres" />
              <h5>PostgreSQL</h5>
            </div>
            <div className="skills-list">
              <SiMongodb className="icon mongo" />
              <h5>MongoDB</h5>
            </div>
            <div className="skills-list">
              <FaAws className="icon aws" />
              <h5>AWS</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Other Interests */}
      <div className="interests">
        <div className="skills-card">
          <h4>Other Interests</h4>
          <div className="skills-container">
            <div className="skills-list">
              <CiPen className="icon pen" />
              <h5>Writing</h5>
            </div>
            <div className="skills-list">
              <GiMuscleUp className="icon fit" />
              <h5>Fitness</h5>
            </div>
            <div className="skills-list">
              <GiMedicinePills className="icon med" />
              <h5>Medicine</h5>
            </div>
            <div className="skills-list">
              <GiSpaceship className="icon astro" />
              <h5>Astrology</h5>
            </div>
            <div className="skills-list">
              <BiMusic className="icon music" />
              <h5>Music</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
