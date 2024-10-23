import React from "react";
import "./skills.scss"
import { BsPatchCheckFill } from 'react-icons/bs'


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
<BsPatchCheckFill className="check"/>
       <div>
      <h5>React</h5>
    </div>
    </div>

    <div className="skills-list">
<BsPatchCheckFill className="check"/>
       <div>
      <h5>React Native</h5>
    </div>
    </div>

    <div className="skills-list">
<BsPatchCheckFill className="check"/>
       <div>
      <h5>Nextjs</h5>
    </div>
    </div>

    <div className="skills-list">
<BsPatchCheckFill className="check"/>
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
<BsPatchCheckFill className="check"/>
   <div>
  <h5>Nodejs</h5>
</div>
</div>

<div className="skills-list">
<BsPatchCheckFill className="check"/>
   <div>
  <h5>Express</h5>
</div>
</div>

<div className="skills-list">
<BsPatchCheckFill className="check"/>
   <div>
  <h5>Nest</h5>
</div>
</div>

<div className="skills-list">
<BsPatchCheckFill className="check"/>
   <div>
  <h5>postgreSQL</h5>
</div>
</div>

<div className="skills-list">
<BsPatchCheckFill className="check"/>
   <div>
  <h5>MongoDB</h5>
</div>
</div>
<div className="skills-list">
<BsPatchCheckFill className="check"/>
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
<BsPatchCheckFill className="check"/>
       <div>
      <h5>Writer</h5>
    </div>
    </div>

    <div className="skills-list">
<BsPatchCheckFill className="check"/>
       <div>
      <h5>Fitness</h5>
    </div>
    </div>

    <div className="skills-list">
<BsPatchCheckFill className="check"/>
       <div>
      <h5>Medicine</h5>
    </div>
    </div>

    <div className="skills-list">
<BsPatchCheckFill className="check"/>
       <div>
      <h5>Astrology</h5>
    </div>
    </div>

    <div className="skills-list">
<BsPatchCheckFill className="check"/>
       <div>
      <h5>Music</h5>
    </div>
    </div>

    <div className="skills-list">
<BsPatchCheckFill className="check"/>
       <div>
      <h5>Sleep</h5>
    </div>
    </div>
</div>
</div>
</div>


         </div>
 )    
}

export default Skills