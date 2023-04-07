import React from "react";
import AboutMe from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor px-4 ">
      <div className="max-w-screen-2xl mx-auto px-16 sticky top-0 z-50 bg-bodyColor">
        <Navbar />
      </div>

      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
