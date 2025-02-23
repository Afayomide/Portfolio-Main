import "./sideBar.scss"
import { useEffect, useState } from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { FaHardHat } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiBrain } from "react-icons/gi";
import { IoCreateSharp } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";



function SideBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(true);
        } else {
          // Scrolling up
          setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);

    return(
        <div className={`side-bar-container ${isVisible ? "side-bar-visible" : "side-bar-none"}`}>
        <div>
        <div className="bar-link-container">
                <a href="#home"><FcAbout className="bar-icons"/>
                {/* <span className="bar-text">About</span> */}
                </a>
            </div>
            <div className="vl"></div>
            <div className="bar-link-container">
                <a href="#skills"><GiBrain className="bar-icons"/>
                {/* <span className="bar-text">Skills</span> */}
                </a>
            </div>
            <div className="vl"></div>
            <div className="bar-link-container">
                <a href="#experience"><FaHardHat className="bar-icons"/>
                {/* <span className="bar-text">Experience</span> */}
                </a>
            </div>
            <div className="vl"></div>
            <div className="bar-link-container">
                <a href="#education"><IoSchoolSharp className="bar-icons"/>
                {/* <span className="bar-text">Education</span> */}
                </a>
            </div>
            <div className="vl"></div>
            <div className="bar-link-container">
                <a href="#portfolio"><IoCreateSharp className="bar-icons"/>
                {/* <span className="bar-text">Projects</span> */}
                </a>
            </div>
            <div className="vl"></div>
            <div className="bar-link-container">
                <a href="#contact">< FcContacts className="bar-icons"/>
                {/* <span className="bar-text">Contact</span> */}
                </a>
            </div>
        </div>
        </div>
    )
}

export default SideBar