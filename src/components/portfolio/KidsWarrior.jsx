import React from "react";

const KidsWarrior = () => {
  return (
    <div className="my-24 lg:flex lg:justify-center lg:items-center">
      <div className="md:w-[50%] px-4 lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold my-4 text-blue-600">
            Warrior Kids
          </h2>
          <p className="text-xl font-bold text-purple-700 my-4">
            Warrior Kids is a 'e-commerce site'
          </p>
          <div>
            <h3 className="text-lg font-semibold text-rose-600">
              ➢ Core Functionalities:
            </h3>
            <ul className="text-slate-600 text-lg space-y-4 font-medium my-4">
              <li>
                Anyone can visit the site and check out the products with
                details.
              </li>
              <li>
                Logged in User can Add new products in database and see his/her
                added list.
              </li>
              <li>
                Any product from the added list can be updated and can be
                deleted.
              </li>
            </ul>
            <h4 className="text-lg font-semibold text-rose-600">
              ➢ Implemented Technologies:
            </h4>
            <ul className="text-slate-600 font-medium my-4">
              <li>Programming Languages: JavaScript</li>
              <li>
                Front-end: React, React Router, Tailwind CSS, DaisyUI,
                SweetAlert -
              </li>
              <li>Other: MongoDB, Firebase Authentication, Dotenv.</li>
            </ul>
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
      <div className="lg:w-[50%] min-h-screen flex items-center justify-center">
        <div className="w-full h-[500px] overflow-y-scroll">
          <img
            src="/warrior-kids.web.app_.png"
            alt="Landing Page"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsWarrior;
