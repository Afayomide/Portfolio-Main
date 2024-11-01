import React from "react";
import "./skills.scss"
import { BsPatchCheckFill } from 'react-icons/bs'
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaAws, FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNestjs } from "react-icons/si";
import { BiLogoPostgresql, BiMusic } from "react-icons/bi";
import { GiMedicinePills, GiMuscleUp, GiSpaceship } from "react-icons/gi";
import { CiPen } from "react-icons/ci";


function Skills () {

 return(

  <div>  
   <div className="topics">
      <h3 className="new-topic">My Skills</h3>
      <p className="sub-topic">What I have To Offer</p>
    </div>
   <div className="skills">

 
    <div id="skills">

    <h4>Frontend</h4>

<div className="skills-container">

    <div className="skills-list">
<FaReact className="check"/>
       <div>
      <h5>React</h5>
    </div>
    </div>

    <div className="skills-list">
<TbBrandReactNative className="check"/>
       <div>
      <h5>React Native</h5>
    </div>
    </div>

    <div className="skills-list">
<RiNextjsFill className="check"/>
       <div>
      <h5>Nextjs</h5>
    </div>
    </div>

    <div className="skills-list">
<FaVuejs className="check"/>
       <div>
      <h5>vuejs</h5>
    </div>
    </div>
</div>
</div>

<div id="skills">

<h4>Backend</h4>

<div className="skills-container">

<div className="skills-list">
<FaNodeJs className="check"/>
   <div>
  <h5>Nodejs</h5>
</div>
</div>

<div className="skills-list">
<SiExpress className="check"/>
   <div>
  <h5>Express</h5>
</div>
</div>

<div className="skills-list">
<SiNestjs className="check"/>
   <div>
  <h5>Nest</h5>
</div>
</div>

<div className="skills-list">
<BiLogoPostgresql className="check"/>
   <div>
  <h5>postgreSQL</h5>
</div>
</div>

<div className="skills-list">
<SiMongodb className="check"/>
   <div>
  <h5>MongoDB</h5>
</div>
</div>
<div className="skills-list">
<FaAws className="check"/>
   <div>
  <h5>AWS</h5>
</div>
</div>

</div>
</div>

</div>


<div className="interests">
<div id="skills">

    <h4>Other Interests</h4>

<div className="skills-container">

    <div className="skills-list">
<CiPen className="check"/>
       <div>
      <h5>Writer</h5>
    </div>
    </div>

    <div className="skills-list">
<GiMuscleUp className="check"/>
       <div>
      <h5>Fitness</h5>
    </div>
    </div>

    <div className="skills-list">
<GiMedicinePills className="check"/>
       <div>
      <h5>Medicine</h5>
    </div>
    </div>

    <div className="skills-list">
<GiSpaceship className="check"/>
       <div>
      <h5>Astrology</h5>
    </div>
    </div>

    <div className="skills-list">
<BiMusic className="check"/>
       <div>
      <h5>Music</h5>
    </div>
    </div>

</div>
</div>
</div>


         </div>
 )    
}

export default Skills