import { Data } from "./educationData";
import "./education.scss";
import {BsX} from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";
import { useState } from "react";

function Education() {
    
  function Card(props) {
    const [displayDetails, setDisplayDetails] = useState(true)

    function handleDisplayDetails() {
        setDisplayDetails((prev) => !prev)
    }
    return (
      <div className="education" id="education">
        <div className="list-indent">
          <IoSchoolSharp/>
        </div>
        <div className="education-info">
          <small>
            {props.from}
          </small>
          <h4>{props.school}</h4>
          <h5>{props.title}</h5>
          {displayDetails ? (
              <p onClick={handleDisplayDetails}>..details</p>
          ) : ""}
          
            <div className="details-container">
            <div className={displayDetails ? "none-details" : "details"}>                
                <small onClick={handleDisplayDetails}><BsX/></small>
                <p className="">
                    {props.details}
                   {props.url ? <a href={props.url}> here</a> : ""} 
                </p>
            </div>
            </div>
        
        </div>
      </div>
    );
  }
  return (
    <div className="education-container">
      <div className="topics">
        <h3 className="new-topic">My Education <IoSchoolSharp/></h3>
        <p className="sub-topic">Schools And Courses</p>
      </div>

      <div className="education-list">{Data.map(Card)}</div>
    </div>
  );
}

export default Education;
