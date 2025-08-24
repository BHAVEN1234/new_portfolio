import React, { useState } from 'react';
import { Container, DesktopToggle, MobileMenu } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Resume from '../../assets/Saakshi_Dedhia_Resume.pdf';

export function Header() {
  const [isDesktopToggleOn, setDesktopToggleOn] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isMoreOpen, setMoreOpen] = useState(false);

  function toggleDesktopTheme() {
    const html = document.querySelector('html');
    if (html) {
      html.classList.toggle('light');
      setDesktopToggleOn(!isDesktopToggleOn);
    }
  }

  function closeMenu() {
    setActive(false);
    setMoreOpen(false);
  }

  function toggleMore(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setMoreOpen(!isMoreOpen);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <div className="logo-container">
          <NavHashLink smooth to="#home" className="logo" onClick={closeMenu}>
            <span>{"<S"}</span>
            <span>{"D>"}</span>
          </NavHashLink>
        </div>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>About me</NavHashLink>
          <NavHashLink smooth to="#skills" onClick={closeMenu}>Skills</NavHashLink>
          <NavHashLink smooth to="#education" onClick={closeMenu}>Education</NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>Project</NavHashLink>
          <NavHashLink smooth to="#experience" onClick={closeMenu}>Experience</NavHashLink>
          <NavHashLink smooth to="#research" onClick={closeMenu}>Research</NavHashLink>
          <NavHashLink smooth to="#my-story" onClick={closeMenu}>My Story</NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact</NavHashLink>

          {/* More Dropdown */}
          <div className="more-dropdown">
            <a href="#" onClick={toggleMore}>More</a>
            {isMoreOpen && (
              <div className="dropdown-content">
                <NavHashLink smooth to="#publications" onClick={closeMenu}>Publications</NavHashLink>
                <NavHashLink smooth to="#memberships" onClick={closeMenu}>Memberships</NavHashLink>
                <NavHashLink smooth to="#social-good" onClick={closeMenu}>Social Good</NavHashLink>
              </div>
            )}
          </div>

          <a href={Resume} download className="button">Resume</a>

          {/* Desktop Toggle Switch */}
          <DesktopToggle>
            <input
              checked={isDesktopToggleOn}
              onChange={toggleDesktopTheme}
              type="checkbox"
              id="desktop-switch"
              name="mode"
            />
            <span className="slider"></span>
          </DesktopToggle>
        </nav>

        {/* Mobile Menu Toggle */}
        <MobileMenu
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => setActive(!isActive)}
        />
      </Router>
    </Container>
  );
}
