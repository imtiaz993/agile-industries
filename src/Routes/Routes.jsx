import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import ServiceOne from "../Pages/Services/ServiceOne/ServiceOne";
import ServiceTwo from "../Pages/Services/ServiceTwo/ServiceTwo";
import ServiceThree from "../Pages/Services/ServiceThree/ServiceThree";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service-one" element={<ServiceOne />} />
        <Route path="/service-two" element={<ServiceTwo />} />
        <Route path="/service-three" element={<ServiceThree />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default WebRoutes;
