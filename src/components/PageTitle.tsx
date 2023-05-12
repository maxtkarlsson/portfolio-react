import "./PageTitle.scss";

interface IPageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <div className="page-title">
      <h1 className="page-title__title">{title}</h1>
    </div>
  );
};
