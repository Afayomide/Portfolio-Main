import React from "react";
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'

function Footer(){
    return(
        <footer>
                <h3>Chris Afayomide</h3>
                <div className="footer-links">
                
                </div>

                <div className="footer-icons">

                    <a href="https://www.instagram.com/seyi.webdev/"><FiInstagram/></a>
                    <a href="https://www.linkedin.com/in/afayomide-oluwaseyi-849251161/"><BsLinkedin/></a>
                </div>
               
        </footer>
    )
}

export default Footer