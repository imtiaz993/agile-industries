import React from "react";
import PowerEnergy from "../../../Assets/images/power-energy.png";
import { Box, Typography } from "@mui/material";

const DigitalTransmission = () => {
  return (
    <Box
      sx={(theme) => ({
        marginTop: "80px",
        width: "83%",
        textAlign: "center",
        marginX: "auto",
        [theme.breakpoints.up("sm")]: {
          width: "60%",
        },
      })}
    >
      <Box>
        <Typography
          sx={(theme) => ({
            display: "inline",
            color: "#666666",
            fontWeight: "500",
            fontSize: "24px",
            [theme.breakpoints.up("lg")]: {
              fontSize: "30px",
            },
          })}
        >
          Start Your{" "}
        </Typography>
        <Typography
          sx={(theme) => ({
            display: "inline",

            color: "#004A79",
            fontWeight: "600",
            fontSize: "24px",
            [theme.breakpoints.up("lg")]: {
              fontSize: "30px",
            },
          })}
        >
          Digital Transformation Journey
        </Typography>
      </Box>
      <Typography
        sx={{
          marginBottom: "24px",
          textAlign: "center",
          marginTop: "16px",
          color: "#666666",
          fontSize: "16px",
        }}
      >
        Our purpose is to help OEMs reach their digital transformation goals and
        adapt to the modern industry. Specialized in industrial IoT, we provide
        full service from electronics design and development, prototyping,
        software and hardware configurations, programming, testing, and
        manufacturing.
      </Typography>
      <img src={PowerEnergy} alt="" />
    </Box>
  );
};

export default DigitalTransmission;
