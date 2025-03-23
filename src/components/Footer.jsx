import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-link">
        <li>
          <a href="#about">About</a>
          <div className="under-line"></div>
        </li>
        <li>
          <a href="#services">Services</a>
          <div className="under-line"></div>
        </li>
        <li>
          <a href="#projects">Projects</a>
          <div className="under-line"></div>
        </li>
      </ul>
      <p>&copy; 2025 All right reserved</p>
    </footer>
  );
};

export default Footer;
