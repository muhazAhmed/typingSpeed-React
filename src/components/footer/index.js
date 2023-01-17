import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="page-footer">
      <a href="https://github.com/muhazAhmed/typingSpeed-React.git">
        <FontAwesomeIcon icon={faGithub} style={{"backgroundColor" : "transparent"}}/>
      </a>{" "}
      / Made with <FontAwesomeIcon icon={faHeart} style={{"backgroundColor" : "transparent"}} /> by{" "}
      Muhaz
    </div>
  );
};

export default Footer;
