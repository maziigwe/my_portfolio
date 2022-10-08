import "./App.css";
import { AboutSection } from "./components/aboutSection";
import { IntroSection } from "./components/introSection";

import { Navbar } from "./components/navbar";
import { themeContextProvider } from "./context/themeContext";

function App() {
  return (
    <main className="dark ">
      <Navbar />
      <IntroSection />
      <AboutSection />
    </main>
  );
}
export default App;
