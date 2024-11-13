import React from "react";
import Navbar from "./components/Navbar";
import ProjectCarousel from "./components/ProjectCarousel";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe"; // Import AboutMe component
import Achievements from "./components/Achievements"; // Import Achievements component
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* About Me Section */}
      <section id="about-me">
        <AboutMe />
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <Achievements />
      </section>

      <section id="projects">
        <ProjectCarousel />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <Footer />
    </div>
  );
}

export default App;


