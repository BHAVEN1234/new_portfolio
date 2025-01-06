import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../../assets/Saakshi_Dedhia_Resume.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        {/* Logo Section */}
        <div
          className="logo-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // Align logo to the left
            width: '100%',
            padding: '0 1rem', // Add some spacing
          }}
        >
          <HashLink
            smooth
            to="#home"
            className="logo"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: '800',
                color: '#6CB4EE',
                fontSize: '3.5rem',
                textShadow: '2px 2px 4px #4682B4',
                marginRight: '-0.5rem',
              }}
            >
              {"<S"}
            </span>
            <span
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: '800',
                color: '#FFA500',
                fontSize: '3.5rem',
                textShadow: '2px 2px 4px rgb(214, 145, 16)',
              }}
            >
              {"D>"}
            </span>
          </HashLink>
        </div>

        {/* Navigation Menu */}
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#skills" onClick={closeMenu}>
            Skills
          </NavHashLink>
          <NavHashLink smooth to="#education" onClick={closeMenu}>
            Education
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#experience" onClick={closeMenu}>
            Experience
          </NavHashLink>
          <NavHashLink smooth to="#research" onClick={closeMenu}>
            Research
          </NavHashLink>
          <NavHashLink smooth to="#my-story" onClick={closeMenu}>
            My Story
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={Resume} download className="button">
            Resume
          </a>

          {/* Toggle Button - Positioned after "Resume" */}
          <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
            style={{ marginLeft: '1rem' }}
          />
          <label
            htmlFor="switch"
            style={{
              fontSize: '1rem',
              marginLeft: '0.5rem',
              cursor: 'pointer',
              color: '#fff', // Optional: Add white color for better visibility
            }}
          >
            Toggle
          </label>
        </nav>

        {/* Menu Toggle for Mobile */}
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
