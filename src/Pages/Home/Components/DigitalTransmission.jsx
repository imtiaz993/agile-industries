import React from "react";
import PowerEnergy from "../../../Assets/images/power-energy.png";

const DigitalTransmission = () => {
  return (
    <div className="mt-20 w-5/6 lg:w-3/5 mx-auto">
      <h1 className="text-center text-gray font-medium text-2xl lg:text-3xl">
        Start Your{" "}
        <span className="text-blue font-semibold">
          Digital Transformation Journey
        </span>
      </h1>
      <p className="mb-6 text-center mt-4 text-gray text-base">
        Our purpose is to help OEMs reach their digital transformation goals and
        adapt to the modern industry. Specialized in industrial IoT, we provide
        full service from electronics design and development, prototyping,
        software and hardware configurations, programming, testing, and
        manufacturing.
      </p>
      <img className="mx-auto lg:w-1/2" src={PowerEnergy} alt="" />
    </div>
  );
};

export default DigitalTransmission;
