import React from "react";

const Skill = () => {
  const items = [
    {
      name: "Web Design",
      description: ["Figma", "Adobe XD", "Ant Design"],
    },
    {
      name: "Graphic Design",
      description: ["Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      name: "Frontend Development",
      description: ["HTML + CSS", "JavaScript", "React JS"],
    },
    {
      name: "Responsive Web Design",
      description: ["Bootstrap", "Tailwind CSS"],
    },
    {
      name: "Backend Development",
      description: ["Node JS", "Express JS"],
    },
    {
      name: "Rest API",
      description: ["Postman"],
    },
    {
      name: "Git",
      description: ["GitLab", "GitHub"],
    },
    {
      name: "Database",
      description: ["MySQL", "Mongo DB"],
    },
  ];

  return (
    <div id="skill" className="bg-white flex items-center justify-center mx-3">
      <div className="max-w-screen-xl w-full flex flex-col justify-center border-8 border-dashed border-gray-500 rounded-3xl bg-lime-300 my-8 p-6 sm:p-10">
        <div className="text-center sm:text-left">
          <h2 className="mb-6 text-3xl text-gray-500 font-extrabold tracking-tight sm:text-4xl">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-lime-500">
                  {item.name}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {item.description.map((desc, i) => (
                    <p
                      key={i}
                      className="text-sm text-gray-500 bg-lime-300 px-4 py-1 rounded-2xl"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
