import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background-color: rgba(33, 33, 33, 0.5);
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  .logo-container .logo {
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      font-family: 'Orbitron', sans-serif;
      font-weight: 800;
      font-size: 3.5rem;
      
      &:first-child {
        color: #6CB4EE;
        text-shadow: 2px 2px 4px #4682B4;
        margin-right: -0.5rem;
      }

      &:last-child {
        color: #FFA500;
        text-shadow: 2px 2px 4px rgb(214, 145, 16);
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      color: #fff;
      padding: 0.5rem;
      font-size: 0.9rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button {
        padding: 0.5rem 1.5rem;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }

    .more-dropdown {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      > a {
        cursor: pointer;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: rgba(33, 33, 33, 0.5);
        backdrop-filter: blur(6px);
        min-width: 160px;
        box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
        z-index: 1;

        a {
          display: block;
          padding: 12px 16px;
          text-decoration: none;
          color: #fff;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      }

      &:hover .dropdown-content {
        display: block;
      }
    }
  }
`;

export const DesktopToggle = styled.label`
  display: none;
  cursor: pointer;
  position: relative;

  @media (min-width: 961px) {
    display: block;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 25px;
    background-color: #2196F3;
    border-radius: 25px;
    transition: .4s;
    cursor: pointer;
  }

  .slider:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    border-radius: 50%;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(24px);
  }
`;

export const MobileMenu = styled.div`
  display: block;
  width: 30px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.3s;
  cursor: pointer;
  position: relative;

  &.active {
    transform: rotate(45deg);
  }

  &.active:before,
  &.active:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #fff;
    transition: 0.3s;
  }

  &.active:before {
    transform: rotate(90deg);
    top: 0;
    right: 0;
  }

  &.active:after {
    opacity: 0;
  }

  @media (min-width: 961px) {
    display: none;
  }
`;