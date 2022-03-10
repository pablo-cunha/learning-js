import react from "react";
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
    return (
        <div className="footer-container">
            <nav className="footer-nav">
            <a className="hyper-text" 
            href="https://github.com/pablo-cunha" 
            target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a className="hyper-text" 
            href="https://www.linkedin.com/in/pablo-cunha/"
            target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            </a>
            <a className="hyper-text" 
            href="https://www.pablocunha.com/"
            target="_blank">
            <FontAwesomeIcon icon={faUserAstronaut} size="2x"/>
            </a>
            </nav>
        </div>
    )
}

export default Footer