import React from "react";

const KidsWarrior = () => {
  return (
    <div className="my-24 lg:flex lg:justify-center lg:items-center">
      <div className="md:w-[50%] px-12">
        <div>
          <h2 className="text-2xl font-extrabold my-4 text-blue-600">
            Warrior Kids
          </h2>
          <p className="text-xl font-bold text-purple-700 my-4">
            Warrior Kids is a 'e-commerce site'{" "}
          </p>
          <div>
            <h3 className="text-lg font-semibold text-rose-600">
              ➢ Core Functionalities:
            </h3>
            <p className="text-slate-600 font-medium my-4">
              • Anyone can visit the site and check out the products with
              details. <br />• Logged in User can Add new products in database
              and see his/her added list. <br />• Any product from the added
              list can be updated and can be deleted.
            </p>
            <h4 className="text-lg font-semibold text-rose-600">
              {" "}
              ➢ Implemented Technologies:
            </h4>
            <p className="text-slate-600 font-medium my-4">
              • Programming Languages: JavaScript <br />• Front-end: React,
              React Router, Tailwind CSS, DaisyUI, SweetAlert - <br />• Other:
              MongoDB, Firebase Authentication, Dotenv.
            </p>
          </div>
          <div className="my-12">
            <a
              className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
              href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-trtonmoy"
            >
              Client
            </a>
            <a
              className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
              href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-trtonmoy"
            >
              Server
            </a>
            <a
              className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
              href="https://warrior-kids.web.app/"
            >
              Live
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] ">
        <img src="/warriorKids.png" alt="" />
      </div>
    </div>
  );
};

export default KidsWarrior;
