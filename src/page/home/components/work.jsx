import React from "react";
import ProjectA from "../../../assets/Project A.png";
import ProjectB from "../../../assets/Project B.png";
import ProjectC from "../../../assets/Project C.png";
import ProjectD from "../../../assets/Project D.png";

const Work = () => {
  const items = [
    {
      image: ProjectA,
      title: "Computer Shop Ecommerce",
      description: "",
      link: "https://frontend-rho-pearl.vercel.app/",
    },
    {
      image: ProjectB,
      title: "Cambodia Bon Om Touk",
      description: "",
      link: "https://om-turk-nk9z5w9gd-daravuthwatna.vercel.app/",
    },
    {
      image: ProjectC,
      title: "Admintrator Dashboard",
      description: "",
      link: "",
    },
    {
      image: ProjectD,
      title: "My Protfolio",
      description: "",
      link: "https://www.daravuthwatna.fyi/",
    },
  ];

  return (
    <div className="bg-white flex items-center justify-center">
      <div className="max-w-screen-xl w-full flex flex-col sm:flex-row justify-center bg-gray-100 rounded-lg my-8 p-6 sm:p-10">
        <div className="text-center sm:text-left">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight sm:text-4xl">
            My Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                      View More
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
