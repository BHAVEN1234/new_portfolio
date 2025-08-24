import React from 'react';
import {
  ExperienceSection,
  ExperienceHeading,
  MembershipsGrid,
  MembershipCard,
  LogoWrapper,
  LogoImage,
  MembershipDetails,
} from './styles';

import logo5 from '../../assets/5.png';
import logo4 from '../../assets/4.png';
import logo3 from '../../assets/3.png';
import logo2 from '../../assets/2.png';
import logo1 from '../../assets/11.svg';

const memberships = [
  { logo: logo1, name: 'Rewriting The Code', date: 'Feb 2025 - Present' },
  { logo: logo2, name: 'LA RIMS ', date: 'Jan 2025 - Present' },
  { logo: logo3, name: '100 Women in Finance', date: 'May 2024 - Present' },
  { logo: logo4, name: 'Women in Economics (WiE', date: 'Apr 2024 - Present' },
  { logo: logo5, name: 'Mithibai Alumni Association', date: 'May 2023 - Present' },
];

export function Memberships() {
  return (
    <ExperienceSection>
      <ExperienceHeading>My Memberships</ExperienceHeading>
      <MembershipsGrid>
        {memberships.map((membership, index) => (
          <MembershipCard key={index}>
            <LogoWrapper>
              <LogoImage src={membership.logo} alt={membership.name} />
            </LogoWrapper>
            <MembershipDetails>
              <h3>{membership.name}</h3>
              <p>{membership.date}</p>
            </MembershipDetails>
          </MembershipCard>
        ))}
      </MembershipsGrid>
    </ExperienceSection>
  );
}

export default Memberships;
