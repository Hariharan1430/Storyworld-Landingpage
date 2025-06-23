import React, { useState, useEffect } from 'react';
import logo from '../assests/Story World_Logo-03.png';
// Import your social media icons
import facebookIcon from '../assests/FB-icon.svg';
import instagramIcon from '../assests/insta-icon.svg';
import twitterIcon from '../assests/X-icon.svg';
import linkedinIcon from '../assests/IN-ICON-icon.svg';
import "../styles/Header.css"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll to section
  const handleNavClick = (e:any, targetId:any) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu
    
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle logo click
  const handleLogoClick = (e:any) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Social media links - replace with your actual URLs
  const socialLinks = [
    { icon: facebookIcon, url: 'https://www.facebook.com/profile.php?id=61573919196110', alt: 'Facebook' },
    { icon: instagramIcon, url: 'https://www.instagram.com/thestoryworldapp/', alt: 'Instagram' },
    { icon: twitterIcon, url: 'https://x.com/storyworldapp', alt: 'Twitter' },
    { icon: linkedinIcon, url: 'https://www.linkedin.com/company/thestoryworldapp/', alt: 'LinkedIn' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="#home" onClick={handleLogoClick} className="logo-link">
            <img src={logo} alt="StoryWorld Logo" className="logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <a href="#home" className="nav-link " onClick={(e) => handleNavClick(e, 'home')}>
            Home
          </a>
          <a href="#features" className="nav-link  " onClick={(e) => handleNavClick(e, 'features')}>
            Features
          </a>
          <a href="#how-it-works" className="nav-link" onClick={(e) => handleNavClick(e, 'how-it-works')}>
            How it Works
          </a>
          <a href="#contact" className="nav-link " onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="social-container desktop-social">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.alt}
            >
              <img src={social.icon} alt={social.alt} className="social-icon" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'home')}>
            Home
          </a>
          <a href="#features" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'features')}>
            Features
          </a>
          <a href="#how-it-works" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'how-it-works')}>
            How it Works
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
          
          {/* Mobile Social Icons */}
          <div className="mobile-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="mobile-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
              >
                <img src={social.icon} alt={social.alt} className="mobile-social-icon" />
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}
      </div>
    </header>
  );
};