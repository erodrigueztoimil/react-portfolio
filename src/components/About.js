import React from "react";
import mainImage from "../assets/images/drawkit-content-man-colour.svg";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import mouseIcon from "../assets/images/mouse-icon.svg";

const About = () => {
  return (
    <div id="hero">
      <div className="hero-content row">
        <div className="content-image col-lg-6 col-sm-12">
          <img src={mainImage} alt="drawkit-content-man-colour" />
        </div>

        <div className="content-text col-lg-6 col-sm-12">
          <h1>Full Stack Developer</h1>

          <p>
            I am a Full-Stack Web Developer with a background in Front-End
            Development and React Native. User friendly desing is a must for me
            and it's a quality I always keep in mind when approaching a new
            project. Working in a team is an experience I'm always looking
            forward to, however I more than capable of accomplishing tasks on my
            own.
          </p>

          <div className="content-social">
            <a
              href="https://www.linkedin.com/in/ernesto-rodriguez-952772152/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a href="https://github.com/erodrigueztoimil" target="_blank">
              <img src={githubIcon} alt="github" />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="scroll-icon">
        <img src={mouseIcon} alt="mouse" />
        <p>Scroll Down.</p>
      </div> */}
    </div>
  );
};

export default About;
