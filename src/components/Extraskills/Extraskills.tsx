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
import Planning from "../../assets/Planning.png"
import Modeling from "../../assets/Modeling.png"
import Stress from "../../assets/Stress.png"
import data from "../../assets/data.png"
import VAR from "../../assets/VAR.png"
import Scenario  from "../../assets/Scenario.png"
import Predictive  from "../../assets/Predictive.png"
import  Risk from "../../assets/Risk.png"
import instruments from "../../assets/instruments.png"
import teamwork from "../../assets/teamwork.png"
import Financial from "../../assets/Financial.svg"
import Communication from "../../assets/Communication.png"
import Problem from "../../assets/Problem.png"
import Detail from "../../assets/Detail.png"

export function Extraskills() {
  const skills = [
    { name: "Business Analysis", icon: shopify },
    { name: "Data Analysis", icon: data },
    { name: "Financial Modeling & Analysis", icon: Financial },
    { name: "Econometrics Modeling", icon: Modeling },
    { name: "Stress Testing", icon: Stress },
    { name: "VaR Analysis", icon: VAR },
    { name: "Scenario Analysis", icon: Scenario },
    { name: "Credit Risk Model", icon: Risk },
    { name: "Predictive Analysis", icon: Predictive },
    { name: "Research", icon: cssIcon },
    { name: "Financial metrics & instruments", icon: instruments },
    { name: "Leadership", icon: boostrapIcon },
    { name: "Tam Work", icon: teamwork },
    { name: "Communication", icon: Communication },
    { name: "Problem-Solving", icon: Problem },
    { name: "Attention to Detail", icon: Detail },
    
  ];

  return (
    <SkillsContainer id="skills">
      <h2>What I Bring To The Table</h2>
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
