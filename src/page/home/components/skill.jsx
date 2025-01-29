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
      description: ["HTML", "CSS", "JavaScript", "React JS"],
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
      description: ["MySQL"],
    },
  ];

  return (
    <div className="bg-white flex items-center justify-center">
      <div className="max-w-screen-xl w-full flex flex-col justify-center bg-gray-100 rounded-lg my-8 p-6 sm:p-10">
        <div className="text-center sm:text-left">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{item.name}</h3>
                <ul className="text-gray-700">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
