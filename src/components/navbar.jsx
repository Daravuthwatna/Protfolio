import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skill", id: "skill" },
    { name: "Work", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-transparent absolute top-0">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto py-5 px-9">
        <div className="flex items-center space-x-3">
          <span className="self-center text-3xl whitespace-nowrap text-blue-900 font-bold">
            My Portfolio
          </span>
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen
              ? "block bg-black/30 h-[90vh] rounded-lg backdrop-blur-md shadow-md md:bg-transparent"
              : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="block py-2 pr-4 pl-3 text-white md:hover:bg-transparent md:hover:text-blue-500 md:hover:underline"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/Phorn Daravuthwatna.pdf"
                download="/Phorn Daravuthwatna.pdf"
                className="md:bg-lime-500 block py-2 pr-4 pl-3 text-white md:border-2 border-dashed rounded-md hover:bg-lime-600"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
