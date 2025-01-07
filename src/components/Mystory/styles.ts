import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 50px 0;
  background-color: transparent;
`;

export const SkillsHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  .icon {
    font-size: 1.5rem;
  }
`;

export const SkillsContainer = styled.div`
  position: relative;
  height: 300vh; // Adjust this value based on how much scrolling you want
  overflow: hidden;
`;

export const SkillCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 80%;
  max-width: 800px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.5s ease;

  &.active {
    transform: translate(-50%, -50%);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const SkillContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SkillImage = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const SkillDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
`;

export const SkillLink = styled.a`
  color: #1e90ff;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
