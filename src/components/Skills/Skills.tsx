import React from "react";
import { SkillsContainer } from "./styles"; // Styled-components styles file
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Skills() {
  const skills = [
    { name: "Tableau", icon: wordpress },
    { name: "Data Visualization", icon: shopify },
    { name: "Modeling", icon: htmlIcon },
    { name: "Research", icon: cssIcon },
    { name: "Data Analytics", icon: sassIcon },
    { name: "Blockchain", icon: jsIcon },
    { name: "Matlab", icon: nodeIcon },
    { name: "Python", icon: reactIcon },
    { name: "MySQL", icon: typescriptIcon },
    { name: "R", icon: vueIcon },
    { name: "Leadership", icon: boostrapIcon },
  ];

  return (
    <SkillsContainer id="skills">
      <h2>My Skills</h2>
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
