import React from "react";
import { badgeTitle, bageProps } from "./../../interfaces/badge";

export const Badge = ({ title }: bageProps) => {
  let bgColor = "";
  switch (title) {
    case "open source":
      bgColor = " bg-danger";
      break;
    case "contract":
      bgColor = " bg-warning";
      break;
    case "side project":
      bgColor = " bg-success";
      break;
    default:
      break;
  }

  return (
    <span
      className={`position-absolute rounded-pill mb-1 bottom-0 badge ${bgColor} `}
    >
      {title}
    </span>
  );
};
