import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ img, title, short_description }) => {
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <Link to={`/project/${title}`} className="project-card-detail">
        <div>
          <h1>{title}</h1>
          <p>{short_description}.</p>
        </div>
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default ProjectCard;
