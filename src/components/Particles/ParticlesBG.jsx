import React from "react";
import Particles from "react-tsparticles";import particleConfig from "./config/particleConfig";

const ParticlesBG = () => {
  return (
    <div>
      <Particles params={particleConfig}></Particles>
    </div>
  );
};

export default ParticlesBG;
