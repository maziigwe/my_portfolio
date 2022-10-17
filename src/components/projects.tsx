import React from "react";
import { Project } from "../models/project";
import heading from "./../models/heading";
import { SectionTitle } from "./atoms/sectionTitle";
import project from "./../interfaces/project";

interface aboutProps {
  title: heading;
}
const projectList: project[] = [
  { id: 1, repo: "", dist: "Project 1", image: "" },
  { id: 2, repo: "", dist: "Project 2", image: "" },
  { id: 3, repo: "", dist: "Project 3", image: "" },
  { id: 4, repo: "", dist: "Project 4", image: "" },
  { id: 5, repo: "", dist: "Project 2", image: "" },
  { id: 6, repo: "", dist: "Project 3", image: "" },
  { id: 7, repo: "", dist: "Project 4", image: "" },
];

export const Projects = ({ title }: aboutProps) => {
  return (
    <section id="projects" className="container py-2 projects ">
      <SectionTitle title={title} />
      <div className="container mt-4 _container">
        {projectList.map((item) => (
          <Project key={item.id.toString()} {...item} />
        ))}
      </div>
    </section>
  );
};
