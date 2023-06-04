import React from "react";
import { Box, Typography } from "@mui/material";
import ServiceMainImage from "../../../../Assets/images/power-energy-new.png";

const MainSection = () => {
  return (
    <Box
      sx={(theme) => ({
        my: 6,
        [theme.breakpoints.up("lg")]: {
          mb: 10,
        },
      })}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img width="75%" src={ServiceMainImage} alt="" />
      </Box>
      <Typography sx={{ fontSize: "16px", color: "#666666" }} mt={2}>
        The intelligent energy logger IEL-300 consists of a class 0.5 advanced
        3- phase power and energy meter with a built-in data logger and an
        integrated IoT edge gateway for IoT connectivity. It enables
        user-friendly and simple remote tracking and monitoring of energy
        consumption/production via IoT connectivity, but it may also be used as
        a standalone power and energy logger with local web-browser
        connectivity. Several versions are available to fit a wide range of
        applications, including energy audits, solar system monitoring, telecom
        site monitoring, street light monitoring and control, and general power
        monitoring applications
      </Typography>
    </Box>
  );
};

export default MainSection;
