import React from "react";

const KidsWarrior = () => {
  return (
    <div className="my-24 lg:flex">
      <div className="w-[50%] px-12">
        <div>
          <h2>Warrior Kids</h2>
          <p>Warrior Kids is a e-commerce site </p>
          <div>
            <h3>➢ Core Functionalities:</h3>
            <p>
              • Anyone can visit the site and check out the products with
              details. <br />• Logged in User can Add new products in database
              and see his/her added list. <br />• Any product from the added
              list can be updated and can be deleted.
            </p>
            <h4> ➢ Implemented Technologies:</h4>
            <p>
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
      <div className="w-[50%] ">
        <img src="/warriorKids.png" alt="" />
      </div>
    </div>
  );
};

export default KidsWarrior;
