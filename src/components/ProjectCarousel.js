import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-section">
      <h2>MY PROJECTS</h2>
      <div className="carousel-container">
        <FaArrowLeft className="carousel-arrow left-arrow" onClick={prevProject} />
        <div className="carousel">
          <div className="carousel-item">
            <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
              <img
                src={process.env.PUBLIC_URL + projects[currentIndex].image}  
                alt={projects[currentIndex].name}
              />
              <div className="carousel-item-info">
                <h4>{projects[currentIndex].name}</h4>
                <p>{projects[currentIndex].description}</p>
              </div>
            </a>
          </div>
        </div>
        <FaArrowRight className="carousel-arrow right-arrow" onClick={nextProject} />
      </div>
    </div>
  );
};

export default ProjectCarousel;


