"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({ id, name, link, imgSrc, github, visit }) {
  return (
    <motion.div
      className="per-project"
      key={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: id * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <a href={visit || link} target="_blank" rel="noopener noreferrer">
        <div className="project-image-container">
          <img
            src={imgSrc}
            alt={name}
            loading="lazy"
            className="project-image"
          />
          <div className="overlay">
            <h4>{name}</h4>
          </div>
        </div>
      </a>

      <div className="project-buttons">
        <a href={visit} target="_blank" rel="noopener noreferrer">
          <button className="visit-site">
            <FiExternalLink /> Visit
          </button>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className="github">
            <FiGithub /> Code
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
