import Navbar from "./components/Navbar";

import "./App.css";
import AboutMe from "./components/AboutMe";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects";

import ContactMe from "./components/ContactMe";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <div className="overflow-hidden text-neutral-300 antialiased select-none selection:bg-cyan-300 selection:text-black">
        <div className="fixed top-0 -z-10 min-h-screen w-full">
          <div className="absolute inset-0 -z-10 min-h-screen w-screen -ml-10 [background:radial-gradient(130%_120%_at_50%_20%,#001_55%,#7F00FF_100%)]"></div>
        </div>
        <Navbar />
        <HeroSection />
        <AboutMe />

        <Tech />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
