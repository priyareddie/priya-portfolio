import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <div className="container">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s work together"
        subtitle="Open to remote-friendly frontend roles focused on React, Redux & UI engineering."
      />
      <div className="contact">
        <p>
          The fastest way to reach me is via email. I’m happy to discuss frontend roles,
          UI/UX-heavy projects, or AEM + React builds.
        </p>
        <a href="mailto:priyacreddy.15@gmail.com" className="btn btn--primary">
          Email me
        </a>
      </div>
    </div>
  );
};

export default Contact;
