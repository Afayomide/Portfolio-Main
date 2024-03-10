import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./header.css"
import Button from "react-bootstrap/Button"
import blackdeveloper from  "../images/blackdeveloper.jpg"
import CV from "../images/Afayomide.pdf"
import Typewriter from "../typewriter/typewriter";
import Aos from "aos";
import "aos/dist/aos.css"
import { BsPencilFill } from "react-icons/bs";

const Developer = `</ Fullstack Developer > And A Writer`
function Header(){

useEffect(()=>{
   Aos.init({duration: 3000});
},[])

    return(
      <header id="home">
      <div className="slide-in first-section">
        <h3>
        Hello World,
        </h3>
        <h1>I'm Afayomide Daramola</h1>
        <h2><Typewriter text={Developer} delay={100}/> <BsPencilFill/></h2>
        </div> 
        <div className="second-section">
        <div className="image">
        <img className="black-developer" src={blackdeveloper}/>
</div>
<div className="nice-p" data-aos= "fade-right">
 <p> Hello Nice To Have You here</p>
</div>
        <div  className="about-me">
            <p><span className="about">About</span>I am a FullStack developer from Lagos, Nigeria.
            I am proficient in Javascript, React,React Native, Node, mongo, python, Html, Css, Bootstrap. Merging coding with creativity, I am ready to 
            work with an amazing team of developers for the right company.
        </p>
        <a href={CV} download={CV}><button className="">Download CV</button></a>

      </div>
      </div>
      </header>
    )
}

export default Header