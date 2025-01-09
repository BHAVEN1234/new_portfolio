import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  /* About image styling */
  .about-image {
    text-align: center;
    position: relative; /* Needed to position the overlay */

    img {
      margin-top: 2rem;
      width: 75%;
      border-radius: 20px; /* Rounded corners */
      transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition on hover */
      animation: fadeInUp 1s ease-in-out;

      /* Initial image state */
      &:hover {
        transform: scale(1.05); /* Slight zoom effect */
        box-shadow: 0px 0px 15px 5px rgba(108, 180, 238, 0.8);  /* Light blue glowing effect on hover */
      }
    }
  }

  /* Animation for fadeInUp */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Media query for mobile responsiveness */
  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      img {
        width: 100%;
        border-radius: 20px; /* Rounded corners */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
    }
  }

  /* Media query for medium screens */
  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      max-width: 100%;

      img {
        width: 100%;
        border-radius: 20px; /* Rounded corners */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
    }
  }
`;
