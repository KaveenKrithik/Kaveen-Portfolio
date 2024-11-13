import React from "react";
import "./AboutMe.css"; 

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      
      {/* Introduction Box */}
      <div className="introduction-box">
        <p>
          Hi, I'm <strong>Kaveen Krithik</strong>, a passionate developer who loves building cool projects. I specialize in web development, UI/UX design, and enjoy exploring new technologies. My goal is to create seamless user experiences with intuitive interfaces and beautiful design.
        </p>
        <p>
        I am currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Software Engineering at SRM KTR. I have a strong passion for backend development and am dedicated to mastering the skills needed to build efficient, scalable, and robust backend system.
        </p>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="stack-box">
          <div className="stack-category">
            <h4>Front End</h4>
            <p>React, HTML, CSS, Tailwind CSS, Next.js</p>
          </div>
          <div className="stack-category">
            <h4>Back End</h4>
            <p>Node.js, Express, MongoDB, SQL</p>
          </div>
          <div className="stack-category">
            <h4>Languages</h4>
            <p>JavaScript, Java, Python</p>
          </div>
          <div className="stack-category">
            <h4>Tools</h4>
            <p>Git, Docker, VS Code, Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

