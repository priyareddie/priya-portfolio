import React from "react";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const primarySkills = [
    "React (Hooks, functional components)",
    "Redux / Redux Toolkit",
    "TypeScript & JavaScript (ES6+)",
    "HTML5 / CSS3 / SCSS",
    "Responsive & mobile-first design",
    "Accessibility (WCAG) & UX best practices",
  ];

  const secondarySkills = [
    "AEM (Core Components, Sling Models)",
    "Angular 8–17+",
    "REST API integration",
    "Git / CI-CD workflows",
    "Figma handoff & design systems",
  ];

  return (
    <div className="container">
      <SectionTitle
        eyebrow="Skills"
        title="Frontend stack I work with"
        subtitle="Focus on React, Redux, AEM and modern UI engineering."
      />
      <div className="skills">
        <div className="skills__column">
          <h3>Core</h3>
          <ul>
            {primarySkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills__column">
          <h3>Supporting</h3>
          <ul>
            {secondarySkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
