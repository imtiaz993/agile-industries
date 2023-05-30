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

            color: "#004A79",
            fontWeight: "600",
            fontSize: "24px",
            [theme.breakpoints.up("lg")]: {
              fontSize: "30px",
            },
          })}
        >
          Your Digital Transformation Partner toward Industry 4.0
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
        We create Industrial Internet of Things (IoT) eco solutions to assist
        enterprises, original equipment manufacturers (OEMs), sustainable
        businesses, telecom infrastructure, farmers, and educational
        institutions in achieving their automation and sustainability goals.
      </Typography>
      <img src={PowerEnergy} alt="" />
    </Box>
  );
};

export default DigitalTransmission;
