import { Box } from "@mui/material";
import React from "react";

const FlexCenter = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default FlexCenter;
