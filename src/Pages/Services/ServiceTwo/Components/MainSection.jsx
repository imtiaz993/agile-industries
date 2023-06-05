import React from "react";
import { Box, Typography } from "@mui/material";
import ServiceMainImage from "../../../../Assets/images/Picture12.png";

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
      <Box sx={{ display: "flex", justifyContent: "center", maxWidth:"600px", marginX:'auto'  }}>
        <img width="75%" src={ServiceMainImage} alt="" />
      </Box>
      <Typography sx={{ fontSize: "16px", color: "#666666", textAlign:'justify' }} mt={2}>
        Packaged Unit Controller (PUC) is a sequential control board designed
        for unitary air conditioning systems and is engineered with flexibility
        to fulfill the needs of any unique Air conditioning OEM. It is
        compatible with single, two, and four stage air conditioning systems, as
        well as optional two-stage heating, a pump down system, and a variety of
        other programmable options.
      </Typography>
      <Typography sx={{ fontSize: "16px", color: "#666666" }} mt={2}>
        It includes an integrated web browser for convenient monitoring and
        diagnostics, as well as an embedded IoT edge for remote monitoring and
        control over the cloud.
      </Typography>
    </Box>
  );
};

export default MainSection;
