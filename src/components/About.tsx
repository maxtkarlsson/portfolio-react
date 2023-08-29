import { FrontPageTitle } from "./FrontPageTitle";

import { StyledP, StyledPItalic } from "./styled/Texts";

export const About = () => {
  return (
    <>
      <FrontPageTitle
        name="MAX KARLSSON"
        desc="Front End Developer student"
      ></FrontPageTitle>

      <StyledP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </StyledP>

      <StyledPItalic>
        * This site is a work in progress. I add new features, use new
        techniques and update content as I develop my skills during my studies.
      </StyledPItalic>
    </>
  );
};
