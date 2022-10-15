import { title } from "process";
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
    <main className="dark ">
      <Navbar />
      <IntroSection />
      <AboutSection title={about} />
      <Projects title={project} />
    </main>
  );
}
export default App;
