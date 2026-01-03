import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/Portfolio-Website/logo.jpeg" alt="Tanmay Bora" className="header-logo-img" />
          <h2 className="logo-text">Tanmay Bora</h2>
        </div>
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          id="hamburger" 
          onClick={toggleMenu}
        >
          <i className="fas fa-bars hamburger-icon"></i>
          <i className="fas fa-times cross-icon"></i>
        </div>
        <div className="menu" style={isOpen ? { display: 'block' } : {}}>
          <ul className="menu-list">
            <li className="menu-list-items">
              <NavLink 
                to="/" 
                className={({ isActive }) => `links ${isActive ? 'active-link' : ''}`} 
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="menu-list-items">
              <NavLink 
                to="/achievements" 
                className={({ isActive }) => `links ${isActive ? 'active-link' : ''}`} 
                onClick={() => setIsOpen(false)}
              >
                Achievements
              </NavLink>
            </li>
            <li className="menu-list-items">
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `links ${isActive ? 'active-link' : ''}`} 
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li className="menu-list-items">
              <a 
                href="#contact" 
                className="links" 
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
