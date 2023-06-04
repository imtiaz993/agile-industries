import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = ({ title, subTitle, text }) => {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "350px",
        backgroundImage: 'url("/pages-hero-bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.up("lg")]: {
          height: "400px",
        },
      })}
    >
      <Box sx={{ width: "80%", marginX: "auto" }}>
        <Box
          sx={(theme) => ({
            textAlign:"center",
            paddingTop: "112px",
            [theme.breakpoints.up("lg")]: {
              paddingTop: "176px",
            },
          })}
        >
          <Typography
            sx={(theme) => ({
              color: "#FAFAFA",
              display:"inline",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              lineHeight: "150%",
              marginRight:'10px',
              [theme.breakpoints.up("lg")]: {
                fontSize: "48px",
              },
            })}
          >
            {title}
          </Typography>
          <Typography
            sx={(theme) => ({
              display:"inline",
              color: "#0BEAA1",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              lineHeight: "150%",
              [theme.breakpoints.up("lg")]: {
                fontSize: "48px",
              },
            })}
          >
            {subTitle}
          </Typography>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "16px",
            color: "white",
            maxWidth: "672px",
            marginX: "auto",
            marginTop: "16px",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
