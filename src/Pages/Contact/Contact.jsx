import React from "react";
import Hero from "../../Common/Hero";
import Form from "./Components/Form";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Hero
        subTitle="We’d love to hear from you"
        text="Have questions about our products or services? Our team of experts is on hand to answer your questions."
      />
      <Box sx={{ width: "83%", marginX: "auto" }}>
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
        </Box>
        <Form />
      </Box>
    </>
  );
};

export default Contact;
