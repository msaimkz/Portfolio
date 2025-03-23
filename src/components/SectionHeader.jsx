import React from "react";

const SectionHeader = ({ head, about, children }) => {
  return (
    <div className="section-header">
      <h1>{head}</h1>
      <p>{about}</p>
      {children}
    </div>
  );
};

export default SectionHeader;
