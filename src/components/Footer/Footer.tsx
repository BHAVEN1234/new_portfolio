import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';

export function Footer() {
  return (
    <Container className="footer">

      <div className="portfolio-container">
        <div className="portfolio-intro">
          <h3 className="portfolio-title">Saakshi's Portfolio</h3>
          <p className="portfolio-message">
            Thank you for visiting my personal portfolio website!
          </p>
          <p className="portfolio-message cta">Let's get in touch!</p>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <h4 className="quick-links-title">Quick Links</h4>
        <ul className="quick-links-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#Research">Research</a>
          </li>
          <li>
            <a href="#Mystory">Mystory</a>
          </li>
        </ul>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h4 className="contact-title">Contact Info</h4>
        <p className="contact-item">📞 +1 (213) 681-7437</p>
        <p className="contact-item">📧 <a href="mailto:saakshij@usc.edu">saakshij@usc.edu</a></p>
        <p className="contact-item">📍 Los Angeles, CA</p>
      </div>

      {/* Social Media Section */}
      <div className="social-media">
          <a href="mailto:saakshij@usc.ed" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="https://www.linkedin.com/in/saakshi-dedhia/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a> 
            
            <a href="https://github.com/saakshidedhia/" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
    </Container>
  );
}
