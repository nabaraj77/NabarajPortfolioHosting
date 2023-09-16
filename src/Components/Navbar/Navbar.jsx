import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <nav className="navbar ">
        <div className="container-fluid ">
          <div className="navbarContainer">
            <a className="navbar-brand navContentContainer" href="#">
              <div className="logoFirstName">
                <div className="navImage">
                  <img
                    src="../../Images/dahal.jpg"
                    alt="NabarajLogo"
                    width="24"
                    height="24"
                    className="logo fa-beat"
                  />
                </div>
                <div className="firstName">
                  <h2>
                    <span className="firstLetterFirstName">N</span>abaraj
                  </h2>
                </div>
              </div>
              <div className="lastName">
                <h2>
                  <span className="firstLetterLastName">D</span>ahal
                </h2>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
