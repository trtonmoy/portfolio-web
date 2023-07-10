import React from "react";
import Banner from "../../components/Home/Banner";
import Skills from "../../components/Home/Skills/Skills";
import ParticlesBG from "../../components/Particles/ParticlesBG";
import Portfolio from "../../components/portfolio/Portfolio";
import About from "../../components/Home/About/About";
import Resume from "../../components/Resume/Resume";
import Contact from "../../components/Contact/Contact";

const Homepage = () => {
  return (
    <div>
      {/* <ParticlesBG></ParticlesBG> */}
      <Resume></Resume>
      <Banner></Banner>
      <Skills></Skills>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Homepage;
