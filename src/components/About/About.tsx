import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Resume from "../../assets/Saakshi_Dedhia_Resume.pdf"; // Add your resume file
import blockchain from "../../assets/blockchain.png"

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I’m a curious and driven graduate student at USC, diving deep into the world of Applied Economics and Econometrics. Over the years, I’ve been fortunate to experience both the challenges and rewards of entrepreneurship, having co-founded Sparsh Skin—a journey that taught me how to turn ideas into action, lead teams, and make data-driven decisions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Currently, I’m focused on combining my love for economics with a passion for leadership and collaboration. As President of the Economic Graduate Student Association and an active member of multiple USC communities, I’m always looking for ways to inspire and support those around me.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I’m excited to continue my journey by taking on new opportunities that allow me to grow, contribute, and make a real-world impact in the areas of finance, risk management, and data analysis. Let’s connect and create something meaningful together!
          </p>
        </ScrollAnimation>
        {/* Location and Open to Work Section */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
  <div style={{ textAlign: 'left', margin: '2rem 0' }}>
    <p style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
      <strong style={{ color: '#6CB4EE' }}>📍 Location:</strong>
      <span style={{ color: '#FFFFFF', fontSize: '1.8rem' }}> Los Angeles</span>
      <span style={{ color: '#FFFFFF', fontSize: '1.8rem' }}> (Open to relocate)</span>
    </p>
    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#6CB4EE', marginTop: '1rem' }}>
      <span style={{ marginRight: '0.5rem' }}>✅</span>
      <span>Open to work</span>
    </p>
  </div>
  <div style={{ marginTop: '3rem' }}>
  {/* Bigger Rectangular Button with Slightly Rounded Corners */}
  <a
    href={Resume}  // Assuming 'Resume' is the path to your resume file
    download
    style={{
      padding: '1.5rem 4rem',  // Larger padding for a bigger button
      backgroundColor: '#6CB4EE',  // Orange color for the button
      color: '#fff',  // White text color
      fontSize: '1.6rem',  // Slightly larger font size
      fontWeight: 'bold',  // Bold text
      borderRadius: '10px',  // Slightly rounded corners (10px for subtle effect)
      textDecoration: 'none',  // Remove underline from the link
      transition: 'background-color 0.3s ease',  // Smooth transition for background color on hover
      marginLeft: '1rem',  // Align to the left of the parent element
      display: 'inline-block',  // Make the link behave like a block element
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',  // Optional shadow for depth
    }}
  >
    RESUME
  </a>
</div>



</ScrollAnimation>
        <div className="hard-skills">
          {/* Add skill icons */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={blockchain} alt="blockchain" />
            </ScrollAnimation>
          </div>
        </div>
      {/* Download Resume Button */}

      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="Saakshi Dedhia" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
