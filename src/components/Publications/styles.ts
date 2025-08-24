import styled from 'styled-components';

export const ExperienceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  background: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const ExperienceHeading = styled.h2`
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 3rem;
  font-family: 'Roboto', sans-serif;
  animation: fadeIn 1s ease-out;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  border-left: 4px solid #6CB4EE; /* Updated blue color */
  animation: fadeInUp 1s ease-out;
`;

export const TimelineItem = styled.div<{ index: number }>`
  position: relative;
  margin: 2.5rem 0;
  text-align: left;
  opacity: 0;
  animation: fadeInItem 1s ease-out forwards;
  animation-delay: ${(props) => props.index * 0.3}s;
`;

export const TimelineContent = styled.div`
  background: #2b2b2b;
  padding: 2rem;
  border-radius: 1.5rem;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  margin-left: 50px;
  width: 80%;

  &:hover {
    background: #6CB4EE; /* Updated hover to blue */
    transform: translateY(-5px);
  }

  h3 {
    font-size: 2rem; /* Increased font size */
    margin-bottom: 1rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.4rem; /* Increased font size */
    margin-bottom: 0.8rem;
    font-weight: normal;
    color: #f0f0f0;
  }

  p {
    font-size: 1.2rem; /* Increased font size */
    color: #ccc;
  }

  /* Ensure the publication date is styled properly */
  .publication-date {
    color: #bbb;  /* Set it to a light gray for readability */
    font-size: 1.1rem; /* Increased font size */
    margin-top: 0.5rem;
    transition: color 0.3s ease;
  }

  &:hover .publication-date {
    color: #ffffff; /* Change to white on hover for contrast */
  }

  a {
    font-size: 1.3rem; /* Increased font size */
    color: #ffffff;
    text-decoration: none;
    background: #6CB4EE; /* Updated button color */
    padding: 1rem 2.5rem;
    border-radius: 30px;
    margin-top: 1rem;
    display: inline-block;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: #ffffff;
      color: #6CB4EE; /* Updated hover state */
      transform: translateY(3px);
    }
  }
`;


export const TimelineIcon = styled.div`
  position: absolute;
  left: -45px;
  width: 40px;
  height: 40px;
  background-color: #6CB4EE; /* Updated blue color */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.4rem;
  z-index: 1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Quote = styled.blockquote`
  font-style: italic;
  color: #ffffff;
  margin: 2rem 0;
  padding: 1.5rem;
  border-left: 6px solid #6CB4EE; /* Updated quote border */
  background: #333;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

// Animations
const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const fadeInItem = `
  @keyframes fadeInItem {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const GlobalStyles = styled.div`
  ${fadeIn}
  ${fadeInUp}
  ${fadeInItem}
`;

