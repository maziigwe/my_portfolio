import React from "react";
import { Suspense, useContext } from "react";
import { AboutSection } from "./aboutSection";
import { IntroSection } from "./introSection";
import { Navbar } from "./navbar";
import { Projects } from "./projects";
import { ThemeContext } from "../context/themeContext";
import { ThemeContextType } from "../interfaces/theme";
import heading from "../models/heading";

const about: heading = {
  heading: "About me",
};
const project: heading = {
  heading: "Projects",
};

export const Home = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <main className={theme}>
      <Suspense fallback="Loading...">
        <Navbar />
        <IntroSection />
        <AboutSection title={about} />
        <Projects title={project} />
      </Suspense>
    </main>
  );
};
