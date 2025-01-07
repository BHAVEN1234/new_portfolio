import React from "react";
import { EducationContainer } from "./styles";

export function Education() {
  // Education data array
  const educationData = [
    {
      title: "University of Southern California, Los Angeles, California",
      date: "May 2026",
      degree: "Master of Science in Applied Economics and Econometrics (STEM)",
    },
    {
      title: "Mithibai College of Arts (Autonomous), University of Mumbai, India",
      date: "May 2023",
      degree: "Bachelor of Arts, Economics",
    },
  ];

  return (
    <EducationContainer id="education">
      <h2>Education</h2>
      <div className="education-wrapper">
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            <h3 className="education-title">{edu.title}</h3>
            <p className="education-date">{edu.date}</p>
            <p className="education-degree">{edu.degree}</p>
          </div>
        ))}
      </div>
    </EducationContainer>
  );
}

export default Education;