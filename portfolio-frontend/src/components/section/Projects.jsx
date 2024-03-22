import React, { useEffect, useState } from "react";
import "./projects_styles.css";
import ProjectCard from "./ProjectsTile/ProjectCard";
import arrow from "../assets/arrow.png";
import Axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await Axios.get(
        "https://fullstack-portfolio-psi.vercel.app/"
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const navigateToContact = () => {
    window.location.href = "./#contact";
  };

  function createCard(project) {
    return (
      <ProjectCard
        id={project.id}
        key={project.key}
        img={project.img}
        alt={project.alt}
        title={project.title}
        githubLink={project.githubLink}
        demoLink={project.demoLink}
      />
    );
  }

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">{data.map(createCard)} </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={navigateToContact}
      />
    </section>
  );
};

export default Projects;
