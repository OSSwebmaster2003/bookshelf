import React from "react";
import { Box } from "@mui/material";
import bgImage from "../assets/background.png";

const BackgroundContainer = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        width: "100vw",
        height: "100lvh",
        backgroundSize: "fit",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        overflowY: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundContainer;
