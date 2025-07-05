import React from "react";
import "./CSS/About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p>A quick look into my world: passion, skills, and aspirations!</p>
      </div>
      <div className="about-container">
        {/* Image Section */}
        <div className="about-image">
          <img src="your-picture.jpg" alt="Mohamed Derfoufi" />
        </div>
        {/* Content Section */}
        <div className="about-content">
          <h2>Hi, I'm Mohamed Derfoufi</h2>
          <p>
            I am a software engineer specializing in backend development.
            My passion lies in crafting robust solutions and innovative applications that
            solve real-world problems. With a strong foundation in computer science and a
            growth mindset, I continuously strive to expand my knowledge and skills.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring new technologies,
            working on open-source projects, or engaging with the developer community.
          </p>
          <div className="about-skills">
            <h3>Skills</h3>
            <ul>
              <li>Backend Development</li>
              <li>Full Stack Development</li>
              <li>Database Management</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
