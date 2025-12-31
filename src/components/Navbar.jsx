import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h3 className="logo">Dhana Dharsini S</h3>

        {/* Desktop + Mobile Menu */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
