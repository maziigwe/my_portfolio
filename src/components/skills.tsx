import React from "react";
import skillInterface from "../interfaces/skill";
import heading from "../models/heading";
import { SectionTitle } from "./atoms/sectionTitle";

import { Skill } from "./../models/skill";

interface skillsProps {
  title: heading;
}
const skills: skillInterface[] = [
  { id: 1, icon: "", link: "", name: "HTML", description: "" },
  { id: 2, icon: "", link: "", name: "CSS", description: "" },
  { id: 3, icon: "", link: "", name: "Javascript", description: "" },
];
export const Skills = ({ title }: skillsProps) => {
  return (
    <section id="skills" className="skills container py-2">
      <SectionTitle title={title} />

      <div className="container mt-4 mb-4 _container">
        {skills.map((item) => (
          <Skill key={item.id.toString()} {...item} />
        ))}
      </div>
    </section>
  );
};
