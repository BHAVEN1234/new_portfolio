import React, { useEffect, useRef, useState } from "react";
import {
  ExperienceSection,
  ExperienceHeading,
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineIcon,
} from "./styles";

export function Experience() {
  const timelineRef = useRef<HTMLUListElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          if (entry.isIntersecting) {
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
          } else {
            setVisibleItems((prev) => prev.filter((item) => item !== index));
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const content = {
    heading: "Experience",
    icon: "💼",
    timeline: [
      { company: "Sparsh Skin", role: "Co-Founder | Full Time", date: "August 2020 – July 2024" },
      { company: "Saaro Investments", role: "Business Head | Part-Time", date: "April 2018 – July 2024" },
      { company: "Aarti Industries Limited", role: "Finance Intern | Internship", date: "Oct 2023 - Dec 2023" },
      { company: "Amit Gopani & Associates", role: "Finance Intern | Internship", date: "April 2023 – May 2023" },
    ],
  };

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  return (
    <ExperienceSection id="experience">
      <ExperienceHeading>
         <h2>{content.heading}</h2>
      </ExperienceHeading>
      <Timeline ref={timelineRef}>
        {content.timeline.map((item, index) => (
          <TimelineItem
            key={index}
            data-index={index}
            className={`timeline-item ${visibleItems.includes(index) ? "visible" : ""} ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)} // Handle click for active state
          >
            <TimelineIcon>
              <span className="icon">{content.icon}</span>
            </TimelineIcon>
            <TimelineContent className={index % 2 === 0 ? "left" : "right"}>
              <h3 className="company">{item.company}</h3>
              <p className="role">{item.role}</p>
              <p className="date">{item.date}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
}

export default Experience;
