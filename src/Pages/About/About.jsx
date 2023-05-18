import React from "react";
import Hero from "../../Common/Hero";
import CompanyProfile from "./Components/CompanyProfile";
import Team from "./Components/Team";

const About = () => {
  return (
    <>
      <Hero
        title="About"
        subTitle="Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor , inventore incidunt adipisci. Nisi ut aliquip ex ea commodo consequatuis aute irure dolor in."
      />
      <div className="w-5/6 mx-auto">
        <CompanyProfile />
        <Team />
      </div>
    </>
  );
};

export default About;
