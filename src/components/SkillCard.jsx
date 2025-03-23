import React from "react";

const SkillCard = ({ img, name }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-icon">
        <img src={img} alt="" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};

export default SkillCard;
