import "./App.css";
import { AboutSection } from "./components/aboutSection";
import { IntroSection } from "./components/introSection";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <main className="light ">
      <Navbar />
      <IntroSection />
      <AboutSection />
    </main>
  );
}
export default App;
