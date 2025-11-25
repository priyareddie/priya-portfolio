import React from "react";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <div className="container">
      <SectionTitle
        eyebrow="Experience"
        title="Where I've been working"
        subtitle="Enterprise frontend engineering with a UI/UX focus."
      />
      <div className="experience">
        <div className="experience__item">
          <h3>Senior UI Developer · BlueAcorn iCi</h3>
          <p className="experience__duration">2019 – Present · Raleigh, NC</p>
          <ul>
            <li>
              Build and maintain reusable React and AEM components for enterprise clients
              across telecom, healthcare, and manufacturing.
            </li>
            <li>
              Collaborate with designers, product owners, and backend teams to deliver UX-consistent,
              performant experiences.
            </li>
            <li>
              Improve code quality via reviews, refactoring, and best practices in accessibility
              and performance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
