import "./App.css";
import { IntroSection } from "./components/introSection";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <main className="dark ">
      <Navbar />
      <IntroSection />
    </main>
  );
}

export default App;
