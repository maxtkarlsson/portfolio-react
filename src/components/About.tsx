import { FrontPageTitle } from "./FrontPageTitle";
import "./About.scss";

export const About = () => {
  return (
    <div className="main-container__left--middle">
      <FrontPageTitle
        title="MAX KARLSSON"
        desc="Front End Developer student"
      ></FrontPageTitle>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  );
};
