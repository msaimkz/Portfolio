import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    console.log(header);

    window.addEventListener("scroll", function () {
      if (window.scrollY > 220) {
        header.classList.add("active");
      } else if (this.window.scrollY == 0) {
        header.classList.remove("active");
      }
    });
  }, []);

  return (
    <>
      <div ref={headerRef} className="scroll-header">
        <a href="mailto:msaimkzmsk2008@gmail.com">msaimkzmsk2008@gmail.com</a>
        <ul className="scroll-header-links">
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
          <li>
            <a href="#skills">Skills</a>
            <div className="under-line"></div>
          </li>
        </ul>
      </div>
      <header className={isProjectPage ? "project-header" : ""}>
        <div className="logo-container">
          <img src="/images/Logo.png" alt="" />
          <a href="mailto:msaimkzmsk2008@gmail.com">msaimkzmsk2008@gmail.com</a>
        </div>
        <ul className="header-links">
          <li>
            <a href="#services">Services</a>
            <div className="under-line"></div>
          </li>
          <li>
            <a href="#projects">Projects</a>
            <div className="under-line"></div>
          </li>
          <li>
            <a href="#skills">Skills</a>
            <div className="under-line"></div>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
