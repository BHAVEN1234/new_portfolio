import React from "react";
import { SkillsContainer } from "./styles"; // Styled-components styles file
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import Stata from "../../assets/Stata.svg"
import PowerBi from "../../assets/PowerBi.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import Bloom from "../../assets/Bloom.png";
import hadoop from "../../assets/hadoop.svg"
import blockchain from "../../assets/blockchain.png"
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import github from "../../assets/github.svg"
import aws from "../../assets/aws.svg"
export function Skills() {
  const skills = [
    { name: "Python", icon: reactIcon },
    { name: "Tableau", icon: wordpress },
    { name: "Power BI", icon: PowerBi},
    { name: " STATA", icon: Stata },
    { name: "R", icon: vueIcon },
    { name: "MATLAB", icon: nodeIcon },
    { name: "MySQL", icon: typescriptIcon },
    { name: "Modeling", icon: htmlIcon },
    { name: "Bloomberg Terminal", icon: Bloom },
    { name: "Hadoop", icon: hadoop },
    { name: "Blockchain", icon: blockchain },
    { name: "GitHub", icon: github },
    { name: "AWS", icon: aws },
  ];

  return (
    <SkillsContainer id="skills">
      <h2>Core Competencies</h2>
      <div className="skills-wrapper">
        <div className="skills-scroll">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </SkillsContainer>
  );
}
