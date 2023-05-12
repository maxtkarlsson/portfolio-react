import { ContactInfo } from "./ContactInfo";
import { PageTitle } from "./PageTitle";

export const Contact = () => {
  return (
    <div className="main-container__right">
      <PageTitle title="Contact"></PageTitle>
      <ContactInfo></ContactInfo>
    </div>
  );
};
