import React from "./experience_styles.css";
import {
  frontend,
  backend,
  python,
} from "./ExperienceTile/experienceCardDetails";
import ExperienceCard from "./ExperienceTile/ExperienceCard";
import Arrow from "../assets/arrow.png";

const Experience = () => {
  const navigateToProjects = () => {
    window.location.href = "./#projects";
  };

  function createCard(tech) {
    return (
      <ExperienceCard
        id={tech.id}
        key={tech.id}
        skill={tech.skill}
        experience={tech.experience}
      />
    );
  }

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            {frontend.map(createCard)}
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            {backend.map(createCard)}
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Python Development</h2>
            {python.map(createCard)}
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={navigateToProjects}
      />
    </section>
  );
};

export default Experience;
