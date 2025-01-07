import styled from "styled-components";

export const ExperienceSection = styled.section`
  padding: 2rem;
  background: transparent; /* Fixed the typo 'transferant' to 'transparent' */
  font-family: Arial, sans-serif;
`;

export const ExperienceHeading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #f0f0f0;
  font-weight: bold;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 1.8rem;
    margin-right: 0.5rem;
    color: #6cb4ee;
  }
`;

export const Timeline = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #6cb4ee, #3498db);
    transform: translateX(-50%);
  }
`;

export const TimelineItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out; /* Smoother animation */

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.active {
    /* Highlight the item when clicked */
    .timeline-content {
      background-color: rgba(173, 216, 230, 0.4); /* Light blue background */
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    }

    .timeline-icon {
      background: #6cb4ee; /* Light blue icon */
    }
  }

  &:hover {
    /* Apply a lighter background or shadow when hovering */
    .timeline-content {
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
    }

    .timeline-icon {
      background: linear-gradient(135deg, #6cb4ee, #4a9fe1);
    }
  }
`;

export const TimelineContent = styled.div`
  width: 40%;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  color: #f0f0f0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &.left {
    margin-right: auto;
    text-align: right;
  }

  &.right {
    margin-left: auto;
    text-align: left;
  }

  .company {
    font-size: 1.5rem;
    font-weight: bold;
    color: #6cb4ee;
  }

  .role {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  .date {
    font-size: 1rem;
    font-style: italic;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(40, 77, 119, 0.5);
  }
`;

export const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #6cb4ee, #4a9fe1);
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, background 0.3s ease;

  .icon {
    font-size: 1.8rem;
  }

  &:hover {
    transform: translateX(-50%) scale(1.2);
    background: #6cb4ee; /* Apply light blue on hover */
    box-shadow: 0 8px 20px #6cb4ee;
  }
`;
