import { Data } from "./experienceData";
import "./experience.scss";
import { BsStar, BsX} from "react-icons/bs";
import { useState } from "react";

function Experience() {
    
  function Card(props) {
    const [displayDetails, setDisplayDetails] = useState(true)

    function handleDisplayDetails() {
        setDisplayDetails((prev) => !prev)
    }
    return (
      <div className="experience" id="experience">
        <div className="list-indent">
          <BsStar />
        </div>
        <div className="experience-info">
          <small>
            {props.from} to {props.to}
          </small>
          <h4>{props.company}</h4>
          <h5>{props.title}</h5>
          {displayDetails ? (
              <p onClick={handleDisplayDetails}>..details</p>
          ) : ""}
          
            <div className="details-container">
            <div className={displayDetails ? "none-details" : "details"}>                
                <small onClick={handleDisplayDetails}><BsX/></small>
                <p className="">{props.details}</p>
            </div>
            </div>
        
        </div>
      </div>
    );
  }
  return (
    <div className="experience-container">
      <div className="topics">
        <h3 className="new-topic">Work Experience</h3>
        <p className="sub-topic">My experience as a fullstack dev</p>
      </div>

      <div className="experience-list">{Data.map(Card)}</div>
    </div>
  );
}

export default Experience;
