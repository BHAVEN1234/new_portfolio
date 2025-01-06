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

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            As someone passionate about uncovering insights and solving complex problems, I have honed my skills in Financial Analysis, Risk Management, Data Analytics, and Econometrics through both academic rigor and hands-on experiences. A relentless learner and go-getter, I thrive on challenges that push me beyond my limits.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Currently a graduate student pursuing my Master’s in Applied Economics and Econometrics at USC, I’m someone who thrives at the intersection of finance, entrepreneurship, and making meaningful connections. I’ve always been fascinated by how numbers and strategic decisions shape businesses and economies—and I’m here to dive deeper into that world.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            In my four years as the co-founder of Sparsh Skin, a personal care startup, I got to flex my entrepreneurial muscles. From leading cross-functional teams and managing finances to overseeing product development, I wore many hats and loved every moment of it. We successfully launched 30+ products, identified 20+ new business opportunities, and grew the brand’s visibility, all while driving sustainable business practices. Through this journey, I became passionate about data-driven decision-making and financial strategy—core elements that I now bring into every project.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Currently serving as President of the Economic Graduate Student Association (EGSA), Student Ambassador for Association of Indian Students at USC, active member of Blockchain@USC and USC Global Investment Society, I’m leading initiatives to foster collaboration among students and developing my leadership and management skills further. My focus? To continue blending my love for economics with empowering others—whether through finance, mentorship, or innovative solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I am a curious, creative, and driven individual who is always seeking new challenges and opportunities to learn and grow. I am actively seeking summer 2025 internship opportunities where I can contribute to solving real-world challenges in Investment Management, Asset Management, Risk Management, and Data Analysis. Let’s connect and collaborate!
          </p>
        </ScrollAnimation>

        {/* Location and Open to Work Section */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
  <div style={{ textAlign: 'left', margin: '2rem 0' }}>
    <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
      <strong style={{ color: '#6CB4EE' }}>📍 Location:</strong>
      <span style={{ color: '#FFFFFF', fontSize: '1.3rem' }}> Los Angeles</span>
      <span style={{ color: '#FFFFFF', fontSize: '1.2rem' }}> (Open to relocate)</span>
    </p>
    <p style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#6CB4EE', marginTop: '1rem' }}>
      <span style={{ marginRight: '0.5rem' }}>✅</span>
      <span>Open to work</span>
    </p>
  </div>
</ScrollAnimation>


        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
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
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
        {/* Download Resume Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href={Resume}
            download
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#6CB4EE',
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease',
            }}
            // onMouseOver={(e) => e.target.style.backgroundColor = '#4682B4'}
            // onMouseOut={(e) => e.target.style.backgroundColor = '#6CB4EE'}
          >
          RESUME
          </a>
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
