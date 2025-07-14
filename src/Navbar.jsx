import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
   <div>
     <header className="navbar">
      <div className="logo">Portfolio</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>
      <button className="contact-btn">Contact</button>
    </header>
   </div>
  );
}

export default Navbar;
