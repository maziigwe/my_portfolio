import React from "react";
import { Project } from "../models/project";
import heading from "./../models/heading";
import { SectionTitle } from "./atoms/sectionTitle";
import project from "./../interfaces/project";

interface aboutProps {
  title: heading;
}
const projectList: project[] = [
  {
    id: 1,
    title: "I4G-HACKTOBER OPEN-SOURCE CHALLENGE-2022",
    description:
      "TECHMART is an open-source project that I recently contributed to",
    repo: "https://github.com/Ingressive-for-Good/I4G-OPENSOURCE-FRONTEND-PROJECT-2022",
    image:
      "https://user-images.githubusercontent.com/70960505/193130210-583a1493-dc4d-4ca8-96cd-8cdf63daafd8.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    repo: "",
    isLive: true,
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    repo: "",
    isLive: true,
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of project 4",
    repo: "",
    isLive: true,
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    repo: "",
    isLive: true,
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
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
