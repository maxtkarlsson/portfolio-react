import "./ContactInfo.scss";
import { H3, H4 } from "./styled/Headings";
import { StyledA } from "./styled/StyledA";

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <H3>Contact me!</H3>

      <H4>EMAIL</H4>
      <StyledA href="mailto:max.karlsson@medieinstitutet.se">
        max.karlsson@medieinstitutet.se
      </StyledA>
      <H4>TELEPHONE</H4>
      <StyledA href="tel:+46739675759">+46 73 967 57 59</StyledA>
      <H4>OTHER</H4>
      <div className="contact-info-icons">
        <a href="https://www.linkedin.com/in/max-karlsson-5307b1a3/">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/maxtkarlsson">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
};
