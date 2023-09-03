import { useState } from "react";
import { Project } from "../models/Project";
import { PageTitle } from "./PageTitle";
import { ProjectCard } from "./ProjectCard";

import { projectList } from "../data/projects";

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
    <div>
      <div>
        <PageTitle title="Projects"></PageTitle>
      </div>
      <div>{HtmlProject}</div>
    </div>
  );
};
