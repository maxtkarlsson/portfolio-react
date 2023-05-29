import "./PageTitle.scss";
import { H2 } from "./styled/Headings";

interface IPageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <div className="page-title">
      <H2 className="page-title__title">{title}</H2>
    </div>
  );
};
