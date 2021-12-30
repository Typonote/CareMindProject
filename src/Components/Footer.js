import React from "react";
import "Components/scss/Footer.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faGithub, faLinkedin, faHome);

const Footer = () => {
  return (
    <footer className="Footer__Container">
      <div className="Footer__Icon">
        <a
          href="https://github.com/Typonote"
          target="blank"
          className="Footer__Icon"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/jinkyungkim96/"
          target="blank"
          className="Footer__Icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://jinkyung-kim-portfolio.netlify.app/"
          target="blank"
          className="Footer__Icon"
        >
          <FontAwesomeIcon icon={faHome} />
        </a>
      </div>

      <span className="Footer__Copyright">© 2021 Jinkyung Kim.</span>
    </footer>
  );
};

export default Footer;
