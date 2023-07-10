import React from "react";

const Rhythmic = () => {
  return (
    <div className="lg:flex my-24">
      <div className="w-[50%]">
        <img src="/rhythmic academy.png" alt="" />
      </div>
      <div className="w-[50%] px-8">
        <h2>Rhythmic Academy</h2>
        <p>This is a full stack web application</p>
        <div>
          <h4>➢ Core Functionalities:</h4>
          <ul>
            <li>
              • A User can take admission on any course and have to pay to
              purchase the course.
            </li>
            <li>
              • An Instructor can add any new course and he can see the status
              and feedback of his courses.
            </li>
            <li>
              • Admin has the right to approve or deny the new added courses and
              also can manage users.
            </li>
          </ul>
          <h4>➢ Implemented Technologies:</h4>
          <p>
            • Programming Languages: JavaScript <br />• Front-end: React, React
            Router, Tailwind CSS, DaisyUI, TanStack Queries - <br />• Other:
            MongoDB, Firebase Authentication, JWT, Dotenv, Stripe -
          </p>
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
