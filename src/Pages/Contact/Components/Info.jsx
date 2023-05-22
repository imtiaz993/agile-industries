import React from "react";
import Location from "../../../Assets/icons/blue-location.svg";
import Phone from "../../../Assets/icons/blue-phone.svg";
import Mail from "../../../Assets/icons/blue-mail.svg";
import { Box, Typography } from "@mui/material";

const Info = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "grid",
        gap: "40px",
        marginY:'60px',
        gridTemplateColumns: "1fr",
        [theme.breakpoints.up("md")]: {
          gridTemplateColumns: "1fr 1fr 1fr",
        },
      })}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img width="20px" src={Location} alt="" />
        <Typography
          sx={{
            marginTop: "8px",
            fontSize: "18px",
            textAlign: "center",
            color: "#666666",
          }}
        >
          wel street,park lon, USA
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img width="20px" src={Phone} alt="" />
        <Typography
          sx={{
            marginTop: "8px",
            fontSize: "18px",
            textAlign: "center",
            color: "#666666",
          }}
        >
          +234-5657865
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img width="20px" src={Mail} alt="" />
        <Typography
          sx={{
            marginTop: "8px",
            fontSize: "18px",
            textAlign: "center",
            color: "#666666",
          }}
        >
          companyname@mail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Info;
