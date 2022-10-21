import { title } from "process";
import { Suspense } from "react";
import "./App.css";
import { AboutSection } from "./components/aboutSection";
import { IntroSection } from "./components/introSection";

import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { themeContextProvider } from "./context/themeContext";
import heading from "./models/heading";

const about: heading = {
  heading: "About me",
};
const project: heading = {
  heading: "Projects",
};
function App() {
  return (
    <Suspense fallback="Loading...">
      <main className="dark ">
        <Navbar />
        <IntroSection />
        <AboutSection title={about} />
        <Projects title={project} />
      </main>
    </Suspense>
  );
}
export default App;
