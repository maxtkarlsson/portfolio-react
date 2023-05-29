import "./FrontPageTitle.scss";
import { H1 } from "./styled/Headings";

interface IFrontPageTitleProps {
  name: string;
  desc: string;
}

export const FrontPageTitle = ({ name, desc }: IFrontPageTitleProps) => {
  return (
    <div className="frontpage-title">
      <H1>{name}</H1>
      <p className="frontpage-title__desc">{desc}</p>
    </div>
  );
};
