import "./PageTitle.scss";

interface IPageTitleProps {
  title: string;
  desc: string;
}

export const PageTitle = ({ title, desc }: IPageTitleProps) => {
  if (desc !== "") {
    return (
      <div className="page-title">
        <h1 className="page-title__title">{title}</h1>
        <h3 className="page-title__desc">{desc}</h3>
      </div>
    );
  } else {
    return (
      <div className="page-title">
        <h1 className="page-title__title">{title}</h1>
      </div>
    );
  }
};
