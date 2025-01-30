import React from "react";
import Profile from "../../../assets/my-img.jpg";

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-lime-500">
      <div className="max-w-screen h-screen flex flex-col sm:flex-row items-center justify-center sm:justify-evenly mx-auto p-4 sm:p-8">
        <div className="text-center sm:text-left mb-8 sm:mb-0">
          <p className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-blue-900 to-green-600 text-transparent bg-clip-text md:text-5xl xl:text-6xl">
            Phorn Daravuthwatna
          </p>
          <p className="max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-lg xl:text-3xl">
            Frontend Web Developer +
          </p>
          <p className="max-w-xl mb-4 text-4xl sm:text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-blue-900 via-green-700 to-indigo-600 text-transparent bg-clip-text">
            Full Stack Web Developer
          </p>
          <button
            onClick={handleScrollDown}
            className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
          >
            Read more
          </button>
        </div>
        <div className="flex justify-center sm:justify-start">
          <img
            src={Profile}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 hidden sm:block rounded-full"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
