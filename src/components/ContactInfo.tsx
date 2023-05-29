import "./ContactInfo.scss";
import { StyledH4 } from "./styled/StyledH4";

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p className="contact-info__hello">Contact me!</p>

      <StyledH4>EMAIL</StyledH4>
      <a
        className="contact-info__text"
        href="mailto:max.karlsson@medieinstitutet.se"
      >
        max.karlsson@medieinstitutet.se
      </a>
      <StyledH4>TELEPHONE</StyledH4>
      <a className="contact-info__text" href="tel:+46739675759">
        +46 73 967 57 59
      </a>
      <StyledH4>OTHER</StyledH4>
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
