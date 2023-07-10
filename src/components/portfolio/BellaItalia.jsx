import React from "react";

const BellaItalia = () => {
  return (
    <div className="lg:flex my-24">
      <div className="w-[50%]">
        <img src="/BellaItalia.png" alt="" />
      </div>
      <div className="w-[50%] text-center">
        <h2>Bella Italia</h2>
        <p>Bella Italia is a blog site of famous chef Paris</p>
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
