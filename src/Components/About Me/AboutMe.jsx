import React from "react";
import Typical from "react-typical";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container-fluid aboutMe">
      <div className="intro">
        <div className="introDes">
          Hello 👋 I am <span className="fullName">Nabaraj Dahal</span>
        </div>
        <div className="introAnimation">
          <h3>
            <Typical
              loop={Infinity}
              className="loopName"
              steps={[
                "Computer Engineer..",
                1000,
                "Frontend Developer..",
                1000,
              ]}
            />
          </h3>
        </div>
        <div className="selfIntroSkills">
          Energetic Computer Engineer having good skills in HTML, CSS,
          JavaScript and ReactJs.
        </div>
      </div>
      <div className="pic">
        <img
          className="nabarajPhoto"
          src="../../Images/nabaraj.jpg"
          alt="Nabaraj Photo"
        />
      </div>
    </div>
  );
};

export default AboutMe;
