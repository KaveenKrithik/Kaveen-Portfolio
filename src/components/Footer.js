import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.instagram.com/kaveeennnn/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://github.com/KaveenKrithik" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/kaveen-krithik-578797311/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
      <p>&copy; 2024 Kaveen Krithik. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


