import React from "react";
import { Box, Typography } from "@mui/material";
import ServiceDetail1 from "../../../../Assets/images/Picture13.jpg";
import ServiceDetail2 from "../../../../Assets/images/Picture2.png";
import ServiceDetail3 from "../../../../Assets/images/Picture15.jpg";

const DetailSection = () => {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 3,
          mb: 6,
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
            mb: 10,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            borderRadius: "12px",
            [theme.breakpoints.up("lg")]: {
              width: "400px",
            },
          })}
        >
          <img width="100%" src={ServiceDetail1} alt="" />
        </Box>
        <Box
          sx={(theme) => ({
            width: "100%",
            [theme.breakpoints.up("lg")]: {
              width: "50%",
            },
          })}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "22px",
              color: "#333333",
              fontWeight: "600",
              [theme.breakpoints.up("lg")]: {
                fontSize: "25px",
              },
            })}
          >
            2-Stage cooling only / Single Stage cooling + 2-Stage heating
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={2}>
            Ne fugit essent persequeris sed. Qui dico dicam sadipscing no. Ius
            posse omnes eleifend ne, no sea amet oblique. Mea in wisi utinam
            facilisi. Ei lorem instructior sea, populo necessitatibus ut est.
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={1.5}>
            Eu omnes nonumes reformidans sit, et eam aperiam pertinacia. Te
            posse nostro labores pri, agam audire eu mei, natum voluptaria an
            mel. Ut illud maiestatis nec, vis cu propriae deterruisset.
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={1.5}>
            Ea mazim suavitate ius. Ei lorem instructior sea, populo
            necessitatibus ut est. Ne vix voluptua.Corporis facilis officia,
            excepturi dignissimos, vitae aut agam audire eu mei, natum
            voluptaria an mel. Ut illud maiestatis .
          </Typography>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 3,
          mb: 6,
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row-reverse",
            mb: 10,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            borderRadius: "12px",
            [theme.breakpoints.up("lg")]: {
              width: "400px",
            },
          })}
        >
          <img width="100%" src={ServiceDetail2} alt="" />
        </Box>
        <Box
          sx={(theme) => ({
            width: "100%",
            [theme.breakpoints.up("lg")]: {
              width: "50%",
            },
          })}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "22px",
              color: "#333333",
              fontWeight: "600",
              [theme.breakpoints.up("lg")]: {
                fontSize: "25px",
              },
            })}
          >
            2-Stage cooling + 2 Stage heating
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={2}>
            Ne fugit essent persequeris sed. Qui dico dicam sadipscing no. Ius
            posse omnes eleifend ne, no sea amet oblique. Mea in wisi utinam
            facilisi. Ei lorem instructior sea, populo necessitatibus ut est.
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={1.5}>
            Eu omnes nonumes reformidans sit, et eam aperiam pertinacia. Te
            posse nostro labores pri, agam audire eu mei, natum voluptaria an
            mel. Ut illud maiestatis nec, vis cu propriae deterruisset.
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={1.5}>
            Ea mazim suavitate ius. Ei lorem instructior sea, populo
            necessitatibus ut est. Ne vix voluptua.Corporis facilis officia,
            excepturi dignissimos, vitae aut agam audire eu mei, natum
            voluptaria an mel. Ut illud maiestatis .
          </Typography>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 3,
          mb: 6,
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
            mb: 10,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            borderRadius: "12px",
            [theme.breakpoints.up("lg")]: {
              width: "400px",
            },
          })}
        >
          <img width="100%" src={ServiceDetail3} alt="" />
        </Box>
        <Box
          sx={(theme) => ({
            width: "100%",
            [theme.breakpoints.up("lg")]: {
              width: "50%",
            },
          })}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "22px",
              color: "#333333",
              fontWeight: "600",
              [theme.breakpoints.up("lg")]: {
                fontSize: "25px",
              },
            })}
          >
            4-Stage cooling + 2-Stage heating
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={2}>
            Ne fugit essent persequeris sed. Qui dico dicam sadipscing no. Ius
            posse omnes eleifend ne, no sea amet oblique. Mea in wisi utinam
            facilisi. Ei lorem instructior sea, populo necessitatibus ut est.
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={1.5}>
            Eu omnes nonumes reformidans sit, et eam aperiam pertinacia. Te
            posse nostro labores pri, agam audire eu mei, natum voluptaria an
            mel. Ut illud maiestatis nec, vis cu propriae deterruisset.
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#333333" }} mt={1.5}>
            Ea mazim suavitate ius. Ei lorem instructior sea, populo
            necessitatibus ut est. Ne vix voluptua.Corporis facilis officia,
            excepturi dignissimos, vitae aut agam audire eu mei, natum
            voluptaria an mel. Ut illud maiestatis .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailSection;
