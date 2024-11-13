import React, { useState, useEffect } from "react";
import './ProjectCarousel.css';

const ProjectCarousel = () => {
  const projects = [
    {
      name: "RepXplore",
      description: "A personalized gym app",
      link: "https://repxplore.vercel.app/",
      image: "/project1.png",
    },
    {
      name: "GitRepoSearch",
      description: "SEO for REPO",
      link: "https://git-repo-search-chi.vercel.app/",
      image: "/project2.png",
    },
    {
      name: "IoTA Forum",
      description: "Common forum for my tech club",
      link: "https://iota-forum-test.vercel.app/",
      image: "/project3.png",
    },
    {
      name: "SpaceCrafted",
      description: "Interior Designing Website",
      link: "https://space-crafted-green.vercel.app/",
      image: "/project4.png",
    },
  ];

  return (
    <div className="projects-section">
      <h2>MY PROJECTS</h2>
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-track">
            {projects.concat(projects).map((project, index) => ( // Duplicate the array
              <div className="carousel-item" key={index}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + project.image}
                    alt={project.name}
                  />
                  <div className="carousel-item-info">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;


