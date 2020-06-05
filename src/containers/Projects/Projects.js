import React from "react";
import Card from "../../components/CardProject/CardProject";
import projects from "../../assets/projects";
const Projects = () => {
  return (
    <article>
      {projects.map((project) => (
        <Card title={project.title} description={project.description} codeUrl={project.codeUrl} technologies={project.technologies} />
      ))}
    </article>
  );
};

export default Projects;
