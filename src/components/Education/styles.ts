import styled, { keyframes } from "styled-components";

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
  margin: clamp(2rem, 4vw, 3rem) auto;
  padding: clamp(1rem, 2vw, 2rem);
  max-width: min(90%, 1200px);
  border-radius: 15px;

  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: clamp(2rem, 4vw, 3rem);
    color: #FFFFFF;
    font-weight: bold;
    letter-spacing: max(1px, 0.15vw);
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }

  .education-wrapper {
    display: flex;
    flex-direction: column;
    gap: clamp(2rem, 4vw, 4rem);
    align-items: center;
    width: 100%;
  }

  .education-item {
    display: flex;
    width: 100%;
    max-width: min(90%, 900px);
    background: #333333;
    border-radius: clamp(10px, 2vw, 15px);
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
    animation-delay: 0.3s;
    flex-direction: row;
    gap: clamp(1rem, 2vw, 2rem);

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: clamp(1rem, 3vw, 2rem);
    }

    &:hover {
      box-shadow: 0 0 25px rgba(0, 162, 255, 1), 0 0 50px rgba(0, 162, 255, 0.7);
      transform: scale(1.02);
      background-color: #444444;

      @media (max-width: 768px) {
        transform: scale(1.01);
      }
    }

    .education-logo {
      flex-shrink: 0;
      width: clamp(100px, 20vw, 150px);
      height: clamp(100px, 20vw, 150px);
      background: #222222;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin: clamp(0.5rem, 1vw, 1rem);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0 0 25px rgba(0, 162, 255, 0.8);
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    .education-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: clamp(1rem, 2vw, 2rem);
      flex: 1;

      @media (max-width: 768px) {
        text-align: center;
        padding: clamp(0.5rem, 1vw, 1rem);
      }

      .education-title {
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: bold;
        color: #ffffff;
        margin-bottom: clamp(0.5rem, 1vw, 1rem);
        letter-spacing: max(1px, 0.1vw);
        text-transform: uppercase;
      }

      .education-degree {
        font-size: clamp(1.3rem, 2.5vw, 1.8rem);
        font-weight: 600;
        color: #ffffff;
        margin-bottom: clamp(0.5rem, 1vw, 1rem);
      }

      p {
        font-size: clamp(1rem, 2vw, 1.4rem);
        font-weight: 500;
        color: #ffffff;
        line-height: 1.6;
      }

      .education-gpa {
        font-size: clamp(1rem, 2vw, 1.4rem);
        font-weight: 500;
        color: #ffcc00;
        margin-top: clamp(0.5rem, 1vw, 1rem);
      }
    }
  }

 .education-quote {
  text-align: center;
  margin: clamp(1.5rem, 3vw, 2rem) auto;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: #fff;
  border-radius: 10px;
  width: min(90%, 800px);
  line-height: 1.5;

  &::before {
    content: '"'; /* Starting quote */
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    color: #f0f0f0;
    margin-right: 0.5rem;
  }

  &::after {
    content: '"'; /* Ending quote and text */
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    color: #f0f0f0;
    margin-left: 0.5rem;
  }
}

`;
