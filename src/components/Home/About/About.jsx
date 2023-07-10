import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../lottie/95348-coding-boy.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center">
            <div className="sm:w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold tracking-wide text-red-500 mb-4">
                About Me
              </h2>
              <p className="text-lg text-blue-500 font-medium tracking-wide">
                I'm Tonmoy Roy, a junior full stack web developer passionate
                about creating user-friendly experiences. With expertise in
                HTML, CSS, JavaScript, and frameworks like React and Node.js, I
                deliver responsive websites and applications. Detail-oriented
                and a team player, I'm eager to contribute my skills to
                collaborative projects. Let's create something exceptional
                together!
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;