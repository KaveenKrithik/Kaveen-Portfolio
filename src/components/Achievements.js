import React, { useState, useEffect } from "react";
import "./Achievements.css";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/achievement1.png", 
    "/images/achievement2.png",
    "/images/achievement3.png",
    "/images/achievement4.png",
    "/images/achievement5.png",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="achievements-container">
      <h2>My Achievements</h2>
      <div className="carousel-container">
        <div className="carousel">
          <img
            className="carousel-image"
            src={images[currentIndex]}
            alt={`Achievement ${currentIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;

