import React from "react";
import SectionHeader from "./SectionHeader";
import skills from "../data/skills";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <section className="skills" id="skills">
      <SectionHeader
        head="My Skills"
        about="I transform your ideas into dynamic web solutions, combining
          creativity and technology to build seamless digital experiences."
      />
      <div className="skill-card-container">
        {skills.map((skill, index) => {
          return <SkillCard key={index} img={skill.img} name={skill.name} />;
        })}
      </div>
    </section>
  );
};

export default Skill;
