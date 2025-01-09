import styled, { keyframes } from "styled-components";

// Keyframe for fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const EducationContainer = styled.div`
  text-align: center;
  margin: 3rem auto;
  padding: 2rem;
  max-width: 1200px;
  border-radius: 15px;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
    color: #FFFFFF; /* White text color */
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }

  .education-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
  }

  .education-item {
    display: flex;
    width: 100%;
    max-width: 900px;
    background: #333333;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

    /* Animation for fade-in effect */
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
    animation-delay: 0.3s;

    &:hover {
      box-shadow: 0 0 25px rgba(0, 162, 255, 1), 0 0 50px rgba(0, 162, 255, 0.7);
      transform: scale(1.05);
      background-color: #444444;
    }

    .education-logo {
      flex-shrink: 0;
      width: 150px;
      height: 150px;
      background: #222222;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin: 1rem;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0 0 25px rgba(0, 162, 255, 0.8);
        transform: scale(1.1);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        transition: transform 0.3s ease;
      }
    }

    .education-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem;

      .education-title {
        font-size: 2rem;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 1rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
      }

      .education-degree {
        font-size: 1.8rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 1rem;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
      }

      p {
        font-size: 1.4rem;
        font-weight: 500;
        color: #ffffff;
        line-height: 1.6;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
      }

      .education-gpa {
        font-size: 1.4rem;
        font-weight: 500;
        color: #ffcc00;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        margin-top: 1rem;
      }
    }
  }

  .education-quote {
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
