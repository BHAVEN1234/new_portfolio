import styled, { keyframes } from "styled-components";

// Continuous scrolling animation (left to right)
const scrollAnimation = keyframes`
  0% {
    transform: translateX(-100%); /* Start off-screen on the left */
  }
  100% {
    transform: translateX(0); /* End fully visible */
  }
`;

// Fade-in animation for individual skill items
const fadeIn = keyframes`
  0% {
    opacity: 0; /* Start as hidden */
    transform: translateY(20px); /* Start slightly lower */
  }
  100% {
    opacity: 1; /* Fade in */
    transform: translateY(0); /* Move to normal position */
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
    gap: 3rem; /* Add more spacing between skill items */
    animation: ${scrollAnimation} 30s linear infinite; /* Continuous smooth scrolling */
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px; /* Larger box size */
    height: 140px; /* Larger box size */
    flex-shrink: 0; /* Prevent items from shrinking */
    background: rgba(255, 255, 255, 0.1); /* Light semi-transparent box background */
    border-radius: 10px; /* Rounded corners */
    padding: 1rem; /* Padding inside the box */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Optional: Add shadow for depth */
    opacity: 0; /* Initially hidden */
    animation: ${fadeIn} 1s ease-in-out forwards; /* Apply fade-in animation */

    /* Add staggered delays for fade-in animation */
    &:nth-child(1) {
      animation-delay: 0.5s;
    }
    &:nth-child(2) {
      animation-delay: 1s;
    }
    &:nth-child(3) {
      animation-delay: 1.5s;
    }
    &:nth-child(4) {
      animation-delay: 2s;
    }
    &:nth-child(5) {
      animation-delay: 2.5s;
    }

    .skill-icon {
      width: 70px; /* Larger icon size */
      height: 70px; /* Larger icon size */
      margin-bottom: 0.5rem; /* Space between icon and text */
    }

    p {
      font-size: 1.75rem; /* Larger text size */
      color: #FFFFFF; /* Text color */
      text-align: center; /* Center-align text */
    }
  }
`;
