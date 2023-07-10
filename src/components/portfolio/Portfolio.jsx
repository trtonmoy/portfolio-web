import React from "react";
import Rhythmic from "./Rhythmic";
import KidsWarrior from "./KidsWarrior";
import BellaItalia from "./BellaItalia";

const Portfolio = () => {
  return (
    <div className="my-40">
      <h1 className="text-5xl text-red-500 font-bold tracking-wide text-center mt-24">
        My Portfolios{" "}
      </h1>
      <hr className="border-t-2 my-12 border-red-500"></hr>
      <Rhythmic></Rhythmic>
      <hr className="border-t-2  border-red-300"></hr>
      <KidsWarrior></KidsWarrior>
      <hr className="border-t-2  border-red-300"></hr>
      <BellaItalia></BellaItalia>
    </div>
  );
};

export default Portfolio;
