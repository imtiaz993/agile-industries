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
          ABOUT OUR COMPANY
        </Typography>
        <Box>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "24px" }}
          >
            Agile-industries was founded in 2016 with its headquarter in the UAE
            with the goal of providing specialised industrial IoT and automation
            solutions for OEMs and organizations in the MENA area who are fast
            migrating to Industry 4.0 (Digital Transformation).
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "16px" }}
          >
            At agile-Industries, we develop Industrial IoT eco solutions to help
            businesses automate their processes and improve their efficiency.
            Our team of experts are always up-to-date with the latest technology
            trends and we are constantly expanding our services to offer more
            value to our clients.
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "16px" }}
          >
            “Develop with Agility“
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "16px" }}
          >
            Our solutions are created with agility in order to adapt to changing
            client needs while keeping an integrated platform. This embraces a
            whole solution that encompasses concept development, hardware
            fabrication and modification, software development and hosting,
            production and manufacturing, and supply chain management.
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "16px", marginTop: "16px" }}
          >
            We work closely with our clients to understand their specific needs
            and requirements, so that we can develop a tailored solution that
            fits their business perfectly. Our ultimate goal is to help
            businesses increase their productivity and competitiveness in the
            market and reach their sustainability goals.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyProfile;
