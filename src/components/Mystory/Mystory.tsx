import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Card1 from "../../assets/Card1.jpg";
import Card2 from "../../assets/Card2.jpg";
import cameraIcon from "../../assets/Camera.svg";
import paletteIcon from "../../assets/Palette.svg";
import linkedInIcon from "../../assets/linkedin.svg";
// Import your images
import postImage1 from "../../assets/post1.jpg"; // Example: Import your post images
import postImage2 from "../../assets/post2.jpg"; // Example: Import your post images

// Assumed height of your website's header
const HEADER_HEIGHT = '60px';

const SkillsSection = styled.section`
  position: relative; /* Remove fixed height */
  padding-top: calc(${HEADER_HEIGHT} + 20px);
  box-sizing: border-box;
  /* height: auto; This height will now be determined by content*/
  min-height: 300vh; /* Or any reasonable value to ensure initial height */
`;

const SkillsHeading = styled.h2`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ffffff;
  position: sticky;
  top: ${HEADER_HEIGHT};
  left: 0;
  width: 100%;
  z-index: 20;
  font-size: 4rem;
  letter-spacing: 2px;
  box-sizing: border-box;
  margin-bottom: 0;
`;

interface SkillCardProps {
  active: boolean;
  bgColor: string;
}

const SkillCard = styled.div<SkillCardProps>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100vh;  This is likely the problem */
  min-height: 100vh; /* Ensure at least full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.8s ease;
  transform: translateY(${props => (props.active ? "0" : "50px")});
  padding-top: ${HEADER_HEIGHT};
  box-sizing: border-box;
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
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

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
  flex-direction: row; /* Display posts in a row */
  justify-content: space-between; /* Distribute posts evenly */
  gap: 20px;
`;

const LinkedInPost = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 48%; /* Adjust width as needed to fit two posts side by side */
  box-sizing: border-box; /* Make sure padding and border are included in the width */
`;

const PostTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #0a66c2;
`;

const PostContent = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ReadMore = styled.a`
  color: #0a66c2;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

// Styles for the post image
const PostImage = styled.img`
  width: 100%; /* Make the image fill the container */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 10px; /* Add some spacing between the image and the content */
  border-radius: 8px; /* Match the post's border radius */
  object-fit: cover; /* Ensure the image covers the area without distortion */
  max-height: 200px; /* Limit the maximum height of the image */
`;

const skills = [
  {
    title: "Chasing sunsets, cultures and stories",
    description: `There's something deeply grounding about being surrounded by nature—standing on a quiet hilltop as the sky melts into shades of gold, feeling the ocean breeze carry away the weight of the world, or watching a river carve its path through time. Traveling, for me, isn't just about seeing new places; it's about feeling them. The rustling of leaves in a dense forest, the crunch of fresh snow underfoot, or the way a star-lit sky makes everything else feel small—it's in these moments that I feel the most alive.

I believe the best way to understand the world is to experience it. From bustling metropolises to quiet coastal towns, every place has a rhythm, a story, a lesson. As Anthony Bourdain once said, "Travel isn't always pretty. It isn't always comfortable. But that's okay. The journey changes you; it should change you." And that's exactly why I do it—not just to see the world, but to let it shape me.`,
    image: Card1,
    icon: cameraIcon,
    color: "#ffffff",
  },
  {
    title: "My Creative Escape",
    description: `When words fall short, colors and strokes take over. Painting and drawing have always been my way of making sense of the world—a quiet space where ideas flow without rules. Whether it's the intricate details of a pencil sketch or the fluid unpredictability of watercolor, art lets me capture moments, emotions, and thoughts that can't always be put into words. It's a space where logic takes a backseat, and instinct leads the way. Much like life, my art is ever-evolving. Some days it's messy, experimental, and chaotic—other days, it's precise and intentional. But that's what makes it exciting. As Vincent van Gogh said, "What would life be if we had no courage to attempt anything?" Art is my reminder to embrace imperfection, to try, to create for the sake of creating. And in those moments, I find a different kind of clarity.`,
    image: Card2,
    icon: paletteIcon,
    color: "#ffffff",
    cardColor: "#f0f0f0",
  },
  {
    title: "Turning Passion into Purpose",
    description: "",
    icon: linkedInIcon,
    color: "#ffffff",
    posts: [
      {
        title:
          "Redefining My 20s: A Journey of Entrepreneurship, Hard Work & Gratitude",
        content:
          "While most say your 20s are for fun and freedom, I believe it's the best time to give your all. My entrepreneurial journey began in 2020, at just 18, alongside my mom—a decision that reshaped my life. From production and marketing to sales and packaging, I've done it all firsthand, learning the ins and outs of building something from the ground up.\n\nThe long nights and early mornings have been worth it, and being recognized as the 'Rising Star of the Year' at the ISOC Awards 2022 was just the beginning. Grateful for the journey, the lessons, and the people who've supported me along the way.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7011271612234653696/",
        image: postImage1, // Add image to the post object
      },
      {
        title: "Thinking like VC's",
        content:
          "On November 22nd, Team Birch took home 1st place at USC's Venture Capital Investment Competition (VCIC)! But more than the win, it was an experience that felt like a real-world crash course in venture capital.\n\nFrom conducting due diligence on real startup founders to crafting an investment thesis and defending our decisions in front of a panel of industry experts, every step was intense, insightful, and incredibly rewarding. Huge shoutout to my amazing teammates for the collaboration and to USC Marshall for organizing such a dynamic competition. This experience has only fueled my passion for venture capital, and I can't wait for what's next!",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7271728122016772096/",
        image: postImage2, // Add image to the post object
      },
    ],
  },
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

        if (
          newIndex >= 0 &&
          newIndex < skills.length &&
          newIndex !== activeIndex
        ) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, skills.length]);

  return (
    <SkillsSection ref={sectionRef}>
      <SkillsHeading>Beyond the Numbers</SkillsHeading>
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
              {skill.description ? (
                <SkillDescription>{skill.description}</SkillDescription>
              ) : skill.posts ? (
                <LinkedInContainer>
                  {skill.posts.map((post, idx) => (
                    <LinkedInPost key={idx}>
                      {post.image && <PostImage src={post.image} alt={post.title} />}
                      <PostTitle>{post.title}</PostTitle>
                      <PostContent>{post.content}</PostContent>
                      <ReadMore
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                      </ReadMore>
                    </LinkedInPost>
                  ))}
                </LinkedInContainer>
              ) : null}
            </LeftContent>
            {skill.image && (
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
