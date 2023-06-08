import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <form
      style={{
        borderRadius: "12px",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.24)",
        padding: "64px 32px",
        marginTop: "40px",
      }}
    >
      <Box
        sx={(theme) => ({
          display: "grid",
          gap: "12px",
          gridTemplateColumns: "1fr",
          [theme.breakpoints.up("md")]: {
            gridTemplateColumns: "1fr 1fr",
          },
        })}
      >
        <Box>
          <TextField
            sx={{
              width: "100%",
              marginBottom: "12px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #004A79",
                },
              },
            }}
            inputProps={{
              style: {
                backgroundColor: "#EEEEEE",
                padding: "10px 16px",
                borderRadius: "10px",
              },
            }}
            required
            type="text"
            placeholder="Your Full Name"
          />
          <TextField
            sx={{
              width: "100%",
              marginBottom: "12px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #004A79",
                },
              },
            }}
            inputProps={{
              style: {
                backgroundColor: "#EEEEEE",
                padding: "10px 16px",
                borderRadius: "10px",
              },
            }}
            required
            type="email"
            placeholder="Your Email"
          />
          <TextField
            sx={{
              width: "100%",
              marginBottom: "12px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #004A79",
                },
              },
            }}
            inputProps={{
              style: {
                backgroundColor: "#EEEEEE",
                padding: "10px 16px",
                borderRadius: "10px",
              },
            }}
            required
            type="tel"
            placeholder="Your Phone Number"
          />
        </Box>
          <textarea
            required
            style={{
              fontSize: "16px",
              fontFamily: "ui-sans-serif, system-ui",
              backgroundColor: "#EEEEEE",
              borderRadius: "10px",
              border: "none",
              minWidth: "90%",
              padding: "12px 16px",
              resize: "none",
              outlineColor: "#004A79",
            }}
            placeholder="Message"
            rows={6}
          />
      </Box>
      <Box
        sx={(theme) => ({
          marginTop: "20px",
          marginX: "auto",
          [theme.breakpoints.up("md")]: {
            width: "50%",
          },
        })}
      >
        <Button
          sx={{
            backgroundColor: "#004A79",
            borderRadius: "12px",
            color: "white",
            fontSize: "18px",
            paddingY: "10px",
            width: "100%",
            overflow:"hidden",
            "&:hover": {
              backgroundColor: "#3B7FBF",
          }}}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;
