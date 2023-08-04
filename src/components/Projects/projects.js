import React from "react";
import "./projects.css"
import projectCard from "./projectsprops";
import projects from "./projectsdata";

function Projects (){
    return(
    <div>
        <div id="portfolio" className="projects">
            <h3>Featured Projects</h3>
            <div className="projects-list">
            {projects.map(projectCard)}
            </div>
        </div>
    </div>
    )
}

export default Projects