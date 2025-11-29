import React from "react";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="nav">
      <div className="nav-left">Nirmal Thambi</div>
      <div className="nav-right">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
