import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./contact.css"

function ContactCard (props){
    const{name, info, icon,id,link} = props
    return(
    <div className="per-contact">
        
       <img src={icon}/>
       <p>{name}</p>
          <p>{info}</p>
       <a href={link}>Send me a message</a>
    </div>
    )
}
export default ContactCard