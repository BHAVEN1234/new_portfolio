import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Card1 from "../../assets/Card1.jpg";
import Card2 from "../../assets/Card2.jpg";
import cameraIcon from "../../assets/Camera.svg";
import paletteIcon from "../../assets/Palette.svg";
import linkedInIcon from "../../assets/linkedin.svg";
import LinkedInPost1 from "../../assets/LinkedInPost1.png";
import LinkedInPost2 from "../../assets/LinkedInPost2.png";

const SkillsSection = styled.section`
  height: 300vh;
  position: relative;
  padding-top: 100px;
`;

const SkillsHeading = styled.h2`
  text-align: center;
  padding: 20px 0 40px;
  color: #ffffff;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  font-size: 4rem;
  letter-spacing: 2px;
  background: transparent; /* Fixed spelling from "transferant" to "transparent" */
`;

interface SkillCardProps {
  active: boolean;
  bgColor: string;
}

const SkillCard = styled.div<SkillCardProps>`
  position: sticky;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.active ? 1 : 0};
  transition: all 0.8s ease;
  transform: translateY(${props => props.active ? '0' : '50px'});
`;

const SkillContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 98%;
  max-width: 1400px;
  padding: 60px;
  color: #333;
  background-color: ${props => props.color};
  border-radius: 25px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  gap: 40px;
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 15px 25px;
  border-radius: 15px;
  width: fit-content;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const LogoText = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4285f4;
  font-family: sans-serif;
`;

const SkillDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
  color: #333;
  white-space: pre-line;
  font-family: sans-serif;
  max-width: 600px;
  text-align: left;
`;

const ImageContainer = styled.div`
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  height: 600px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  color: #666;
  margin-top: 20px;
  text-align: right;
`;

const LinkedInContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  
  > div {
    flex: 1;
    border-radius: 15px;
    overflow: hidden;
    height: 600px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const skills = [
  {
    title: "iClick",
    description: `I love photography because it's my way of capturing the world through my eyes. With my camera in hand, I feel empowered to express my creativity and emotions. Each image I create tells a story, from the subtle interplay of light and shadow to the candid moments of life caught unexpectedly.

Photography is more than a hobby—it's a profound part of how I connect with and share my view of the world around me.`,
    image: Card1,
    icon: cameraIcon,
    color: "#ffffff"
  },
  {
    title: "iDraw",
    description: `"Every line we draw carries the weight of our hopes and the depth of our longings. Sometimes, these emotions swell so strongly within us, we fear that attempting to depict them might only diminish their truth. Yet, it's precisely this intensity of feeling that drives us to create.

I've found something to hold onto so deeply that the thought of translating it into reality is daunting. It's a fragile hope, like a shadow fleeing from light. I am compelled to capture its essence, yet hesitant, lest my hands fail to do it justice."`,
    quote: "— Elizabeth Carter, Awakenings, Chapter 5: The Echoes of Dreams",
    image: Card2,
    icon: paletteIcon,
    color: "#ffffff"
  },
  {
    title: "iShare",
    description: `Sharing thoughts and experiences is how we grow together. Through LinkedIn, I've found a platform to connect with like-minded individuals and share my journey in creativity and professional growth.

My posts reflect my passion for visual storytelling and artistic expression, reaching out to inspire and connect with others who share similar interests.`,
    images: [LinkedInPost1, LinkedInPost2],
    icon: linkedInIcon,
    color: "#ffffff"
  }
];

export function Mystory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop - 100;
        const scrollPosition = window.pageYOffset - sectionTop;
        const newIndex = Math.floor(scrollPosition / window.innerHeight);
        
        if (newIndex >= 0 && newIndex < skills.length && newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, skills.length]);

  return (
    <SkillsSection ref={sectionRef}>
      <SkillsHeading>My Life Beyond the Screen</SkillsHeading>
      {skills.map((skill, index) => (
        <SkillCard 
          key={index} 
          active={index === activeIndex}
          bgColor={skill.color}
        >
          <SkillContent color={skill.color}>
            <LeftContent>
              <LogoContainer>
                <Icon src={skill.icon} alt={`${skill.title} Icon`} />
                <LogoText>{skill.title}</LogoText>
              </LogoContainer>
              <SkillDescription>
                {skill.description}
                {skill.quote && <QuoteAuthor>{skill.quote}</QuoteAuthor>}
              </SkillDescription>
            </LeftContent>
            {skill.images ? (
              <LinkedInContainer>
                {skill.images.map((image, idx) => (
                  <div key={idx}>
                    <img src={image} alt={`LinkedIn Post ${idx + 1}`} />
                  </div>
                ))}
              </LinkedInContainer>
            ) : skill.image && (
              <ImageContainer>
                <img src={skill.image} alt={skill.title} />
              </ImageContainer>
            )}
          </SkillContent>
        </SkillCard>
      ))}
    </SkillsSection>
  );
}

export default Mystory;
