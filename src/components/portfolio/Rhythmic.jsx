import React from "react";

const Rhythmic = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center my-24">
      <div className="lg:w-[50%] min-h-screen flex items-center justify-center">
        <div className="w-full h-[550px] overflow-y-scroll">
          <img
            src="/rhythmic-academy.web.app_.png"
            alt="Landing Page"
            className="w-full"
          />
        </div>
      </div>
      <div className="md:w-[50%] px-4 lg:pl-16">
        <h2 className="text-2xl font-extrabold mb-1 text-blue-600">
          Rhythmic Academy
        </h2>
        <p className="text-xl font-bold text-purple-600 mb-8">
          This is a full stack 'academic web application'.
        </p>
        <div>
          <h4 className="text-xl font-semibold text-rose-600">
            ➢ Core Functionalities:
          </h4>
          <ul className="text-slate-600 text-lg space-y-4 font-medium my-4">
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              A User can take admission on any course and have to pay to
              purchase the course.
            </li>
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              An Instructor can add any new course and he can see the status and
              feedback of his courses.
            </li>
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              Admin has the right to approve or deny the new added courses and
              also can manage users.
            </li>
          </ul>
          <h4 className="text-lg font-semibold text-rose-600">
            ➢ Implemented Technologies:
          </h4>
          <ul className="text-slate-600 text-lg space-y-4 font-medium my-4">
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              {" "}
              Programming Languages: JavaScript{" "}
            </li>
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              Front-end: React, React Router, Tailwind CSS, DaisyUI, TanStack
              Queries -
            </li>
            <li className="hover:bg-amber-100 px-3 rounded-md shadow-sm">
              Other: MongoDB, Firebase Authentication, JWT, Dotenv, Stripe -
            </li>
          </ul>
        </div>
        <div className="my-12">
          <a
            className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
            href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-trtonmoy"
          >
            client
          </a>
          <a
            className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
            href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-trtonmoy"
          >
            server
          </a>
          <a
            className="p-2 border m-2 bg-red-400 hover:bg-rose-500 hover:text-white"
            href="https://rhythmic-academy.web.app/"
          >
            live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rhythmic;
