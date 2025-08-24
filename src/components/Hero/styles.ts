import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);

  .hey-text {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .hey-text img {
    width: clamp(25px, 4vw, 35px);
  }

  .hero-text {
    max-width: 50%;
    text-align: left;

    & > p {
      font-size: clamp(4rem, 8vw, 9rem);
    }

    h1 {
      font-size: clamp(3rem, 6vw, 7rem);
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
      font-size: clamp(1.5rem, 3vw, 2rem);
    }

    p.small-resume {
      margin-bottom: 5rem;
      font-size: clamp(1.2rem, 2vw, 2rem);
    }

    .button {
      margin-top: 5rem;
      padding: clamp(1rem, 2vw, 1.4rem) clamp(3rem, 5vw, 6rem);
      background-color: #6cb4ee;
      color: #fff;
      font-size: clamp(1.4rem, 2vw, 1.8rem);
      font-weight: 600;
      letter-spacing: 0.1rem;
      text-align: center;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      transition: all 0.3s ease;

      &:hover {
        background-color: #5ba3d8;
        color: #000;
        text-shadow: none;
      }
    }
  }

  .i-am-into {
    display: inline-block;
    font-size: clamp(1.8rem, 3vw, 3rem);
    margin-right: 1rem;
    letter-spacing: 0.15em;
  }

  .dynamic-text {
    display: inline-block;
    color: rgb(108, 180, 238);
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: bold;
    margin-left: 1rem;
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  .small-resume {
    margin-top: 2rem;
    font-size: clamp(1.4rem, 2vw, 2rem);
    line-height: 1.5;
  }

  .name-text {
    color: #ffa500;
    font-size: clamp(2rem, 4vw, 3.5rem);
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
      font-size: clamp(2rem, 3vw, 3rem);
      width: clamp(2.5rem, 3vw, 3.5rem);
    }
  }
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .illustration-image {
    width: 80%;
    position: relative;
    object-fit: cover;
    transition: filter 0.3s ease;
    
    &:hover {
      filter: 
        drop-shadow(0 0 10px rgba(100, 200, 255, 0.8))
        drop-shadow(0 0 20px rgba(100, 200, 255, 0.6))
        drop-shadow(0 0 30px rgba(100, 200, 255, 0.4));
    }
  }
}


  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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

  @media (max-width: 1200px) {
    gap: 4rem;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    gap: 4rem;

    .hero-text {
      max-width: 90%;
      text-align: center;
    }

    .hero-image {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    padding-top: 20%;

    .hero-image {
      width: 80%;
    }

    .social-media {
      justify-content: center;
      padding-left: 0;
    }
  }

  @media (max-width: 600px) {
    margin-top: 25%;

    .hero-text {
      max-width: 95%;
    }

    .hero-image {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    margin-top: 35%;
    padding-top: 25%;

    .hey-text {
      justify-content: center;
    }

    .button {
      width: 100%;
    }
  }
`;
