import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import { Element, animateScroll as scroll } from "react-scroll";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "programming-skills.svg" },
    { label: "Soft Skills", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "React", ratingPercentage: 85 },
    { skill: "Bootstrap", ratingPercentage: 75 },
    { skill: "PHP", ratingPercentage: 65 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "C Language", ratingPercentage: 75 },
    { skill: "SQL Server", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Java Script", ratingPercentage: 55 },
    { skill: "Kotlin", ratingPercentage: 35 },
    { skill: "MySQL", ratingPercentage: 55 },
    { skill: "Java", ratingPercentage: 45 },
  ];

  const applicationSkillsDetails = [
    { skill: "PowerBI", ratingPercentage: 80 },
    { skill: "Talend Open Studio", ratingPercentage: 85 },
    { skill: "ArcGIS Platform", ratingPercentage: 85 },
    { skill: "Grafana", ratingPercentage: 75 },
    { skill: "Azure Cloud Server", ratingPercentage: 50 },
    { skill: "E&P - Petrel", ratingPercentage: 70 },
    { skill: "E&P - Kingdom", ratingPercentage: 85 },
    { skill: "E&P - Hampson-Russell", ratingPercentage: 85 },
    { skill: "E&P - Paradigm", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: "SHOPPING SITE - INDIVIDUAL",
      duration: { fromDate: "July 2022", toDate: "Present" },
      description:
        "This is a developing website that can be used as an online shopping site.",
      subHeading: "Technologies Used: React JS, HTML, CSS",
    },
    {
      title: "BOOKBERRIS - GROUP",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "BookBerris is a complete website that can be used as an online book store.",
      subHeading: "Technologies Used:  PHP, HTML, CSS, Java Script, BOOTSTRAP",
    },
    {
      title: "LEARNING MANAGEMENT SYSTEM- GROUP",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "This project has a complete website and mobile application for a learning management system.",
      subHeading:
        "Technologies Used: React JS, JAVA, HTML, CSS, MYSQL, JAVASCRIPT",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Kelaniya, Sri Lanka"}
        subHeading={"B.Sc.(Hons) Software Engineering"}
        fromDate={"2020"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"St.Thomas' College, Matale"}
        subHeading={"Secondary Education "}
        fromDate={"2009"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        {/* <ResumeHeading
          heading={"Saka Energi "}
          subHeading={"E&P Data Specialist"}
          fromDate={"2019"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as E&P Data Specialist handling E&P technical
            database and data integration development.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed end-to-end data management system for G&G technical data
            using GIS Framework and Application
          </span>
          <br />
          <span className="resume-description-text">
            - Developed API and real-time monitoring for production and facility
            data.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed ETL tools to digitize multi-document format into
            semi-automated services and database.
          </span>
          <br />
        </div> */}
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Projects */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Soft Skills */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Time management" />
      <ResumeHeading heading="Leadership skills" />
      <ResumeHeading heading="Work Under pressure" />
      <ResumeHeading heading="Team Working" />
      <ResumeHeading heading="Positive thinking" />
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="Like to Cricket, Foot Ball and swimming."
      />
      <ResumeHeading
        heading="Traveling"
        description="Likes to travel through the natural beauty of the environment."
      />
      <ResumeHeading
        heading="Investment"
        description="Interest in online investment methods and stock market investment"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          // alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <Element className="resume-container screen-container " name="Resume">
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </Element>
  );
};

export default Resume;
