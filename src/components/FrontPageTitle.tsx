import "./FrontPageTitle.scss";

interface IFrontPageTitleProps {
  name: string;
  desc: string;
}

export const FrontPageTitle = ({ name, desc }: IFrontPageTitleProps) => {
  return (
    <div className="frontpage-title">
      <h1 className="frontpage-title__name">{name}</h1>
      <p className="frontpage-title__desc">{desc}</p>
    </div>
  );
};
