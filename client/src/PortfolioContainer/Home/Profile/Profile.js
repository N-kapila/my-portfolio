import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Profile() {
  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/nkmaxx.k">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/_i_am_nim_z_/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/N-kapila">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nirmal-kapilarathne-79b7331a1/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/NKapilarathne">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text"> Nirmal </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer 💻",
                    1000,
                    "Front-End Developer 🖥",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Creating tools that improve site interaction regardless of the
                browser.
              </span>
            </span>
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

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
