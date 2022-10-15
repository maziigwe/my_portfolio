import React from "react";
import { Project } from "../models/project";
import heading from "./../models/heading";
import { SectionTitle } from "./atoms/sectionTitle";

interface aboutProps {
  title: heading;
}
export const Projects = ({ title }: aboutProps) => {
  return (
    <section id="projects" className="projects py-2">
      <div className="container">
        {" "}
        <SectionTitle title={title} />
        <Project />
      </div>
    </section>
  );
};
