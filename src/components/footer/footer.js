import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-title">Chris Afayomide</h3>

      <div className="footer-icons">
        <a
          href="https://www.instagram.com/seyi.webdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FiInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/oluwaseyi-afayomide-849251161/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <BsLinkedin />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Chris Afayomide. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
