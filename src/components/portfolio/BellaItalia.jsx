import React from "react";

const BellaItalia = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center my-24">
      <div className="md:w-[50%]">
        <img src="/BellaItalia.png" alt="" />
      </div>
      <div className="md:w-[50%] px-8">
        <h2 className="text-2xl font-extrabold my-4 text-blue-600">
          Bella Italia
        </h2>
        <p className="text-xl font-bold text-purple-700 my-4">
          Bella Italia is a 'blog site of famous chef of Paris'
        </p>
        <div>
          <h4 className="text-lg font-semibold text-rose-600">
            ➢ Core Functionalities:
          </h4>
          <p className="text-slate-600 font-medium my-4">
            • Users can visit the website and check out our chefs from the chef
            section. <br />• Users can check out the recipes of our chefs who
            are famous for their recipe. <br />• User can add any recipe as
            his/her favorite. After adding they will get a toast message.
          </p>
          <h3 className="text-lg font-semibold text-rose-600">
            ➢ Implemented Technologies:
          </h3>
          <p className="text-slate-600 font-medium my-4">
            • Programming Languages: JavaScript <br />• Front-end: React, React
            Router, Tailwind CSS, DaisyUI, React Toast - <br />• Other: MongoDB,
            Firebase Authentication, Dotenv.
          </p>
        </div>
        <div className="my-12">
          <a
            className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
            href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-trtonmoy"
          >
            client
          </a>
          <a
            className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
            href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-trtonmoy"
          >
            server
          </a>
          <a
            className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
            href="https://bella-italia-e9f2f.web.app/"
          >
            {" "}
            live
          </a>
        </div>
      </div>
    </div>
  );
};

export default BellaItalia;
