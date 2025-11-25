import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? "app app--dark" : "app"}>
      <Navbar />
      <main>
        <section id="home" className="section section--hero">
          <Hero />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section section--alt">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="experience" className="section section--alt">
          <Experience />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
