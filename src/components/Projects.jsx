import React from "react";
import SectionTitle from "./SectionTitle";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="container">
      <SectionTitle
        eyebrow="Projects"
        title="Featured work"
        subtitle="Enterprise UI projects highlighting React, Redux and AEM."
      />
      <div className="projects">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card__header">
              <h3>{project.title}</h3>
              <p className="project-card__role">{project.role}</p>
            </div>
            <p className="project-card__description">{project.description}</p>
            <p className="project-card__impact">{project.impact}</p>
            <div className="project-card__tags">
              {project.tech.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
