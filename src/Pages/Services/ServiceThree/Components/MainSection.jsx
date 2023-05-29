import React from "react";
import { Box, Typography } from "@mui/material";
import ServiceMainImage from "../../../../Assets/images/service-main-image.png";

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
      <Box>
        <img width="100%" src={ServiceMainImage} alt="" />
      </Box>
      <Typography sx={{ fontSize: "16px", color: "#666666" }} mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore Eu omnes nonumes reformidans sit, et eam
        aperiam pertinacia. Te posse nostro labores pri, agam audire eu mei,
        natum voluptaria an mel. Ut illud maiestatis nec, vis cu propriae
        deterruisset.
      </Typography>
    </Box>
  );
};

export default MainSection;
