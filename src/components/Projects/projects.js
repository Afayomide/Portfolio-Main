import React from "react";
import "./projects.css"
import projectCard from "./projectsprops";
import projects from "./projectsdata";
import Book from "../images/HitItRight.pdf"


function Projects (){
    return(
    <div className="gen-p">
           <div className="topics">
      <h3 className="new-topic">Portfolio</h3>
      <p className="sub-topic">Feaured Projects</p>
    </div>
    <div className="portfolio-buttons">
        {/* <a href="https://expo.dev/artifacts/eas/b8mPTy5RpjNy1SgpWQyeTH.apk" ><button >Download My React Native Apk file</button></a> */}
        <br/>
        <a href={Book} download={Book}><button >Download My Book On Fitness(Free)</button></a>
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