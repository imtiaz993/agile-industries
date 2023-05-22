import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/icons/logo.svg";
import { Box, Button, Typography } from "@mui/material";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
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
          <Box sx={{ width: "224px" }}>
            <img width="90%" src={Logo} alt="" />
          </Box>
          <Box>
            <Link
              style={{
                color: "#666666",
                fontSize: "16px",
                marginLeft: "24px",
                textDecoration: "none",
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
              }}
            >
              <option style={{ display: "none" }}>Services</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
            <Link
              style={{
                color: "#666666",
                fontSize: "16px",
                marginLeft: "24px",
                textDecoration: "none",
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
          <Box sx={{ width: "224px" }}>
            <img width="80%" src={Logo} alt="" />
          </Box>
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
              }}
              to="/"
            >
              Home
            </Link>
            <select
              onChange={() => {
                setToggleNavbar(false);
              }}
              style={{
                color: "#666666",
                fontSize: "16px",
                marginBottom: "16px",
                textDecoration: "none",
                marginLeft: "-4px",
                border: "none",
              }}
            >
              <option style={{ display: "none" }}>Services</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
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
