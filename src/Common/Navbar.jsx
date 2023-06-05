import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../Assets/icons/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const services = [
    "/intelligent-power-loggers",
    "/control-and-monitoring-system-for-air-conditioning-manufacturers",
    "/iot-development-for-oems-&-prototyping",
  ];

  useEffect(() => {
    if (!services.includes(location.pathname)) {
      setSelectedService("");
    }
  }, [location]);

  useEffect(() => {
    if (selectedService) {
      navigate(selectedService);
    }
  }, [selectedService]);

  return (
    <>
      <Box
        sx={(theme) => ({
          display: "none",
          position: "fixed",
          zIndex: "20",
          top: "0px",
          width: "100%",
          [theme.breakpoints.up("lg")]: {
            display: "block",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid rgb(75 85 99)",
            borderTop: "0px",
            marginX: "auto",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "0px 0px 12px 12px",
            [theme.breakpoints.up("xl")]: {
              width: "83%",
            },
          })}
        >
          <Link to="/">
            <Box sx={{ width: "224px" }}>
              <img width="90%" src={Logo} alt="" />
            </Box>
          </Link>
          <Box>
            <Link
              style={{
                color: "#666666",
                fontSize: "16px",
                marginLeft: "24px",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to="/"
            >
              Home
            </Link>
            <select
              style={{
                color: "#666666",
                fontSize: "16px",
                marginLeft: "24px",
                outline: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
              value={selectedService}
              onChange={(e) => {
                setSelectedService(e.target.value);
              }}
            >
              <option style={{ display: "none" }}>Services</option>
              <option
                style={{ fontWeight: "600" }}
                value="intelligent-power-loggers"
              >
                Service 1
              </option>
              <option
                style={{ fontWeight: "600" }}
                value="control-and-monitoring-system-for-air-conditioning-manufacturers"
              >
                Service 2
              </option>
              <option
                style={{ fontWeight: "600" }}
                value="iot-development-for-oems-&-prototyping"
              >
                Service 3
              </option>
            </select>
            <Link
              style={{
                color: "#666666",
                fontSize: "16px",
                marginLeft: "24px",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to="/"
            >
              Case Studies
            </Link>
            <Link
              style={{
                color: "#666666",
                fontSize: "16px",
                marginLeft: "24px",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to="/about"
            >
              About Us
            </Link>
            <Link
              style={{
                color: "#666666",
                fontSize: "16px",
                marginLeft: "24px",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to="/contact"
            >
              Contact Us
            </Link>
          </Box>
          <Box>
            <Button
              sx={{
                paddingX: "40px",
                paddingY: "8px",
                backgroundColor: "#004A79",
                borderRadius: "12px",
                fontWeight: "600",
                color: "#FAFAFA",
              }}
            >
              Portal
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={(theme) => ({
          position: "fixed",
          zIndex: "20",
          top: "0px",
          width: "100%",
          backgroundColor: "white",
          height: toggleNavbar && "100vh",
          [theme.breakpoints.up("lg")]: {
            display: "none",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "16px",
            paddingY: "8px",
            backgroundColor: "white",
            borderBottom: "2px solid lightGray",
          }}
        >
          <Link to="/">
            <Box sx={{ width: "224px" }}>
              <img width="80%" src={Logo} alt="" />
            </Box>
          </Link>
          {!toggleNavbar && (
            <Box
              onClick={() => {
                setToggleNavbar(true);
              }}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "4px",
                  marginY: "4px",
                  backgroundColor: "#004A79",
                }}
              ></Box>
              <Box
                sx={{
                  width: "32px",
                  height: "4px",
                  marginY: "4px",
                  backgroundColor: "#004A79",
                }}
              ></Box>
              <Box
                sx={{
                  width: "32px",
                  height: "4px",
                  marginY: "4px",
                  backgroundColor: "#004A79",
                }}
              ></Box>
            </Box>
          )}
          {toggleNavbar && (
            <Box
              onClick={() => {
                setToggleNavbar(false);
              }}
            >
              <Typography
                sx={{ fontSize: "36px", fontWeight: "700", color: "#004A79" }}
              >
                X
              </Typography>
            </Box>
          )}
        </Box>
        {toggleNavbar && (
          <Box
            sx={{
              marginLeft: "9px",
              marginTop: "32px",
              display: "inline-flex",
              flexDirection: "column",
            }}
          >
            <Link
              onClick={() => {
                setToggleNavbar(false);
              }}
              style={{
                color: "#666666",
                fontSize: "16px",
                marginBottom: "16px",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to="/"
            >
              Home
            </Link>
            <select
              value={selectedService}
              onChange={(e) => {
                setToggleNavbar(false);
                setSelectedService(e.target.value);
              }}
              style={{
                color: "#666666",
                fontSize: "16px",
                marginBottom: "16px",
                textDecoration: "none",
                fontWeight: "700",
                marginLeft: "-4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <option style={{ display: "none" }}>Services</option>
              <option value="intelligent-power-loggers">Service 1</option>
              <option value="control-and-monitoring-system-for-air-conditioning-manufacturers">
                Service 2
              </option>
              <option value="iot-development-for-oems-&-prototyping">
                Service 3
              </option>
            </select>
            <Link
              onClick={() => {
                setToggleNavbar(false);
              }}
              style={{
                color: "#666666",
                fontSize: "16px",
                marginBottom: "16px",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to="/"
            >
              Case Studies
            </Link>
            <Link
              onClick={() => {
                setToggleNavbar(false);
              }}
              style={{
                color: "#666666",
                fontSize: "16px",
                marginBottom: "16px",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to="/about"
            >
              About Us
            </Link>
            <Link
              onClick={() => {
                setToggleNavbar(false);
              }}
              style={{
                color: "#666666",
                fontSize: "16px",
                marginBottom: "16px",
                textDecoration: "none",
                fontWeight: "700",
              }}
              to="/contact"
            >
              Contact Us
            </Link>
            <Button
              onClick={() => {
                setToggleNavbar(false);
              }}
              sx={{
                paddingX: "40px",
                paddingY: "8px",
                backgroundColor: "#004A79",
                borderRadius: "12px",
                fontWeight: "600",
                color: "#FAFAFA",
              }}
            >
              Portal
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Navbar;
