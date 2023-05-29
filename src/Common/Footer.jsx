import React from "react";
import { Link } from "react-router-dom";
import WhiteLogo from "../Assets/icons/white-bg-logo.svg";
import Location from "../Assets/icons/location.svg";
import Phone from "../Assets/icons/phone.svg";
import Mail from "../Assets/icons/mail.svg";
import Facebook from "../Assets/icons/facebook.svg";
import Twitter from "../Assets/icons/twitter.svg";
import LinkedIn from "../Assets/icons/linkedin.svg";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="64px">
      <Box sx={{ backgroundColor: "#004A79" }}>
        <Box
          sx={(theme) => ({
            width: "83%",
            marginX: "auto",
            paddingY: "48px",
            display: "block",
            justifyContent: "space-between",
            alignItems: "flex-end",
            [theme.breakpoints.up("sm")]: {
              display: "flex",
            },
            [theme.breakpoints.up("lg")]: {
              width: "75%",
            },
          })}
        >
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: {
                width: "40%",
              },
            })}
          >
            <Link to="/">
              <img src={WhiteLogo} alt="" />
            </Link>
            <Box
              sx={{ marginTop: "16px", display: "flex", alignItems: "center" }}
            >
              <img src={Location} alt="" />
              <Typography
                sx={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                }}
              >
                06 Highley St, Victoria,california Australia.
              </Typography>
            </Box>
            <Box
              sx={{ marginTop: "16px", display: "flex", alignItems: "center" }}
            >
              <img src={Phone} alt="" />
              <Typography
                sx={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                }}
              >
                {" "}
                +566-7798093435
              </Typography>
            </Box>
            <Box
              sx={{ marginTop: "16px", display: "flex", alignItems: "center" }}
            >
              <img src={Mail} alt="" />
              <Typography
                sx={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                }}
              >
                {" "}
                emailbox@email.com
              </Typography>
            </Box>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              marginTop: "32px",
              [theme.breakpoints.up("sm")]: {
                marginTop: "0px",
                width: "50%",
                justifyContent: "space-between",
              },
            })}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                to="/"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              <Link
                to="/"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                  textDecoration: "none",
                  marginTop: "24px",
                }}
              >
                Services
              </Link>
              <Link
                to="/"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                  textDecoration: "none",
                  marginTop: "24px",
                }}
              >
                Case Studies
              </Link>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                marginLeft: "32px",

                [theme.breakpoints.up("sm")]: {
                  marginLeft: "0px",
                },
                [theme.breakpoints.up("lg")]: {
                  paddingLeft: "160px",
                },
              })}
            >
              <Link
                to="/about"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                  textDecoration: "none",
                  marginTop: "24px",
                }}
              >
                Contact Us
              </Link>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "24px",
                }}
              >
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#">
                  <img style={{ marginLeft: "12px" }} src={Twitter} alt="" />
                </a>
                <a href="#">
                  <img style={{ marginLeft: "12px" }} src={LinkedIn} alt="" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#002A42", paddingY: "8px" }}>
        <Typography
          sx={{
            color: "#FAFAFA",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          Copyright Reserved to AGILE INDUSTRIES @2022
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
