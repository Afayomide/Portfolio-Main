import React from "react";
import "./header.css"
import Button from "react-bootstrap/Button"
import blackdeveloper from  "../images/blackdeveloper.jpg"
import CV from "../images/MyCV.pdf"

const Developer = "</ Front-end Developer >"
function Header(){
    return(
      <header id="home">
      <div className="slide-in first-section">
        <h3>
        Hello World,
        </h3>
        <h1>I'm Afayomide Daramola</h1>
        <h2>{Developer}</h2>
        </div> 
        <div className="second-section">
        <div className="image">
        <img className="black-developer" src={blackdeveloper}/>
</div>
<div>
        <div  className="about-me">
            <p><span className="about">About</span>Hello world, I am a Front-end web developer from Lagos, Nigeria.
            I am proficient in Javascript, React, Html, Css, Bootstrap and I am ready to 
            work with an amazing team of developers for the right company.
        </p>
        </div>
        <a href={CV} download={CV}><Button className="button colors bg-dark d-flex justify-content-center">Download CV</Button></a>
      </div>
      </div>
      </header>
    )
}

export default Header