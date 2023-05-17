import { FrontPageTitle } from "./FrontPageTitle";
import "./About.scss";

export const About = () => {
  return (
    <div className="main-container__left--middle">
      <div className="about-container">
        <FrontPageTitle
          name="MAX KARLSSON"
          desc="Front End Developer student"
        ></FrontPageTitle>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <p className="about-text--alert">
          * This site is a work in progress. I add new features, use new
          techniques and update content as I develop my skills during my
          studies.
        </p>
      </div>
    </div>
  );
};
