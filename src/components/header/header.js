"use client"

import { useEffect } from "react"
import "./header.css"
import blackdeveloper from "../images/blackdeveloper.jpg"
import CV from "../images/fullstackchris.pdf"
import Typewriter from "../typewriter/typewriter"
import Aos from "aos"
import "aos/dist/aos.css"
import { BsPencilFill, BsDownload, BsGithub, BsLinkedin } from "react-icons/bs"
import RippleButton from "../rippleButton/rippleButton"
import bgMovie from "../images/backgroundimage.mp4"

const Developer = `</ Fullstack Developer >`

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <header id="home">
      <div className="video-container">
        <video autoPlay muted loop playsInline className="home-bg-video">
          <source src={bgMovie} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="header-content">
        <div className="first-section" data-aos="fade-down">
          <h3>Hello World,</h3>
          <h1>
            I'm <span className="highlight">Chris</span> Afayomide
          </h1>
          <h2>
            <Typewriter text={Developer} delay={100} /> <BsPencilFill />
          </h2>
          <div className="social-links">
            <a href="https://github.com/afayomide" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/oluwaseyi-afayomide-849251161?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrdtFOUn1QhO5AkHqZE%2Fq8w%3D%3D" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="second-section">
          <div className="image-container" data-aos="fade-right">
            <img className="black-developer" src={blackdeveloper || "/placeholder.svg"} alt="Chris Afayomide" />
            <div className="nice-p">
              <p>Hello, Nice To Have You Here</p>
            </div>
          </div>
          <div className="about-me" data-aos="fade-left">
            <h2 className="about-title">About Me</h2>
            <p>
              I'm a FullStack developer 🧠 from Lagos, Nigeria. A <span className="highlight">music lover 🎵</span> and
              a huge fan of the show <span className="highlight">The Big Bang Theory 🍿</span>
            </p>
            <p>
              I enjoy <span className="highlight">writing ✍️</span> and am skilled in both frontend and backend
              technologies.
            </p>
            <p>I'm also passionate about writing modular and concise code.</p>
            <a href={CV} download={CV}>
              <RippleButton className="cv-button">
                Download CV <BsDownload />
              </RippleButton>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

