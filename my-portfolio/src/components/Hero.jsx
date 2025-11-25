const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Frontend Engineer · React · Redux · AEM</p>
        <h1 className="hero__title">
          I build clean, performant React interfaces for enterprise web apps.
        </h1>
        <p className="hero__subtitle">
          8+ years of frontend experience delivering React, Redux, and AEM-based UIs
          for high-traffic sites like Spectrum, SealedAir, and BCBSNC — with a strong
          focus on UX, accessibility, and performance.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Contact Me
          </a>
          <a
            href="/Priya_Resume.pdf"
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero__card">
        <div className="hero__badge">Open to React/Redux roles</div>
        <p className="hero__tagline">
          React · Redux Toolkit · TypeScript · AEM · Angular · UI/UX
        </p>
        <p className="hero__note">
          I enjoy turning complex requirements into intuitive, production-ready interfaces.
        </p>
      </div>
    </div>
  );
};

export default Hero;