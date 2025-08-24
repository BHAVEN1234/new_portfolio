import styled, { keyframes } from 'styled-components';

/* Global Styles */
export const GlobalStyles = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: black; /* Dark theme */
`;

/* Section Styling */
export const ExperienceSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* Section Heading */
export const ExperienceHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

/* Animation for Fade-in Effect */
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* Memberships Grid Layout */
export const MembershipsGrid = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  
  /* First row → 3 items */
  grid-template-columns: repeat(3, 1fr);

  /* Second row → 2 items */
  & > :nth-child(n + 4) {
    grid-column: span 1;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/* Soft Light Blue Gradient Animation */
const gradientGlow = keyframes`
  0% {
    background: linear-gradient(135deg, rgba(200, 230, 255, 0.7), rgba(130, 200, 255, 0.7));
    box-shadow: 0 0 5px rgba(200, 230, 255, 0.5);
  }
  50% {
    background: linear-gradient(135deg, rgba(220, 245, 255, 0.9), rgba(150, 220, 255, 0.9));
    box-shadow: 0 0 15px rgba(220, 245, 255, 0.9);
  }
  100% {
    background: linear-gradient(135deg, rgba(200, 230, 255, 0.7), rgba(130, 200, 255, 0.7));
    box-shadow: 0 0 5px rgba(200, 230, 255, 0.5);
  }
`;

/* Membership Card */
export const MembershipCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, rgba(200, 230, 255, 0.6), rgba(150, 215, 255, 0.6)); /* Lighter blue gradient */
  padding: 15px;
  border-radius: 15px;
  border: 1px solid white;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    border: 2px solid rgba(150, 220, 255, 0.9);
    animation: ${gradientGlow} 1.5s infinite alternate ease-in-out;
  }
`;

/* Logo Wrapper */
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 10px;
`;

/* Logo Image */
export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

/* Membership Details */
export const MembershipDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
    white-space: nowrap;
  }

  p {
    font-size: 14px;
  }
`;
