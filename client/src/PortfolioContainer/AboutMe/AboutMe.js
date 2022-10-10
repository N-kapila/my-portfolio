import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I'm a student which is currently studying Software Engineering degree program at the University of Kelaniya. Currently, I’m focused on front-end development.",
    highlights: {
      bullets: [
        "Building ETL Solutions",
        "SQL & No-SQL Database Development",
        "G&G Technical Applications",
        "GIS Web Development and Analysis",
        "Machine Learning Project in Drilling and Production",
        "Building REST-API with Python and Node.Js",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight " key={i}>
        <div className="highlight-blob "></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <Element className="about-me-container screen-container " name="AboutMe">
      <div className="about-me-parent ">
        <ScreenHeading
          title={"About Me"}
          subHeading={"My Portfolio Overview"}
        />
        <div className="about-me-card ">
          <div className="about-me-profile "></div>
          <div className="about-me-details ">
            <span className="about-me-description ">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="profile-options">
              <Link
                className="btn primary-btn"
                to="ContactMe"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                Hire Me{" "}
              </Link>
              <a
                href="Nirmal kapilarathne.pdf"
                download="Nirmal kapilarathne.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
