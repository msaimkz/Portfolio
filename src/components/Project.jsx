import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import projectsData from "../data/products";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState(projectsData);
  const projectNavOverlayRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (event) => {
    const ProjectOverlay = projectNavOverlayRef.current;

    ProjectOverlay.style.left = event.target.offsetLeft + "px";
    ProjectOverlay.style.width = event.target.offsetWidth + "px";

    event.target.classList.add("active");

    const filter = event.target.dataset.filter;
    setActiveFilter(filter);
    if (filter === "all") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === filter
      );
      setProjects(filteredProjects);
    }
  };

  return (
    <section className="projects" id="projects">
      <SectionHeader
        head="My Recent Projects"
        about="We put your ideas and thus your wishes in the form of a unique web
          project that inspires you."
      >
        <div className="project-nav">
          <div ref={projectNavOverlayRef} className="project-nav-overlay"></div>
          {["all", "frontend", "backend"].map((link, index) => {
            return (
              <div
                key={index}
                className={`project-nav-link ${
                  activeFilter === link ? "active" : ""
                }`}
                data-filter={link}
                onClick={handleFilter}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </div>
            );
          })}
        </div>
      </SectionHeader>
      <div className="project-card-container">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              img={project.img}
              title={project.title}
              short_description={project.short_description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
