import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import TextLoop from "react-text-loop";
import Illustration from "../../assets/illustration.png";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="hey-text">Hey<img src={Hello} alt="Hello" width="30px" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1 className="name-text">Saakshi Dedhia</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
  <p className="i-am-into">
    I am into
    <h2 className="dynamic-text">
      <TextLoop interval={1000}>
        {/* <span>Financial Planning & Analysis</span> */}
        {/* <span>Investment Management</span> */}
        <span>Portfolio Management</span>
        <span>Mergers & Acquisitions</span>
        <span>Private Equity </span>
        <span> Venture Capital</span>
        <span> Investment Analyst</span>
        <span>Research</span>
        <span>Consulting</span>
        <span>Risk Management</span>
        <span>Risk Consulting</span>
        <span> Credit Risk</span>
      </TextLoop>
    </h2>
  </p>
</ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">I’m a problem-solver at heart, blending my passion for data, finance, and economics with hands-on experiences that drive meaningful change. Whether launching a startup or diving into economic research, I thrive on turning complex challenges into impactful solutions while continuously learning and growing along the way.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#about" className="button about-button">ABOUT ME</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
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
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img className="illustration-image" src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
