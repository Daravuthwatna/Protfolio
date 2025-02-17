import React from "react";
import Profile from "../../../assets/my-img.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const item = ["Frontend Web Developer", "Full Stack Web Developer"];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-lime-400">
      <div className="max-w-screen h-screen flex flex-col sm:flex-row items-center justify-center sm:justify-evenly mx-auto p-4 sm:p-8">
        <div className="text-center sm:text-left mb-8 sm:mb-0">
          <p className="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none">
            I
            <span className="text-lime-400">
              '
            </span>
            m
          </p>
          <p className="max-w-2xl mb-4 text-4xl text-white font-extrabold  md:text-5xl xl:text-7xl">
            Phorn Daravuthwatna
          </p>
          <p className="max-w-xl mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-blue-500 via-lime-600 to-blue-500 text-transparent bg-clip-text">
            <Typewriter
              words={item}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </p>
          <button
            onClick={handleScrollDown}
            className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-lime-500 hover:text-white transition duration-300 ease-in-out"
          >
            Read more
          </button>
        </div>
        <div className="justify-center sm:justify-start border-8 border-dashed p-4 border-white rounded-3xl hidden sm:block">
          <img
            src={Profile}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96  rounded-3xl"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
