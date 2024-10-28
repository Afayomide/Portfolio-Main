import React from "react";
import { useEffect } from "react";
import "./header.css"
import blackdeveloper from  "../images/blackdeveloper.jpg"
import CV from "../images/fullstackchris.pdf"
import Typewriter from "../typewriter/typewriter";
import Aos from "aos";
import "aos/dist/aos.css"
import { BsPencilFill } from "react-icons/bs";
import RippleButton from "../rippleButton/rippleButton";

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
        <h1>I'm <span>Chris</span> Afayomide</h1>
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
            <p><span className="about">About</span>I am a FullStack developer 🧠 from Lagos, Nigeria.<br/>
              A <span>music lover 🎵</span> and A huge fan of the show <span>The Big Bang Theory 🍿</span><br/>
              I enjoy <span>writing ✍️</span>, and I love <span>working out 💪</span><br/>
              I am skilled in both frontend and backend technologies<br/>
        </p>
        <p>
          I am also a freak when it comes to writing modular and conscice code  
        </p>
        <a href={CV} download={CV}><RippleButton className="">Download CV</RippleButton></a>
      </div>
      </div>
      </header>
    )
}

export default Header