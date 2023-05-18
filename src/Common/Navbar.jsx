import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/icons/logo.svg";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <>
      <div className="hidden lg:block fixed z-20 top-0 w-full">
        <div className="border border-gray-600 border-t-0  xl:w-5/6 mx-auto py-4 px-4 bg-white rounded-bl-xl rounded-br-xl flex justify-between items-center">
          <div className="w-56">
            <img className="w-11/12" src={Logo} alt="" />
          </div>
          <div>
            <Link className="text-gray text-base mr-6" to="/">
              Home
            </Link>
            <select className="text-gray text-base mr-6 outline-none">
              <option className="hidden">Services</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
            <Link className="text-gray text-base mr-6" to="/">
              Case Studies
            </Link>
            <Link className="text-gray text-base mr-6" to="/about">
              About Us
            </Link>
            <Link className="text-gray text-base mr-6" to="/contact">
              Contact Us
            </Link>
          </div>
          <div>
            <button className="px-10 py-2 bg-blue rounded-xl font-semibold text-light">
              Portal
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden fixed z-20 ${
          toggleNavbar && "h-screen"
        } top-0 w-screen px-4 py-2 bg-white border-b-2 border-b-ligherGray`}
      >
        <div className="flex justify-between items-center">
          <div className="w-56">
            <img className="w-4/5" src={Logo} alt="" />
          </div>
          {!toggleNavbar && (
            <div
              onClick={() => {
                setToggleNavbar(true);
              }}
            >
              <span className="w-8 h-1 block my-1 bg-blue"></span>
              <span className="w-8 h-1 block my-1 bg-blue"></span>
              <span className="w-8 h-1 block my-1 bg-blue"></span>
            </div>
          )}
          {toggleNavbar && (
            <div
              onClick={() => {
                setToggleNavbar(false);
              }}
            >
              <span className="block text-4xl fot-bold text-blue">X</span>
            </div>
          )}
        </div>
        {toggleNavbar && (
          <div className="ml-2 mt-8 inline-flex flex-col">
            <Link
              onClick={() => {
                setToggleNavbar(false);
              }}
              className="text-gray text-base mb-4"
              to="/"
            >
              Home
            </Link>
            <select
              onChange={() => {
                setToggleNavbar(false);
              }}
              className="text-gray text-base mb-4 -ml-1"
            >
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
            <Link
              onClick={() => {
                setToggleNavbar(false);
              }}
              className="text-gray text-base mb-4"
              to="/"
            >
              Case Studies
            </Link>
            <Link
              onClick={() => {
                setToggleNavbar(false);
              }}
              className="text-gray text-base mb-4"
              to="/about"
            >
              About Us
            </Link>
            <Link
              onClick={() => {
                setToggleNavbar(false);
              }}
              className="text-gray text-base mb-4"
              to="/contact"
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                setToggleNavbar(false);
              }}
              className="px-10 py-2 bg-blue rounded-xl font-semibold text-light"
            >
              Portal
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
