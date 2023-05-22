import React from "react";
import AboutCompany from "../../../Assets/images/about-company.png";
import { Box, Typography } from "@mui/material";

const CompanyProfile = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "48px",
        marginY: "64px",
        [theme.breakpoints.up("lg")]: {
          gridTemplateColumns: "1fr 1fr",
          marginY: "80px",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "none",
          [theme.breakpoints.up("lg")]: {
            display: "flex",
            justifyContent: "flex-end",
          },
        })}
      >
        <img style={{ borderRadius: "12px" }} src={AboutCompany} alt="" />
      </Box>
      <Box
        sx={(theme) => ({
          maxWidth: "512px",
          marginX: "auto",
          [theme.breakpoints.up("lg")]: {
            marginX: "0",
          },
        })}
      >
        <Typography
          sx={{ fontSize: "16px", color: "#333333", fontWeight: "500" }}
        >
          ABOUT OUR COMPANY
        </Typography>
        <Typography
          sx={(theme) => ({
            marginTop: "4px",
            color: "#004A79",
            fontSize: "24px",
            fontWeight: "600",
            [theme.breakpoints.up("lg")]: {
              fontSize: "30px",
            },
          })}
        >
          Explore a different way!
        </Typography>
        <Box>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "24px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "16px" }}
          >
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderi t in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "16px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "16px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "16px" }}
          >
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyProfile;
