import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  justify-content: space-between; /* Distribute sections horizontally */
  align-items: flex-start; /* Align sections at the top */
  gap: 2rem;

  .left-section {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    gap: 2rem;
  }

  .logo {
    font-size: 2.8rem;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }

  .social-media {
    display: flex;
    gap: 1rem;
    justify-content: flex-start; /* Align items to the start */
    margin-top: 2rem; /* Add margin top to ensure space between contact info and icons */
  }

  .social-media img {
    width: 3rem;
    height: 3rem;
  }

  .social-media a {
    display: block;
  }
  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

 .contact-info {
  text-align: left; /* Align content to the left */
  margin-bottom: 2rem; /* Ensure space below the contact info for the social media icons */
}

.contact-title {
  font-size: 2rem;
  font-weight: bold;
  color: #6cb4ee; /* Blue shade */
  margin-bottom: 1rem;
}

.contact-item {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.contact-item a {
  color: #ffffff;
  text-decoration: none;
}

.contact-item a:hover {
  color: #6cb4ee; /* Blue highlight on hover */
}

  @media (max-width: 800px) {
    flex-direction: column; /* Stack sections vertically */
    align-items: flex-start; /* Align sections to the left */
    padding: 4rem 10rem;

    .contact-info {
      text-align: left; /* Align contact info to the left for smaller screens */
      margin-top: 2rem;
    }
  }
    /* Portfolio Title */
.portfolio-title {
  font-size: 2rem; /* Keep the original font size */
  font-weight: bold;
  color: #6cb4ee; /* Blue color */
  margin: 0; /* Remove any margins */
}
  /* Quick Links Section */
.quick-links-title {
  font-size:2rem;
  font-weight: bold;
  color: #6cb4ee; /* Blue shade for title */
  margin-bottom: 1rem;
}

.quick-links-list a {
  text-decoration: none;
  font-size: 1.2rem;
  color: #ffffff; /* White color for links */
  transition: color 0.3s ease;
}

.quick-links-list a:hover {
  color: #6cb4ee; /* Blue color when hovered */
}


  @media (max-width: 600px) {
    padding: 4rem 1rem;

    .contact-title,
    .contact-item {
      font-size: 1rem; /* Adjust font size for smaller screens */
    }

    .social-media img {
      width: 2.5rem;
      height: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;
