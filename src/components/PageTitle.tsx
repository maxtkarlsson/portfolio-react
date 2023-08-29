import { H2 } from "./styled/Headings";

interface IPageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <>
      <H2>{title}</H2>
    </>
  );
};
