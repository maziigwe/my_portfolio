import React, { useEffect, useState, useContext } from "react";
import { Project } from "../models/project";
import { ThemeContext } from "../context/themeContext";
import { ThemeContextType } from "../interfaces/theme";
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
    type: "open source",
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
    type: "side project",
    isLive: true,
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    repo: "",
    type: "open source",
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
    type: "side project",
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    repo: "",
    isLive: true,
    type: "contract",
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
];

export const Projects = ({ title }: aboutProps) => {
  const [repos, SetRepos] = useState(projectList);
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  useEffect(() => {});
  return (
    <>
      {" "}
      <section id="projects" className="container py-2 projects ">
        <SectionTitle title={title} />
        <div className="container mt-4 mb-4 _container">
          {projectList.map((item) => (
            <Project key={item.id.toString()} {...item} />
          ))}
        </div>
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={theme === "dark" ? "#273036" : "#b1cefc"}
          fill-opacity="1"
          d="M0,288L1440,224L1440,0L0,0Z"
        ></path>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path
          fill={theme === "dark" ? "#273036" : "#b1cefc"}
          fill-opacity="1"
          d="M0,0L720,96L1440,0L1440,0L720,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};
