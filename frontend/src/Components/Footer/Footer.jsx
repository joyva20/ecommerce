import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo.jpg'
import github_icon from '../Assets/github_icon.png'
import linkdin_icon from '../Assets/linkdin_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={footer_logo} alt="footer logo" />
        <p>TECHNOGYN</p>
      </div>
      
      {/* Links Section */}
      <ul className="footer-links">
        <li><a href="/" style={{ textDecoration: 'none' }}>Home</a></li>
        <li><a href="http://localhost:3000/" style={{ textDecoration: 'none' }}>Admin Panel</a></li>
        <li><a href="/about" style={{ textDecoration: 'none' }}>About</a></li>
        <li><a href="/contact" style={{ textDecoration: 'none' }}>Contact</a></li>
      </ul>
      
      {/* Social Icons Section */}
      <div className="footer-social-icons">
        <a href="https://github.com/Alogyn" target="_blank" rel="noopener noreferrer">
          <img className="footer-icon" src={github_icon} alt="github" />
        </a>
        <a href="https://linkedin.com/in/derfoufi-mohamed" target="_blank" rel="noopener noreferrer">
          <img className="footer-icon" src={linkdin_icon} alt="linkdin" />
        </a>
      </div>
      
      {/* Copyright Section */}
      <div className="footer-copyright">
        <hr />
        <p>© 2025 Mohamed Derfoufi. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;