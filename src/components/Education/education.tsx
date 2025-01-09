import React, { useEffect, useState } from "react";
import { EducationContainer } from "./styles"; 
import masterLogo from "../../assets/master1.png"; // Path to USC logo
import btech from "../../assets/btech.png"; // Path to Mithibai logo

export function Education() {
  const [isVisible, setIsVisible] = useState(false);

  // Education data array
  const educationData = [
    {
      title: "University of Southern California (USC)",
      date: "Aug 2024 - May 2026, Los Angeles, CA",
      degree: "MS Applied Economics and Econometrics (STEM)",
      gpa: "3.85/4.0", // Added GPA for Master's
      icone: masterLogo, // Use imported USC logo
    },
    {
      title: "Mithibai College of Arts (Autonomous)",
      date: "Aug 2020 - May 2023, Mumbai, India",
      degree: "Bachelor of Arts, Economics",
      // No GPA added for Bachelor’s degree
      icone: btech, // Use imported Mithibai logo
    },
  ];

  // Intersection observer logic to trigger fade-in animation when item comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // 50% of the element must be in view
    );

    const items = document.querySelectorAll(".education-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <EducationContainer id="education">
    <h2>Academic Milestones</h2>
    <blockquote className="education-quote">
      Where curiosity met structured learning
    </blockquote>
    <div className="education-wrapper">
      {educationData.map((edu, index) => (
        <div
          className={`education-item ${isVisible ? "fade-in" : ""}`}
          key={index}
        >
          <div className="education-logo">
            <img src={edu.icone} alt={`${edu.title} logo`} />
          </div>
          <div className="education-content">
            <h3 className="education-title">{edu.title}</h3>
            <p className="education-date">{edu.date}</p>
            <p className="education-degree">{edu.degree}</p>
            {edu.gpa && <p className="education-gpa">GPA: {edu.gpa}</p>}
          </div>
        </div>
      ))}
    </div>
  
    </EducationContainer>
  );
}

export default Education;
