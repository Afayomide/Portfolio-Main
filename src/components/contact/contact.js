import React from "react";
import ContactCard from "./contactprops";
import contactData from "./contactData";
import "./contact.css";
import Form from "../form/form";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="topics">
        <h3 className="new-topic">Contact</h3>
        <p className="sub-topic">Let’s Build Something Great</p>
      </div>

      <div className="contact-content">
        <div className="contacts-parent">
          {contactData.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </div>

        <div className="contact-form-wrapper">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
