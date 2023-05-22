import { Box, Typography } from "@mui/material";
import React from "react";

const GetInTouch = () => {
  return (
    <Box sx={{ marginTop: "48px" }}>
      <Typography
        sx={(theme) => ({
          color: "#004A79",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "600",
          [theme.breakpoints.up("lg")]: {
            fontSize: "30px",
          },
        })}
      >
        {" "}
        Get in touch!
      </Typography>
      <Typography
        sx={{
          marginTop: "12px",
          color: "#666666",
          textAlign: "center",
          fontSize: "18px",
          maxWidth: "576px",
          marginX: "auto",
        }}
      >
        Eaque suscipit numquam nesciunt, temporibus? Neque veniam similique
        dolorem beatae iste, inventore incidunt adipisci.
      </Typography>
    </Box>
  );
};

export default GetInTouch;
