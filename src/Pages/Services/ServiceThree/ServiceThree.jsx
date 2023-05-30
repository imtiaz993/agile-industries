import React from "react";
import Hero from "../../../Common/Hero";
import MainSection from "./Components/MainSection";
import DetailSection from "./Components/DetailSection";
import { Box } from "@mui/material";

const ServiceThree = () => {
  return (
    <>
      <Hero
        subTitle="IoT Development for
        OEMs & Prototyping"
      />
      <Box sx={{ width: "83%", marginX: "auto" }}>
        <MainSection />
        <DetailSection />
      </Box>
    </>
  );
};

export default ServiceThree;
