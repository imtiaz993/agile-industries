import React from "react";
import { Link } from "react-router-dom";
import WhiteLogo from "../Assets/icons/white-bg-logo.svg";
import Location from "../Assets/icons/location.svg";
import Phone from "../Assets/icons/phone.svg";
import Mail from "../Assets/icons/mail.svg";
import Facebook from "../Assets/icons/facebook.svg";
import Twitter from "../Assets/icons/twitter.svg";
import LinkedIn from "../Assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="bg-blue">
        <div className="w-5/6 lg:w-3/4 mx-auto py-12 sm:flex justify-between items-end">
          <div className="sm:w-2/5">
            <img src={WhiteLogo} alt="" />
            <div className="mt-4 flex items-center">
              <img src={Location} alt="" />
              <p className="ml-2 text-sm font-medium text-light">
                06 Highley St, Victoria,california Australia.
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <img src={Phone} alt="" />
              <p className="ml-2 text-sm font-medium text-light">
                +566-7798093435
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <img src={Mail} alt="" />
              <p className="ml-2 text-sm font-medium text-light">
                emailbox@email.com
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 flex sm:justify-between mt-8 sm:mt-0">
            <div className="flex flex-col">
              <Link to="/" className="text-sm font-medium text-light">
                Home
              </Link>
              <Link to="/" className="mt-6 text-sm font-medium text-light">
                Services
              </Link>
              <Link to="/" className="mt-6 text-sm font-medium text-light">
                Case Studies
              </Link>
            </div>
            <div className="flex flex-col lg:pr-40 ml-8 sm:ml-0">
              <Link to="/" className="text-sm font-medium text-light">
                About Us
              </Link>
              <Link to="/" className="mt-6 text-sm font-medium text-light">
                Contact Us
              </Link>
              <div className="flex items-center mt-6">
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#">
                  <img className="ml-3" src={Twitter} alt="" />
                </a>
                <a href="#">
                  <img className="ml-3" src={LinkedIn} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkBlue py-2">
        <p className="text-light text-xs sm:font-sm text-center">
          Copyright Reserved to AGILE INDUSTRIES @2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
