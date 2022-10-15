import React from "react";
import heading from "../../models/heading";

interface titleProps {
  title: heading;
}
export const SectionTitle = ({ title }: titleProps) => {
  return (
    <header className="text-center">
      <h4 className="fw-bolder mb-2">{title.heading}</h4>
      <div className="heading-line"></div>
    </header>
  );
};
