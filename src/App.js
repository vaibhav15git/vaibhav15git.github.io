// import React from "react";
// import AboutMe from "./components/about/About";
// import Hero from "./components/hero/Hero";
// import Navbar from "./components/navbar/Navbar";
// import Skills from "./components/skills/Skills";
// import Projects from "./components/projects/Projects";
// import Resume from "./components/resume/Resume";
// import Contact from "./components/contact/Contact";
// import TabTitle from "./useTabTitle";
// import Calender from "./components/githubCalender/Calender";
// import Loading from "./components/loading/Loading";

// function App() {
//   TabTitle("Vaibhav's Portfolio")
//   return (
//     <div className="w-full h-auto bg-bodyColor px-4 ">

//       <div className="max-w-screen-2xl mx-auto px-16 sticky top-0 z-50 bg-bodyColor">
//         <Navbar />
//       </div>

//       <Hero />
//       <AboutMe />
//       <Skills />
//       <Projects />
//       <Resume />
//       <Calender />
//       <Contact />
//     </div>
//   );
// }

// export default App;

//--------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import AboutMe from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
// import TabTitle from "./useTabTitle";
import Calender from "./components/githubCalender/Calender";
import ScrollTopButton from "./components/scrollTop/ScrollTopButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // TabTitle("Vaibhav's Portfolio");

  return (
    <div className="w-full h-auto bg-bodyColor px-4 ">
      <div className="max-w-screen-2xl mx-auto px-16 sticky top-0 z-50 bg-bodyColor">
        <Navbar />
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-screen text-sm uppercase font-semibold text-designColor ">
          <p>Please Wait I'm Here...</p>
        </div>
      ) : (
        <>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          {/* <Resume /> */}
          <Calender />
          <Contact />
          <ScrollTopButton />
        </>
      )}
    </div>
  );
}

export default App;
