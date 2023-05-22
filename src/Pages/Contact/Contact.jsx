import React from "react";
import Hero from "../../Common/Hero";
import GetInTouch from "./Components/GetInTouch";
import Form from "./Components/Form";
import Info from "./Components/Info";
import { Box } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Hero
        title="Contact"
        subTitle="Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , inventore incidunt adipisci. Nisi ut aliquip ex ea
          commodo consequatuis aute irure dolor in."
      />
      <Box sx={{ width: "83%", marginX: "auto" }}>
        <GetInTouch />
        <Info />
        <Form />
      </Box>
    </>
  );
};

export default Contact;
