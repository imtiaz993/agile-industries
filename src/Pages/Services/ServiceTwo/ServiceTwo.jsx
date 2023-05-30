import React from "react";
import Hero from "../../../Common/Hero";
import MainSection from "./Components/MainSection";
import DetailSection from "./Components/DetailSection";
import { Box } from "@mui/material";

const ServiceTwo = () => {
  return (
    <>
      <Hero
        subTitle="Control and
        Monitoring System for Air Conditioning
        Manufacturers"
      />
      <Box sx={{ width: "83%", marginX: "auto" }}>
        <MainSection />
        <DetailSection />
      </Box>
    </>
  );
};

export default ServiceTwo;
