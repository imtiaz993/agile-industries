import React from "react";
import Hero from "../../Common/Hero";
import CompanyProfile from "./Components/CompanyProfile";
import Team from "./Components/Team";
import { Box } from "@mui/material";

const About = () => {
  return (
    <>
      <Hero
        title="About"
        subTitle="Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor , inventore incidunt adipisci. Nisi ut aliquip ex ea commodo consequatuis aute irure dolor in."
      />
      <Box sx={{ width: "83%", marginX: "auto" }}>
        <CompanyProfile />
        <Team />
      </Box>
    </>
  );
};

export default About;
