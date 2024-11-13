import React from "react";
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h3>MY EXPERIENCE</h3>
      <div className="experience-item">
        <h4>CODENEX</h4>
        <p>Web Developer | 2024 - Present</p>
        <p>I have gained significant experience in backend development by creating robust APIs and managing databases using Node.js and Express.js.<br>
        </br> In various projects, I designed RESTful APIs for handling data interaction between the frontend and backend.<br>
        </br> These APIs enabled smooth data flow and real-time communication between users and databases, ensuring efficient and scalable applications.</p>
      </div>
      <div className="experience-item">
        <h4>IoT Alliance</h4>
        <p>Technical Manager of Web Dev | 2024 - Present</p>
        <p> As a team leader, I had the privilege of mentoring and guiding a group of 30 students in web development projects. <br>
        </br>I took on the responsibility of organizing and managing the workflow, ensuring each team member understood their tasks and deadlines.<br>
        </br> My role involved providing hands-on guidance on both the frontend and backend aspects of website development, helping students develop professional-level web applications.</p>
      </div>
    </div>
  );
};

export default Experience;

