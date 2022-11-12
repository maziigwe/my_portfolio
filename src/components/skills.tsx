import React from "react";
import heading from "../models/heading";
import { SectionTitle } from "./atoms/sectionTitle";

interface skillsProps {
  title: heading;
}
export const Skills = ({ title }: skillsProps) => {
  return (
    <div>
      <SectionTitle title={title} />
    </div>
  );
};
