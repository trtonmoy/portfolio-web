import React from "react";
import photo1 from "../../../../public/skills/bootstrap.png";
import photo2 from "../../../../public/skills/css.png";
import photo3 from "../../../../public/skills/expressjs.png";
import photo4 from "../../../../public/skills/html5.png";
import photo5 from "../../../../public/skills/js.png";
import photo6 from "../../../../public/skills/mongodb.png";
import photo7 from "../../../../public/skills/nodejs.png";
import photo8 from "../../../../public/skills//react.png";
import photo9 from "../../../../public/skills/tailwind.png";

const Skills = () => {
  return (
    <div className="lg:flex gap-10 lg:justify-center lg:items-center">
      <h1>Tech Stacks</h1>
      <div className="lg:flex lg:justify-evenly">
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo4}
          alt="html5"
        />
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo2}
          alt="css"
        />
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo1}
          alt="bootstrap"
        />
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo9}
          alt="tailwind"
        />
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo5}
          alt="js"
        />
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo8}
          alt="react"
        />
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo7}
          alt="nodejs"
        />
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo3}
          alt="expressjs"
        />
        <img
          className="w-16 mr-6 p-3 bg-slate-100 rounded-md"
          src={photo6}
          alt="mongodb"
        />
      </div>
    </div>
  );
};

export default Skills;
