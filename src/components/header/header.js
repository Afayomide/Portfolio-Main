"use client";

import { useEffect } from "react";
import "./header.css";
import blackdeveloper from "../images/blackdeveloper.jpg";
import Typewriter from "../typewriter/typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsPencilFill, BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import RippleButton from "../rippleButton/rippleButton";

const Developer = `</ Fullstack Developer >`;

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <header id="home" className="header">
      <div className="hero-overlay"></div>

      <div className="header-content">
        {/* Left Section */}
        <div className="intro" data-aos="fade-right">
          <h3 className="wave">👋 Hello World,</h3>
          <h1>
            I'm <span className="highlight">Chris Afayomide</span>
          </h1>
          <h2>
            <Typewriter text={Developer} delay={100} />{" "}
            <BsPencilFill className="blink-icon" />
          </h2>

          <p className="intro-text" data-aos="fade-up">
            I craft interactive, scalable web experiences that blend logic,
            creativity, and seamless design.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/afayomide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/oluwaseyi-afayomide-849251161"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vTveFmPMdV60caJCXVhYrpJWbDnJHjQLdB-bt35WJW7iu4tVYYu0diGnuyUtnFYcAtIfR1y8AZ5wESN/pub"
            download="https://docs.google.com/document/d/e/2PACX-1vTveFmPMdV60caJCXVhYrpJWbDnJHjQLdB-bt35WJW7iu4tVYYu0diGnuyUtnFYcAtIfR1y8AZ5wESN/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RippleButton className="cv-button">
              <BsDownload /> Download CV
            </RippleButton>
          </a>
        </div>

        {/* Right Section */}
        <div className="hero-image" data-aos="fade-left">
          <div className="image-glow"></div>
          <img
            className="black-developer"
            src={blackdeveloper || "/placeholder.svg"}
            alt="Chris Afayomide"
          />
          <div className="nice-p">
            <p>Hello, nice to have you here 👋</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
