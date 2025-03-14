import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>SENSHOP</h3>
          <p>Best place to find the latest and greatest products!</p>
        </div>

        <div className="footer-address">
          <h4>Address</h4>
          <ul>
            <li>East street,2nd Ward  </li>
           
            <li>Poosaripatti, Dindigul(dt)</li>

            <li>sakthivelkalidass@gmail.com</li>

            <li>91+ 6385525185</li>
            
          </ul>
        </div>

        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">Facebook</a>
            <a href="https://instagram.com" className="social-icon">Instagram</a>
            <a href="https://twitter.com" className="social-icon">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Senshop, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
