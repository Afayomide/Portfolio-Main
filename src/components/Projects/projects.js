"use client";
import React from "react";
import "./projects.css";
import ProjectCard from "./projectsprops";
import projects from "./projectsdata";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section  className="projects-section" id="portfolio">
      <motion.div
        className="topics"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="new-topic">Portfolio</h3>
        <p className="sub-topic">Featured Projects</p>
      </motion.div>

      <div className="projects-list">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} id={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
