import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
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
                    "My name is Tharaka 😀",
                    1000,
                    "My name is Nirmal 😇",
                    1000,
                    "My name is Kapilarathne 🫣",
                    1000,
                    "My name is Bandara 😀",
                    1000,
                    "My name is SE 😎",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Tharaka Nirmal Bandara Kapilarathne. University of Kelaniya.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
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
