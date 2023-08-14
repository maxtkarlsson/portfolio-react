import { Project } from "../models/Project";
import "./ProjectCard.scss";
import { H4 } from "./styled/Headings";
import { StyledP } from "./styled/StyledP";
import { ImageWrapper } from "./styled/Wrappers";

interface IProjectCardProps {
  project: Project;
}

export const ProjectCard = (props: IProjectCardProps) => {
  return (
    <>
      <ImageWrapper>
        <img className="project__image" src={props.project.imgUrl} alt="" />
      </ImageWrapper>
      <H4>{props.project.title}</H4>
      <StyledP>{props.project.desc}</StyledP>
    </>
  );
};
