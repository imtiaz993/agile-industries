import React from "react";
import Hero from "../../../Common/Hero";
import MainSection from "./Components/MainSection";
import DetailSection from "./Components/DetailSection";
import { Box } from "@mui/material";

const ServiceTwo = () => {
  return (
    <>
      <Hero
        title="Control and
      Monitoring System for"
        subTitle="Air Conditioning
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
