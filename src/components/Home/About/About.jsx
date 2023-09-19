import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../lottie/95348-coding-boy.json";
import { BsGithub, BsLinkedin } from "react-icons/bs";

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
                <br />
                Beyond coding, I find joy in exploring the world through travel
                and immersing myself in the narratives of movies.
              </p>

              {/* Added social links */}
              <div className="min-h-16 w-full md:flex justify-center items-center">
                <div className="md:flex justify-center items-center gap-5">
                  <a href="https://github.com/trtonmoy">
                    <BsGithub className="text-3xl my-3" />
                  </a>
                  <a href="https://www.linkedin.com/in/tr-tonmoy-roy/">
                    <BsLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
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
