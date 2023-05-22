import React from "react";
import TeamMember1 from "../../../Assets/images/team-member-1.png";
import { Box, Typography } from "@mui/material";

const Team = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={(theme) => ({
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
            color: "#666666",
            marginRight: "10px",
            [theme.breakpoints.up("lg")]: {
              fontSize: "30px",
            },
          })}
        >
          Meet
        </Typography>
        <Typography
          sx={(theme) => ({
            fontSize: "24px",
            fontWeight: "600",
            color: "#004A79",
            textAlign: "center",
            [theme.breakpoints.up("lg")]: {
              fontSize: "30px",
            },
          })}
        >
          Our Team
        </Typography>
      </Box>
      <Typography
        sx={{
          marginBottom: "40px",
          fontSize: "16px",
          color: "#666666",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Typography>
      <Box
        sx={(theme) => ({
          display: "grid",
          gap: "80px",
          gridTemplateColumns: "1fr",
          [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "1fr 1fr",
          },
          [theme.breakpoints.up("md")]: {
            gridTemplateColumns: "1fr 1fr",
          },
          [theme.breakpoints.up("xl")]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          },
        })}
      >
        <Box>
          <Box
            sx={(theme) => ({
              borderRadius: "12px",
              width: "75%",
              [theme.breakpoints.up("lg")]: {
                width: "100%",
              },
            })}
          >
            <img width="100%" src={TeamMember1} alt="" />
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: "10px",
              boxShadow: "0px 2px 13px rgba(0, 0, 0, 0.25)",
              backgroundColor:"white",
              paddingY: "12px",
              paddingX: "16px",
              position: "relative",
              bottom: "20px",
              width: "80%",
              left: "32px",
              zIndex: "10",
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
            })}
          >
            <Typography
              sx={{ fontSize: "16px", color: "#333333", fontWeight: "600" }}
            >
              Rubeus Hagrid
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#999999", fontWeight: "500" }}
            >
              Development
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={(theme) => ({
              borderRadius: "12px",
              width: "75%",
              [theme.breakpoints.up("lg")]: {
                width: "100%",
              },
            })}
          >
            <img width="100%" src={TeamMember1} alt="" />
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: "10px",
              boxShadow: "0px 2px 13px rgba(0, 0, 0, 0.25)",
              backgroundColor:"white",
              paddingY: "12px",
              paddingX: "16px",
              position: "relative",
              bottom: "20px",
              width: "80%",
              left: "32px",
              zIndex: "10",
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
            })}
          >
            <Typography
              sx={{ fontSize: "16px", color: "#333333", fontWeight: "600" }}
            >
              Rubeus Hagrid
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#999999", fontWeight: "500" }}
            >
              Development
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={(theme) => ({
              borderRadius: "12px",
              width: "75%",
              [theme.breakpoints.up("lg")]: {
                width: "100%",
              },
            })}
          >
            <img width="100%" src={TeamMember1} alt="" />
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: "10px",
              boxShadow: "0px 2px 13px rgba(0, 0, 0, 0.25)",
              backgroundColor:"white",
              paddingY: "12px",
              paddingX: "16px",
              position: "relative",
              bottom: "20px",
              width: "80%",
              left: "32px",
              zIndex: "10",
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
            })}
          >
            <Typography
              sx={{ fontSize: "16px", color: "#333333", fontWeight: "600" }}
            >
              Rubeus Hagrid
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#999999", fontWeight: "500" }}
            >
              Development
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={(theme) => ({
              borderRadius: "12px",
              width: "75%",
              [theme.breakpoints.up("lg")]: {
                width: "100%",
              },
            })}
          >
            <img width="100%" src={TeamMember1} alt="" />
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: "10px",
              boxShadow: "0px 2px 13px rgba(0, 0, 0, 0.25)",
              backgroundColor:"white",
              paddingY: "12px",
              paddingX: "16px",
              position: "relative",
              bottom: "20px",
              width: "80%",
              left: "32px",
              zIndex: "10",
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
            })}
          >
            <Typography
              sx={{ fontSize: "16px", color: "#333333", fontWeight: "600" }}
            >
              Rubeus Hagrid
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#999999", fontWeight: "500" }}
            >
              Development
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={(theme) => ({
              borderRadius: "12px",
              width: "75%",
              [theme.breakpoints.up("lg")]: {
                width: "100%",
              },
            })}
          >
            <img width="100%" src={TeamMember1} alt="" />
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: "10px",
              boxShadow: "0px 2px 13px rgba(0, 0, 0, 0.25)",
              backgroundColor:"white",
              paddingY: "12px",
              paddingX: "16px",
              position: "relative",
              bottom: "20px",
              width: "80%",
              left: "32px",
              zIndex: "10",
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
            })}
          >
            <Typography
              sx={{ fontSize: "16px", color: "#333333", fontWeight: "600" }}
            >
              Rubeus Hagrid
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#999999", fontWeight: "500" }}
            >
              Development
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={(theme) => ({
              borderRadius: "12px",
              width: "75%",
              [theme.breakpoints.up("lg")]: {
                width: "100%",
              },
            })}
          >
            <img width="100%" src={TeamMember1} alt="" />
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: "10px",
              boxShadow: "0px 2px 13px rgba(0, 0, 0, 0.25)",
              backgroundColor:"white",
              paddingY: "12px",
              paddingX: "16px",
              position: "relative",
              bottom: "20px",
              width: "80%",
              left: "32px",
              zIndex: "10",
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
            })}
          >
            <Typography
              sx={{ fontSize: "16px", color: "#333333", fontWeight: "600" }}
            >
              Rubeus Hagrid
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#999999", fontWeight: "500" }}
            >
              Development
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={(theme) => ({
              borderRadius: "12px",
              width: "75%",
              [theme.breakpoints.up("lg")]: {
                width: "100%",
              },
            })}
          >
            <img width="100%" src={TeamMember1} alt="" />
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: "10px",
              boxShadow: "0px 2px 13px rgba(0, 0, 0, 0.25)",
              backgroundColor:"white",
              paddingY: "12px",
              paddingX: "16px",
              position: "relative",
              bottom: "20px",
              width: "80%",
              left: "32px",
              zIndex: "10",
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
            })}
          >
            <Typography
              sx={{ fontSize: "16px", color: "#333333", fontWeight: "600" }}
            >
              Rubeus Hagrid
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#999999", fontWeight: "500" }}
            >
              Development
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={(theme) => ({
              borderRadius: "12px",
              width: "75%",
              [theme.breakpoints.up("lg")]: {
                width: "100%",
              },
            })}
          >
            <img width="100%" src={TeamMember1} alt="" />
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: "10px",
              boxShadow: "0px 2px 13px rgba(0, 0, 0, 0.25)",
              backgroundColor:"white",
              paddingY: "12px",
              paddingX: "16px",
              position: "relative",
              bottom: "20px",
              width: "80%",
              left: "32px",
              zIndex: "10",
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
            })}
          >
            <Typography
              sx={{ fontSize: "16px", color: "#333333", fontWeight: "600" }}
            >
              Rubeus Hagrid
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#999999", fontWeight: "500" }}
            >
              Development
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
