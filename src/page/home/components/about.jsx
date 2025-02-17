import React from "react";

const About = () => {
  return (
    <div className="bg-white flex items-center justify-center mx-3">
      <div className="max-w-screen-xl w-full flex flex-col sm:flex-row justify-center border-8 border-dashed border-gray-500 rounded-3xl bg-lime-300 my-8 p-6 sm:p-10 relative">
        <div className="text-center sm:text-left">
          <h2 className="mb-4 text-3xl text-gray-500 font-extrabold tracking-tight leading-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mb-4 text-lg sm:text-xl leading-relaxed text-gray-500">
            I am a 4th-year student at the National Institute of Business with a
            passion for web development and strong skills in HTML, CSS,
            JavaScript, React JS, Node.js, and MySQL.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-500">
            As a Full Stack Web Developer, I have hands-on experience managing
            tasks with Trello, committing code on GitLab, and building projects
            using React JS for the frontend with UI libraries like Ant Design.
            On the backend, I’ve implemented MVC architecture with Node.js,
            tested APIs using Postman, and managed databases with MySQL,
            including CRUD operations and complex table relationships.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-gray-500">
            I am eager to contribute to innovative projects, grow as a
            developer, and collaborate in a dynamic team environment.
          </p>
        </div>

        <a
          href="/Phorn Daravuthwatna.pdf"
          download="/Phorn Daravuthwatna.pdf"
          className="bg-white block py-2 pr-4 pl-3 text-gray-500 border-2 border-dashed rounded-md hover:bg-white hover:text-gray-500 absolute bottom-8 right-8"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
