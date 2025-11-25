import React from "react";

const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="section-title">
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
