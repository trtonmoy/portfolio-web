import React from "react";
import "./Banner.css";
import { FaAngellist } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const borderRadiusOptions = ["30px", "50px", "60px", "80px"];

  // Generate a random border radius value from the options
  const getRandomBorderRadius = () => {
    const randomIndex = Math.floor(Math.random() * borderRadiusOptions.length);
    return borderRadiusOptions[randomIndex];
  };

  const borderRadius = getRandomBorderRadius();

  const [typeEffect] = useTypewriter({
    words: [
      "Tonmoy Roy.",
      "a Passionate Developer.",
      "a Full Stack Developer.",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="min-h-[60vh] p-2 md:p-4 md:flex md:justify-center gap-x-10 md:items-center">
      <div className="">
        <div>
          <div className="my-8">
            <h2 className="text-4xl font-bold tracking-wide">
              Creative Full Stack <br />
              Developer
            </h2>
            <div className="mt-8">
              <span className="text-red-600 text-5xl">
                <FaAngellist></FaAngellist>
              </span>
            </div>
          </div>
          <p className="text-xl font-medium">
            <span className="text-2xl font-semibold">
              Hi, I am <span className="text-purple-950 "> {typeEffect} </span>
            </span>
            <br /> A passionate Full Stack Developer from
            <br /> Dhaka, Bangladesh
          </p>
        </div>
        <div>{/* social icons */}</div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <img
          className="h-[250px] w-[250px] rounded-full my-image"
          src="/tonmoy.png"
          alt="Banner Image"
          style={{ borderRadius: `${borderRadius}%` }}
        />
      </div>
    </div>
  );
};

export default Banner;
