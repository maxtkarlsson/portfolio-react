import { Project } from "../models/Project";
import "./ProjectCard.scss";

interface IProjectCardProps {
  project: Project;
}

export const ProjectCard = (props: IProjectCardProps) => {
  return (
    <div className="project">
      <div className="project-image-container">
        <img className="project__image" src={props.project.imgUrl} alt="" />
      </div>
      <h3 className="project__title">{props.project.title}</h3>
      <p className="project__desc">{props.project.desc}</p>
    </div>
  );
};
