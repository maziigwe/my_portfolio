import React from "react";
import ThemeProvider from "./context/themeContext";
import { Home } from "./components/home";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};
export default App;
