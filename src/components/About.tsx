import { PageTitle } from "./PageTitle";
import "./About.scss";

export const About = () => {
  return (
    <div className="main-container__left--middle">
      <PageTitle
        title="MAX KARLSSON"
        desc="Front End Developer student"
      ></PageTitle>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  );
};
