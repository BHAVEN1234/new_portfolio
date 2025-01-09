import styled, { keyframes } from "styled-components";

// Continuous scrolling animation (left to right)
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0); /* Start from the first skill */
  }
  100% {
    transform: translateX(-100%); /* Move to the left, until the last skill reaches the end */
  }
`;

export const SkillsContainer = styled.div`
  text-align: center;
  margin: 3rem 0;

  h2 {
    font-size: 3.5rem; /* Larger title */
    margin-bottom: 3rem;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }

  .skills-wrapper {
    overflow: hidden; /* Hide overflow for smooth scrolling */
    width: 100%; /* Full-width container */
    position: relative;
  }

  .skills-scroll {
    display: flex;
    gap: 3rem; /* Add spacing between skill items */
    animation: ${scrollAnimation} 30s linear infinite; /* Continuous smooth scrolling */
    width: max-content; /* Ensure the content width is dynamic and doesn't force an unwanted scroll */
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px; /* Box size */
    height: 140px;
    flex-shrink: 0; /* Prevent items from shrinking */
    background: rgba(255, 255, 255, 0.1); /* Light semi-transparent box background */
    border-radius: 10px; /* Rounded corners */
    padding: 1rem; /* Padding inside the box */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Optional: Add shadow for depth */
    opacity: 1; /* Visible */

    .skill-icon {
      width: 70px; /* Icon size */
      height: 70px;
      margin-bottom: 0.5rem; /* Space between icon and text */
    }

    p {
      font-size: 1.75rem; /* Text size */
      color: #FFFFFF; /* Text color */
      text-align: center; /* Center-align text */
    }
  }

  /* Duplicate the skill items to allow a seamless scroll */
  .skills-scroll > .skill-item {
    flex: 0 0 auto; /* Prevent shrinking */
    width: 140px;
    height: 140px;
  }

  .skills-scroll::before {
    content: '';
    display: flex;
    gap: 3rem;
    width: max-content;
    animation: none; /* Disable the animation */
  }
`;

