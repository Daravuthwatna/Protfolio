import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Skill from "./components/skill.jsx";
import Work from "./components/work.jsx";
import Contact from "./components/contact.jsx";

const Index = () => {
  const [activeId, setActiveId] = useState(1);

  const items = [
    { id: 1, name: "Skill", component: <Skill />, sectionId: "skill" },
    { id: 2, name: "Work", component: <Work />, sectionId: "work" },
    { id: 3, name: "Contact", component: <Contact />, sectionId: "contact" },
  ];

  const handleToggle = (id) => {
    if (activeId !== id) {
      setActiveId(id);
    }
  };

  return (
    <div className="w-full cursor-default">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div className="max-w-screen-xl mx-auto p-4 sm:p-8">
        <ul className="flex justify-evenly gap-4">
          {items.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer text-2xl text-gray-500 font-bold hover:underline hover:text-lime-500 ${
                activeId === item.id ? "underline text-lime-500" : ""
              }`}
              onClick={() => handleToggle(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-screen-xl mx-auto pt-0 pb-4 sm:pb-8">
        <AnimatePresence mode="wait">
          {items.map(
            (item) =>
              activeId === item.id && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {item.component}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
