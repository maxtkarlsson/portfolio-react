import { Project } from "../models/Project";

import { H4 } from "./styled/Headings";
import { StyledP } from "./styled/Texts";
import { ImageWrapper } from "./styled/Wrappers";

interface IProjectCardProps {
  project: Project;
}

export const ProjectCard = (props: IProjectCardProps) => {
  return (
    <>
      <ImageWrapper>
        <img src={props.project.imgUrl} alt="" />
      </ImageWrapper>
      <H4>{props.project.title}</H4>
      <StyledP>{props.project.desc}</StyledP>
    </>
  );
};
