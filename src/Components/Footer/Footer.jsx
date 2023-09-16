import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerName">
        <h3>
          <span className="footerFirstLetter">N</span>abaraj{" "}
          <span className="footerLastLetter">D</span>ahal
        </h3>
      </div>
      <div className="footerDes">
        {" "}
        <h4>Portfolio of Nabaraj Dahal 👌</h4>
      </div>
      <div className="links">
        <a href="https://www.facebook.com/nabaraj.dhl77/" target="_blank">
          <i class="fa-brands fa-facebook fa-beat fa-lg facebook"></i>
        </a>
        <a href="https://www.instagram.com/_nabaraj/">
          <i
            class="fa-brands fa-instagram fa-beat fa-lg instagram"
            target="_blank"
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/nabaraj77/">
          <i
            class="fa-brands fa-linkedin fa-beat fa-lg linkedIn"
            target="_blank"
          ></i>
        </a>
        <a href="https://github.com/nabaraj77">
          <i
            class="fa-brands fa-github fa-beat fa-lg github"
            target="_blank"
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
