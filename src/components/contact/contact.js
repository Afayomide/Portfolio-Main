import React from "react";
import ContactCard from "./contactprops";
import contactData from "./contactData";
import "./contact.css"
import Form from "../form/form";

function Contact () {
    return(
        <div  id="contact" className="contact-form">
        <div className="contacts-parent">
            {contactData.map(ContactCard)}
        </div>
        <Form/>
        </div>
    )
}

export default Contact