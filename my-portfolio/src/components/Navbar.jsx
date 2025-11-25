import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <div className="navbar__brand" onClick={() => scrollToId("home")}>
          <span className="navbar__logo">PK</span>
          <span className="navbar__title">Priya Kandula</span>
        </div>
        <nav className="navbar__nav">
          <button onClick={() => scrollToId("about")}>About</button>
          <button onClick={() => scrollToId("skills")}>Skills</button>
          <button onClick={() => scrollToId("projects")}>Projects</button>
          <button onClick={() => scrollToId("experience")}>Experience</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
