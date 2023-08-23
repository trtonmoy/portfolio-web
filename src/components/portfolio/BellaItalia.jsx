import React from "react";

const BellaItalia = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center my-24">
      <div className="lg:w-[50%] min-h-screen flex items-center justify-center">
        <div className="w-full h-[550px] overflow-y-scroll">
          <img
            src="/bella-italia-e9f2f.web.app_.png"
            alt="Landing Page"
            className="w-full"
          />
        </div>
      </div>
      <div className="md:w-[50%] px-4 lg:px-8">
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
          <ul className="text-slate-600 text-lg space-y-4 font-medium my-4">
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              Users can visit the website and check out our chefs from the chef
              section.
            </li>
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              Users can check out the recipes of our chefs who are famous for
              their recipe.
            </li>
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              User can add any recipe as his/her favorite. After adding they
              will get a toast message.
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-rose-600">
            ➢ Implemented Technologies:
          </h3>
          <ul className="text-slate-600 text-lg space-y-4 font-medium my-4">
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              {" "}
              Programming Languages: JavaScript
            </li>
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              Front-end: React, React Router, Tailwind CSS, DaisyUI, React Toast
              -
            </li>
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              {" "}
              Other: MongoDB, Firebase Authentication, Dotenv.
            </li>
          </ul>
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
            live
          </a>
        </div>
      </div>
    </div>
  );
};

export default BellaItalia;
