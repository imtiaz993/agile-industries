import React from "react";
import PowerEnergy from "../../../Assets/images/power-energy.png";
import AirCondition from "../../../Assets/images/air-condition.png";
import OEM from "../../../Assets/images/oem.png";
import { Box, Typography } from "@mui/material";

const CoreProducts = () => {
  return (
    <Box
      sx={(theme) => ({
        marginTop: "80px",
        width: "83%",
        marginX: "auto",
        [theme.breakpoints.up("lg")]: {
          width: "75%",
        },
      })}
    >
      <Box sx={{ textAlign: "center" }}>
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
          Core Of{" "}
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
          Our Products
        </Typography>
      </Box>
      <Box
        sx={(theme) => ({
          marginTop: "40px",
          paddingBottom: "32px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "32px",
          [theme.breakpoints.up("md")]: {
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          },
          [theme.breakpoints.up("lg")]: {
            gridTemplateColumns: "1fr 1fr 1fr",
          },
        })}
      >
        <Box
          sx={{
            borderRadius: "12px",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            paddingX: "8px",
            paddingY: "16px",
            border: "1px solid #666666",
          }}
        >
          <Box
            sx={{
              height: "176px",
              marginX: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "320px",
            }}
          >
            <img width="100%" src={PowerEnergy} alt="" />
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#666666",
              fontWeight: "600",
              marginTop: "8px",
            }}
          >
            Power & Energy Monitoring
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "12px",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            paddingX: "8px",
            paddingY: "16px",
            border: "1px solid #666666",
          }}
        >
          <Box
            sx={{
              height: "176px",
              marginX: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "320px",
            }}
          >
            <img width="100%" src={AirCondition} alt="" />
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#666666",
              fontWeight: "600",
              marginTop: "8px",
            }}
          >
            Air Conditioner & Controllers
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "12px",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            paddingX: "8px",
            paddingY: "16px",
            border: "1px solid #666666",
          }}
        >
          <Box
            sx={{
              height: "176px",
              marginX: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "320px",
            }}
          >
            <img width="100%" src={OEM} alt="" />
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#666666",
              fontWeight: "600",
              marginTop: "8px",
            }}
          >
            IoT Development for OEMs & Prototyping
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CoreProducts;
