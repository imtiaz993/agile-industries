import React from "react";
import PowerEnergy from "../../../Assets/images/power-energy.png";
import AirCondition from "../../../Assets/images/air-condition.png";
import OEM from "../../../Assets/images/oem.png";

const CoreProducts = () => {
  return (
    <div className="mt-20 w-5/6 lg:w-3/4 mx-auto">
      <h1 className="text-center text-gray font-medium text-2xl lg:text-3xl">
        Core Of{" "}
        <span className="text-blue font-semibold">Our Products</span>
      </h1>
      <div className="mt-10 pb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
        <div className=" rounded-xl shadow-xl px-2 py-4 border border-gray">
          <div className="max-w-xs  h-44 mx-auto flex justify-center items-center">
            <img src={PowerEnergy} alt="" />
          </div>
          <p className="text-center text-base text-gray font-semibold mt-2">
            Power & Energy Monitoring
          </p>
        </div>
        <div className=" rounded-xl shadow-xl px-2 py-4 border border-gray">
          <div className="max-w-xs  h-44 mx-auto flex justify-center items-center">
            <img src={AirCondition} alt="" />
          </div>
          <p className="text-center text-base text-gray font-semibold mt-2">
            Air Conditioner & Controllers
          </p>
        </div>
        <div className=" rounded-xl shadow-xl px-2 py-4 border border-gray">
          <div className="max-w-xs  h-44 mx-auto flex justify-center items-center">
            <img src={OEM} alt="" />
          </div>
          <p className="text-center text-base text-gray font-semibold mt-2">
            IoT Development for OEMs & Prototyping
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreProducts;
