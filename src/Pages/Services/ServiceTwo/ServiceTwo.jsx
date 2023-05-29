import React from "react";
import Hero from "../../../Common/Hero";
import MainSection from "./Components/MainSection";
import DetailSection from "./Components/DetailSection";
import { Box } from "@mui/material";

const ServiceTwo = () => {
  return (
    <>
      <Hero
        title="Service"
        subTitle="02"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor , inventore incidunt adipisci. Nisi ut aliquip ex ea commodo consequatuis aute irure dolor in."
      />
      <Box sx={{ width: "83%", marginX: "auto" }}>
        <MainSection />
        <DetailSection />
      </Box>
    </>
  );
};

export default ServiceTwo;
