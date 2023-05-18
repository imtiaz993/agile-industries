import React from "react";
import Hero from "../../Common/Hero";
import GetInTouch from "./Components/GetInTouch";
import Form from "./Components/Form";
import Info from "./Components/Info";

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
      <div className="w-5/6 mx-auto">
        <GetInTouch />
        <Info />
        <Form />
      </div>
    </>
  );
};

export default Contact;
