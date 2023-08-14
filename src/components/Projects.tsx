import { useState } from "react";
import { Project } from "../models/Project";
import { PageTitle } from "./PageTitle";
import { ProjectCard } from "./ProjectCard";
import "./Projects.scss";
import { projectList } from "../data/projects";
import { ProjectWrapper } from "./styled/Wrappers";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(projectList);

  console.log(projects);

  const HtmlProject = projects.map((p) => {
    return (
      <ProjectWrapper>
        <ProjectCard project={p}></ProjectCard>
      </ProjectWrapper>
    );
  });

  return (
    <div className="projects-container">
      <div className="main-container__left">
        <PageTitle title="Projects"></PageTitle>
      </div>
      <div className="main-container__right">{HtmlProject}</div>
    </div>
  );
};
