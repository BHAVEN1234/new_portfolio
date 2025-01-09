import styled from "styled-components";

export const ExperienceSection = styled.section`
  padding: 3rem; /* Increased padding for better spacing */
  background: transparent;
  font-family: Arial, sans-serif;
`;
export const ExperienceHeading = styled.h2`
  text-align: center;
  font-size: 3rem; /* Keep the increased font size */
  color: #f0f0f0;
  font-weight: bold;
  margin-bottom: 2rem; /* Reduced margin for less space */
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 2.2rem; /* Increased icon size */
    margin-right: 1rem; /* Increased space between icon and text */
    color: #6cb4ee;
  }
`;
export const Quote = styled.p`
  // font-style: italic;
  text-align: center;
  margin: 2rem 0;
  font-size: 1.6rem; /* Smaller font size for the quote */
  color: #fff; /* White color for the quote */
  border-radius: 10px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  /* Adding quotation marks before and after the quote */
  &::before {
    content: "“"; /* Left double quote */
    font-size: 2.4rem; /* Adjusted size for the quotation mark */
    color: #f0f0f0; /* Matching color with the quote text */
    margin-right: 0.5rem;
  }

  &::after {
    content: "”"; /* Right double quote */
    font-size: 2.4rem; /* Adjusted size for the quotation mark */
    color: #f0f0f0; /* Matching color with the quote text */
    margin-left: 0.5rem;
  }
`;

export const Timeline = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #6cb4ee, #3498db);
    transform: translateX(-50%);
    z-index: 0; /* Ensure it stays behind the timeline items */
  }
`;

export const TimelineItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem; /* Increased margin for better spacing */
  position: relative;
  opacity: 0;
  transform: translateY(30px); /* Increased Y translation for animation */
  transition: opacity 1s ease-out, transform 1s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.active {
    .timeline-content {
      background-color: rgba(173, 216, 230, 0.4);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    }

    .timeline-icon {
      background: #6cb4ee;
    }
  }

  &:hover {
    .timeline-content {
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
    }

    .timeline-icon {
      background: linear-gradient(135deg, #6cb4ee, #4a9fe1);
    }
  }
`;

export const TimelineContent = styled.div`
  width: 45%; /* Slightly increased width */
  padding: 2rem; /* Increased padding */
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  color: #f0f0f0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  z-index: 1; /* Ensure content appears above the line */

  &.left {
    margin-right: auto;
    text-align: right;
  }

  &.right {
    margin-left: auto;
    text-align: left;
  }

  .company {
    font-size: 2rem; /* Increased company font size */
    font-weight: bold;
    color: #6cb4ee;
  }

  .role {
    font-size: 1.5rem; /* Increased role font size */
    margin: 0.5rem 0;
  }

  .date {
    font-size: 1.2rem; /* Increased date font size */
    font-style: italic;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(40, 77, 119, 0.5);
  }
`;

export const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #6cb4ee, #4a9fe1);
  color: #fff;
  width: 80px; /* Increased icon size */
  height: 80px; /* Increased icon size */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, background 0.3s ease;
  z-index: 1; /* Ensure icon appears above the line */

  .icon {
    font-size: 2.5rem; /* Increased icon size */
  }

  &:hover {
    transform: translateX(-50%) scale(1.3); /* Increased scale on hover */
    background: #6cb4ee;
    box-shadow: 0 8px 20px #6cb4ee;
  }
`;
