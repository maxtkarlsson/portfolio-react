import "./FrontPageTitle.scss";

interface IFrontPageTitleProps {
  title: string;
  desc: string;
}

export const FrontPageTitle = ({ title, desc }: IFrontPageTitleProps) => {
  return (
    <div className="frontpage-title">
      <h1 className="frontpage-title__title">{title}</h1>
      <h3 className="frontpage-title__desc">{desc}</h3>
    </div>
  );
};
