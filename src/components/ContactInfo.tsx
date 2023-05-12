import "./ContactInfo.scss";

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p className="contact-info__hello">Contact me!</p>
      <h4 className="contact-info__header">EMAIL</h4>
      <p className="contact-info__text">max.karlsson@medieinstitutet.se</p>
      <h4 className="contact-info__header">TELEPHONE</h4>
      <p className="contact-info__text">+46 73 967 57 59</p>
      <h4 className="contact-info__header">OTHER</h4>
      <div className="contact-info-icons">
        <i className="bi bi-linkedin"></i>

        <i className="bi bi-github"></i>
      </div>
    </div>
  );
};
