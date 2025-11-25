import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="container">
      <SectionTitle
        eyebrow="About"
        title="Who I am"
        subtitle="Frontend engineer with a strong UI/UX mindset and enterprise experience."
      />
      <div className="about">
        <p>
          I'm a Frontend UI Engineer specializing in React, Redux, TypeScript, AEM, and
          modern JavaScript frameworks. I build responsive, accessible, and maintainable
          interfaces that scale across large enterprise ecosystems.
        </p>
        <p>
          I've contributed to high-traffic websites such as <strong>enterprise.spectrum.com</strong>,
          <strong> sealedair.com</strong>, and <strong>bcbsnc.com</strong>, collaborating closely with
          designers, backend engineers, and content authors.
        </p>
        <p>
          My strengths include component-driven architecture, performance optimization,
          and translating UX wireframes into production-ready, pixel-perfect experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
