import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      {/* Contact Header Section */}
      <header>
        <h2>Get In Touch</h2>
      </header>

      {/* Contact Details Section */}
      <div className="contacts">
        {/* Email Section */}
        <div>
          <a href="mailto:saakshij@usc.edu">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:saakshij@usc.edu">saakshij@usc.edu</a>
        </div>

        {/* Phone Section */}
        <div>
          <a href="tel:+12136817437">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+12136817437">(+1) 213-681-7437</a>
        </div>
      </div>
    </Container>
  );
}