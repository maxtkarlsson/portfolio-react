import { H1 } from "./styled/Headings";
import { StyledPHeading } from "./styled/Texts";

interface IFrontPageTitleProps {
  name: string;
  desc: string;
}

export const FrontPageTitle = ({ name, desc }: IFrontPageTitleProps) => {
  return (
    <>
      <H1>{name}</H1>
      <StyledPHeading>{desc}</StyledPHeading>
    </>
  );
};
