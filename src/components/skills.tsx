import React from "react";
import skillInterface from "../interfaces/skill";
import heading from "../models/heading";
import { SectionTitle } from "./atoms/sectionTitle";

import { Skill } from "./../models/skill";

interface skillsProps {
  title: heading;
}
const skills: skillInterface[] = [
  {
    id: 1,
    icon: react,
    link: "link",
    name: "REACT",
    description: "description",
  },
  {
    id: 2,
    icon: javascript,
    link: "",
    name: "Javascript",
    description: "a powerful scripting language",
  },
  {
    id: 3,
    icon: typescript,
    link: "",
    name: "Typescript",
    description: "a JS with type",
  },
  { id: 4, icon: node, link: "", name: "HTML", description: "" },
  { id: 5, icon: bootstrap, link: "", name: "CSS", description: "" },
  { id: 8, icon: tailwidcss, link: "", name: "Javascript", description: "" },
  { id: 6, icon: mongoDb, link: "", name: "Javascript", description: "" },
  { id: 7, icon: mysql, link: "", name: "CSS", description: "" },
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
