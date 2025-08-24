import React from 'react';
import {
  ExperienceSection,
  ExperienceHeading,
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineIcon,
  GlobalStyles,
} from './styles';

const publications = [
  {
    title: "Sleeponomics: The Power of Zzzzs for a booming economy",
    source: "The Economic Transcript",
    date: "Jun 13, 2024",
    link: "https://your-hosted-link.com/sleeponomics",
  },
  {
    title: "Green Finance: Nurturing Sustainable Futures",
    source: "The Economic Transcript",
    date: "Jan 20, 2024",
    link: "https://your-hosted-link.com/green-finance",
  },
  {
    title: "What went wrong with Binance?",
    source: "The Economic Transcript",
    date: "Jan 12, 2024",
    link: "https://your-hosted-link.com/binance",
  },
  {
    title: "Cryptoverse: Bitcoin's Remarkable Comeback",
    source: "The Economic Transcript (EconInsider)",
    date: "Jan 10, 2024",
    link: "https://your-hosted-link.com/cryptoverse",
  },
  {
    title: "Dwelling on Crisis: India’s Battle for Adequate Housing",
    source: "The Economic Transcript",
    date: "Dec 10, 2023",
    link: "https://your-hosted-link.com/housing-crisis",
  },
  {
    title: "Chasing The Moon: India's Remarkable Lunar Odyssey",
    source: "The Economic Transcript",
    date: "Oct 10, 2023",
    link: "https://your-hosted-link.com/chasing-the-moon",
  },
];

export function Publications() {
  return (
    <GlobalStyles>
      <ExperienceSection>
        <ExperienceHeading>My Publications</ExperienceHeading>
        <Timeline>
          {publications.map((pub, index) => (
            <TimelineItem key={index} index={index}>
              <TimelineIcon>{index + 1}</TimelineIcon>
              <TimelineContent>
                <h3>{pub.title}</h3>
                <h4>{pub.source}</h4>
                <p>{pub.date}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </TimelineContent>
              
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceSection>
    </GlobalStyles>
  );
}

export default Publications;
