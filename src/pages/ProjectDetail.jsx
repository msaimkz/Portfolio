import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/products";

const ProjectDetail = () => {
  const params = useParams();
  const [project] = projects.filter((proj) => proj.title == params.name);

  return (
    <>
      <div className="banner">
        <div className="banner-inner">
          <h1 className="projectName">
            {project.title.charAt(0).toUpperCase() + project.title.slice(1)}
          </h1>
          <div className="banner-link">
            <div className="banner-link-item">
              <Link to="/">Home</Link>
              <div className="under-line"></div>
            </div>
            <i className="fa-solid fa-greater-than"></i>
            <div className="banner-link-item">
              <Link to="/#project">Project</Link>
              <div className="under-line"></div>
            </div>
            <i className="fa-solid fa-greater-than"></i>
            <h3 className="projectName">
              {project.title.charAt(0).toUpperCase() + project.title.slice(1)}
            </h3>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={project.img} alt="" />
      </div>
      <div className="content-container">
        <h1>Project Description</h1>

        <p id="ProjectDes">{project.description}</p>
        <div id="AnchorCon">
          {project.url ? (
            <Link to={project.url} target="_blank">
              <span>Live Preview</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
