import React from "react";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Frontend Engineer · React · Redux · AEM</p>
        <h1 className="hero__title">
          I craft clean, performant UIs for enterprise web experiences.
        </h1>
        <p className="hero__subtitle">
          8+ years building React and AEM-driven interfaces for brands like Spectrum,
          SealedAir, and BCBSNC — with a strong focus on UX, accessibility, and performance.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero__card">
        <div className="hero__badge">Available for Frontend Roles</div>
        <p className="hero__tagline">
          React · Redux · TypeScript · AEM · Angular · UI/UX
        </p>
        <p className="hero__note">
          I love turning complex requirements into intuitive, delightful interfaces.
        </p>
      </div>
    </div>
  );
};

export default Hero;
