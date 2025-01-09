import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
.hey-text {
  font-size: 3.5rem; /* Adjust font size to make it larger */
  font-weight: bold; /* Make it bold for better visibility */
  margin-bottom: 1rem; /* Add some margin below for spacing */
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between text and image */
}

.hey-text img {
  width: 35px; /* Slightly increase the image size */
}

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
  padding: 1.4rem 6rem; /* Ensure enough padding for readability */
  background-color: #6CB4EE; /* Button background color */
  color: #fff; /* Text color */
  font-size: 1.8rem; /* Increase font size for better readability */
  font-weight: 600; /* Slightly bold font */
  letter-spacing: 0.1rem; /* Adds spacing between letters */
  text-align: center; /* Ensure text is centered */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Optional shadow for contrast */
  border-radius: 5px; /* Rounded corners */
  transition: all 0.3s ease;

  &:hover {
    background-color: #5ba3d8; /* Slightly darker hover color */
    color: #000; /* Change text color on hover */
    text-shadow: none; /* Remove shadow on hover for simplicity */
  }
}
  }

  /* Dynamic text - RGB(108,180,238) color */
  .i-am-into {
  display: inline; /* Make it inline */
  font-size: 3rem; /* Match the size with .dynamic-text */
  margin-right: 1rem; /* Add some spacing between "I am into" and dynamic text */
}

.dynamic-text {
  display: inline; /* Ensure the dynamic text is on the same line */
  color: rgb(108, 180, 238); /* Set the color */
  font-size: 3rem; /* Same font size as .i-am-into */
  font-weight: bold; /* Optional: Bold for better visibility */
  animation-delay: 0.3s; /* Delay if needed for smoother transition */
  margin-left:1rem;
}
.small-resume {
  margin-top: 2rem; /* Adjust the space as needed */
  font-size:2rem; /* Optional: Adjust font size if necessary */
  line-height: 1.5; /* Optional: Adjust line height for better readability */
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
