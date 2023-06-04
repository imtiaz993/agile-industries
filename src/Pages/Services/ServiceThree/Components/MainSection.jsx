import React from "react";
import { Box, Typography } from "@mui/material";
import ServiceMainImage from "../../../../Assets/images/Picture16.png";

const MainSection = () => {
  return (
    <Box
      sx={(theme) => ({
        my: 6,
        [theme.breakpoints.up("lg")]: {
          my: 10,
        },
      })}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img width="75%" src={ServiceMainImage} alt="" />
      </Box>
      <Typography sx={{ fontSize: "16px", color: "#666666" }} mt={2}>
        Bring your ideas to life with our IoT development specialized team. Our
        team collaborates with you from the initial concept to the finished
        product to help you reach your digital transformation goals.
      </Typography>
    </Box>
  );
};

export default MainSection;
