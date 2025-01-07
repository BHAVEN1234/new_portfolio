import styled, { keyframes } from "styled-components";

// Lighting effect for active state (on click)
const lightingEffect = keyframes`
  0% {
    box-shadow: 0 0 0px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
  }
  100% {
    box-shadow: 0 0 0px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.6);
  }
`;

// Light blue hover effect with a more subtle gradient for box shadow
const hoverEffect = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 162, 255, 0.5), 0 0 15px rgba(0, 162, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 15px rgba(0, 162, 255, 0.8), 0 0 30px rgba(0, 162, 255, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 162, 255, 0.5), 0 0 15px rgba(0, 162, 255, 0.7);
  }
`;

// Container styling for the whole section
export const EducationContainer = styled.div`
  text-align: center;
  margin: 3rem auto;
  padding: 2rem;
  max-width: 1200px;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }

  .education-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    flex-wrap: wrap;
  }

  .education-item {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2.5rem;
    border-radius: 20px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    background: rgba(232, 236, 241, 0.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    opacity: 1;
    transition: all 0.3s ease;

    &:hover {
      animation: ${hoverEffect} 1.5s ease-in-out infinite;
      transform: scale(1.05);
      background: rgba(0, 162, 255, 0.1);
    }

    &:active {
      animation: ${lightingEffect} 0.5s ease-out;
      transform: scale(1.05);
    }

    .education-content {
      text-align: left;
    }

    .education-title {
      font-size: 2.2rem; /* Normal size for title */
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 1.5rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow for readability */
    }

    .education-degree {
      font-size: 2.4rem; /* Slightly larger for the degree name */
      font-weight: 600;
      color: #FFFFFF; /* Soft blue color for the degree */
      margin-bottom: 1rem;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Light shadow for subtle emphasis */
    }

    p {
      margin: 0.8rem 0;
      font-size: 1.5rem;
      font-weight: 600;
      color: #ffffff;
      line-height: 1.8;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }

    .education-image {
      flex-shrink: 0;
      width: 140px;
      height: 140px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      color: #ffffff;
      margin: 1.5rem 0;
      box-shadow: 0 6px 12px rgba(188, 175, 175, 0.3);
    }
  }
`;
