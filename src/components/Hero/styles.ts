import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);

  .hero-text {
    max-width: 50%; /* Ensures proper alignment */
    text-align: left;

    & > p {
      font-size: 9rem;
    }

    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }

    .button {
      margin-top: 5rem;
      padding: 1.4rem 6rem;
      background-color: #ffa500;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
      transition: all 0.3s ease;

      &:hover {
        background-color: #e69500;
        color: #000;
      }
    }
  }

  /* Dynamic text - RGB(108,180,238) color */
  .dynamic-text {
    color: rgb(108, 180, 238); /* Set the color to rgb(108,180,238) */
    font-size: 3rem; /* Adjust font size as per your needs */
  }

  /* Saakshi Dedhiya - Orange color */
  .name-text {
    color: #ffa500; /* Orange color */
    font-size: 3.5rem; /* Adjust size for better prominence */
    font-weight: bold;
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .illustration-image {
      width: 80%; /* Adjust size as needed */
      position: relative;
      border-radius: 50%; /* Circular shape */
      object-fit: cover; /* Ensures the image fits perfectly */
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); /* Subtle shadow */

      &:hover {
        transform: scale(1.15) perspective(800px) rotateX(10deg) rotateY(-10deg);
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.4),
          0px 0px 50px rgba(100, 200, 255, 0.6); /* Soft glow effect */
      }

      &:hover::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 120%;
        height: 120%;
        background: radial-gradient(circle, rgba(0, 123, 255, 0.4), transparent);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(1);
        animation: ripple 1.5s infinite ease-out;
        z-index: -1;
      }
    }
  }

  @keyframes ripple {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }

  /* Floating animation for subtle movement */
  .illustration-image {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  /* Responsive Design */
  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .hero-text {
      text-align: center;
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35%;
  }

  @media (max-width: 480px) {
    margin-top: 45%;
  }
`;
