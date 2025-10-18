import React from "react";
import "./contact.css";

function ContactCard({ name, info, icon, link }) {
  return (
    <div className="per-contact fade-in">
      <div className="icon-wrapper">{icon}</div>
      <h4>{name}</h4>
      <p>{info}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Send me a message
      </a>
    </div>
  );
}

export default ContactCard;
