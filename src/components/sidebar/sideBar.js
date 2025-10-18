import "./sideBar.scss";
import { useEffect, useState } from "react";
import { FaHome, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
import { GiBrain, GiToolbox } from "react-icons/gi";
import { MdWork, MdContactMail } from "react-icons/md";

function SideBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { href: "#home", icon: <FaHome />, label: "Home" },
    { href: "#skills", icon: <GiBrain />, label: "Skills" },
    { href: "#experience", icon: <MdWork />, label: "Experience" },
    { href: "#education", icon: <FaUserGraduate />, label: "Education" },
    { href: "#portfolio", icon: <GiToolbox />, label: "Projects" },
    { href: "#contact", icon: <MdContactMail />, label: "Contact" },
  ];

  return (
    <div className={`side-bar ${isVisible ? "visible" : "hidden"}`}>
      <div className="side-links">
        {links.map((item, index) => (
          <a href={item.href} className="side-link" key={index}>
            <div className="icon-wrapper">{item.icon}</div>
            <span className="link-text">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
