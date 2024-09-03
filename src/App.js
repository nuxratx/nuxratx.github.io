import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Hobby from "./components/Hobby";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import Form from "./components/Form";

import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Hobby></Hobby>
        <Form></Form>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
