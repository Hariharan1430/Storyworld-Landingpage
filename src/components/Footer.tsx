import React from "react";
import "../styles/Footer.css";
import Mail from '../assests/bottom-nav-bar-mail-icon.svg'
import Fbicon from '../assests/FB-icon.svg'
import instaicon from "../assests/insta-icon.svg"
import xicon from '../assests/X-icon.svg'
import whatsupicon from '../assests/whatsapp-icon.svg'
import Playstoreimage from '../assests/playstore.svg'
import Ximage from '../assests/ios.svg'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>StoryWorld</h3>
          <p>
            Creating magical stories with the power of AI.Transform your imagination into captivating narratives.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Contact</h3>
          <div className="contact-info">
            <img src={Mail} alt="Email" className="icon" />
            <p>info@sivra.net</p>
          </div>
          <div className="follow-section">
            <span className="follow-label">Follow us:</span>
            <div className="social-icons">
                <a href="#"><img src={Fbicon} alt="Facebook" /></a>
            <a href="#"><img src={instaicon} alt="Twitter" /></a>
            <a href="#"><img src={xicon} alt="Instagram" /></a>
            <a href="#"><img src={whatsupicon} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* Column 4 */}
          <div className="footer-column">
          <h3>Download</h3>
          <a href="#">
            <img
              src={Playstoreimage}
              alt="Google Play"
              className="store-badge"
            />
          </a>
          <a href="#">
            <img
              src={Ximage}
              alt="App Store"
              className="store-badge"
            />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Story world AI. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;