import React from "react";
import AboutCompany from "../../../Assets/images/about-company.png";

const CompanyProfile = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 my-16 lg:my-20">
      <div className="hidden lg:flex justify-end">
        <img className="rounded-xl" src={AboutCompany} alt="" />
      </div>
      <div className="max-w-md mx-auto lg:mx-0">
        <p className="text-base text-[#333333] font-medium">
          ABOUT OUR COMPANY
        </p>
        <h1 className="mt-1 text-blue text-2xl lg:text-3xl font-semibold">
          Explore a different way!
        </h1>
        <div className="text-[#666666] text-base">
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderi t in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
