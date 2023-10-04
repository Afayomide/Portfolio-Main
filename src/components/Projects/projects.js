import React from "react";
import "./projects.css"
import projectCard from "./projectsprops";
import projects from "./projectsdata";

function Projects (){
    return(
    <div className="gen-p">
           <div className="topics">
      <h3 className="new-topic">Portfolio</h3>
      <p className="sub-topic">Feaured Projects</p>
    </div>
        <div id="portfolio" className="projects">
            <div className="projects-list">
            {projects.map(projectCard)}
            </div>
        </div>
    </div>
    )
}

export default Projects