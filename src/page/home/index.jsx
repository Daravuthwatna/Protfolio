import React from "react";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Skill from "./components/skill.jsx";
import Work from "./components/work.jsx";
import Contact from "./components/contact.jsx";

const index = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
};

export default index;
