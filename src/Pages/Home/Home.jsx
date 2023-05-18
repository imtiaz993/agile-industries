import React from "react";
import DigitalTransmission from "./Components/DigitalTransmission";
import CoreProducts from "./Components/CoreProducts";
import Slider from "./Components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <DigitalTransmission />
      <CoreProducts />
    </>
  );
};

export default Home;
