import React from "react";
import "../styles/Footer.css";
import Mail from '../assests/bottom-nav-bar-mail-icon.svg'
import Fbicon from '../assests/FB-icon.svg'
import instaicon from "../assests/insta-icon.svg"
import xicon from '../assests/X-icon.svg'
import whatsupicon from '../assests/whatsapp-icon.svg'
import Playstoreimage from '../assests/playstore.svg'
import Ximage from '../assests/ios.svg'


const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-main">
        {/* Company Information */}
        <div className="footer-column">
          <h3>StoryWorld</h3>
          <p>
            Creating magical stories with the power of AI. Transform your imagination into captivating narratives.
          </p>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h3>Contact</h3>
          <div className="contact-info">
            <img 
              src={Mail} 
              alt="Email icon" 
              className="icon"
              width="18"
              height="18"
            />
            <a 
              href="mailto:info@sivra.net" 
              className="contact-email"
              aria-label="Send email to info@sivra.net"
            >
              info@sivra.net
            </a>
          </div>
          <div className="follow-section">
            <span className="follow-label">Follow us:</span>
            <div className="social-icons" role="list" aria-label="Social media links">
              <a 
                href="https://www.facebook.com/profile.php?id=61573919196110" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                role="listitem"
              >
                <img 
                  src={Fbicon} 
                  alt="Facebook" 
                  width="23" 
                  height="23"
                />
              </a>
              <a 
                href="https://www.instagram.com/thestoryworldapp/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                role="listitem"
              >
                <img 
                  src={instaicon} 
                  alt="Instagram" 
                  width="23" 
                  height="23"
                />
              </a>
              <a 
                href="https://x.com/storyworldapp" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on X (formerly Twitter)"
                role="listitem"
              >
                <img 
                  src={xicon} 
                  alt="X (Twitter)" 
                  width="23" 
                  height="23"
                />
              </a>
              <a 
                href="https://www.linkedin.com/company/thestoryworldapp/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                role="listitem"
              >
                <img 
                  src={whatsupicon} 
                  alt="WhatsApp" 
                  width="23" 
                  height="23"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="footer-column">
          <h3>Legal</h3>
          <nav aria-label="Legal pages">
            <a 
              href="/privacy-policy"
              aria-label="Read our Privacy Policy"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-conditions"
              aria-label="Read our Terms and Conditions"
            >
              Terms & Conditions
            </a>
          </nav>
        </div>

        {/* App Download Links */}
        <div className="footer-column">
          <h3>Download</h3>
          <div className="app-downloads" role="list" aria-label="Download our mobile app">
            <a 
              href="https://play.google.com/store/apps/details?id=com.storyworld.app" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Download StoryWorld app from Google Play Store"
              role="listitem"
            >
              <img
                src={Playstoreimage}
                alt="Get it on Google Play"
                className="store-badge"
                width="130"
                height="40"
              />
            </a>
            <a 
              href="https://apps.apple.com/app/storyworld/id123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Download StoryWorld app from Apple App Store"
              role="listitem"
            >
              <img
                src={Ximage}
                alt="Download on the App Store"
                className="store-badge"
                width="130"
                height="40"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} StoryWorld AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;