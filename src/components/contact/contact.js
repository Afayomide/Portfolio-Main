import React from "react";
import ContactCard from "./contactprops";
import contactData from "./contactData";
import "./contact.css"
import Form from "../form/form";

function Contact () {
    return(
        <div>
               <div className="topics">
      <h3 className="new-topic">Contact</h3>
      <p className="sub-topic">Get In Touch</p>
    </div>
        <div  id="contact" className="contact-form">
      

        <div className="contacts-parent">     
 
            {contactData.map(ContactCard)}
        </div>
        <Form/>
        </div>
        </div>
    )
}

export default Contact